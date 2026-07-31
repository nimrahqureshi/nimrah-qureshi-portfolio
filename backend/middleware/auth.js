import crypto from 'crypto';

/**
 * Interim admin authentication until the Clerk-based dashboard (Phase 3) ships.
 * Protects every read/write endpoint that exposes private data (leads,
 * subscribers) or mutates content (blog, projects, testimonials).
 *
 * Usage: set ADMIN_API_KEY in the environment, then send
 *   Authorization: Bearer <ADMIN_API_KEY>
 * If ADMIN_API_KEY is unset, admin routes are disabled entirely (fail closed).
 */
export function requireAdmin(req, res, next) {
  const configured = process.env.ADMIN_API_KEY;
  if (!configured) {
    return res.status(503).json({ message: 'Admin access is not configured.' });
  }
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  const a = Buffer.from(token);
  const b = Buffer.from(configured);
  const valid = a.length === b.length && crypto.timingSafeEqual(a, b);
  if (!valid) {
    return res.status(401).json({ message: 'Unauthorized.' });
  }
  next();
}
