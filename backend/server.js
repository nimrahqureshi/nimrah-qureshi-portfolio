import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mongoSanitize from 'express-mongo-sanitize';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();

// Route imports
import leadRoutes from './routes/leads.js';
import projectRoutes from './routes/projects.js';
import testimonialRoutes from './routes/testimonials.js';
import blogRoutes from './routes/blog.js';
import subscriberRoutes from './routes/subscribers.js';
import paymentRoutes, { stripeWebhook } from './routes/payments.js';
import contactRoutes from './routes/contact.js';
import aiRoutes from './routes/ai.js';

const app = express();
const PORT = process.env.PORT || 5000;
app.set('trust proxy', 1); // correct client IPs for rate limiting behind Vercel/proxies

// ---- Security headers ----
app.use(helmet()); // was imported but never applied before

// ---- CORS: only known frontend origins; undefined entries filtered out ----
const allowedOrigins = [
  'http://localhost:5173',
  'https://nimrah-qureshi-portfolio.vercel.app',
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true); // curl, server-to-server, same-origin
      if (allowedOrigins.includes(origin)) return callback(null, true);
      callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
  })
);

// ---- Stripe webhook MUST receive the raw body. Mounted BEFORE express.json,
//      otherwise the JSON parser consumes the stream and signature
//      verification fails on every event. ----
app.post('/api/payments/stripe-webhook', express.raw({ type: 'application/json' }), stripeWebhook);

// ---- Rate limiting ----
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many requests, please try again later.' },
});
app.use('/api/', globalLimiter);

// ---- Body parsing: a contact API never needs 10mb payloads ----
app.use(express.json({ limit: '50kb' }));
app.use(express.urlencoded({ extended: true, limit: '50kb' }));

// ---- Strip Mongo operators ($, .) from user input (NoSQL injection) ----
app.use(mongoSanitize());

// ---- Lazy, cached DB connection (serverless-safe) ----
app.use(async (_req, _res, next) => {
  try {
    await connectDB();
    next();
  } catch (err) {
    next(err);
  }
});

// ---- API Routes ----
app.use('/api/leads', leadRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/subscribers', subscriberRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/ai', aiRoutes);

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString(), uptime: process.uptime() });
});

// ---- Error handler: log server-side, never leak stack traces to clients ----
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error(err.message);
  const status = err.message === 'Not allowed by CORS' ? 403 : err.status || 500;
  res.status(status).json({
    message: status === 500 ? 'Internal server error' : err.message,
  });
});

// Local development: actually listen. On Vercel the exported app is wrapped
// by the platform, so we must not bind a port there.
if (!process.env.VERCEL) {
  app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));
}

export default app;
