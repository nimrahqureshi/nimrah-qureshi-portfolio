import rateLimit from 'express-rate-limit';

/** Stricter limit for public write endpoints that trigger emails / DB inserts. */
export const writeLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 8,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many submissions from this network. Please try again in a few minutes.' },
});
