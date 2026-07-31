import express from 'express';
import Subscriber from '../models/Subscriber.js';
import { requireAdmin } from '../middleware/auth.js';
import { writeLimiter } from '../middleware/limiters.js';
import { isEmail, clampStr, asPlainString } from '../middleware/validate.js';

const router = express.Router();

// Admin-only: the subscriber list is private personal data.
router.get('/', requireAdmin, async (req, res, next) => {
  try {
    const { active } = req.query;
    const query = {};
    if (active !== undefined) query.active = active === 'true';
    const subscribers = await Subscriber.find(query).sort('-createdAt');
    res.json(subscribers);
  } catch (err) { next(err); }
});

// Public subscribe with validation + allowlisted fields.
router.post('/', writeLimiter, async (req, res, next) => {
  try {
    const email = clampStr(asPlainString(req.body.email), 254).toLowerCase();
    const name = clampStr(asPlainString(req.body.name), 100);
    if (!isEmail(email)) return res.status(400).json({ message: 'Please enter a valid email address.' });

    const existing = await Subscriber.findOne({ email });
    if (existing) {
      if (!existing.active) {
        existing.active = true;
        existing.unsubscribedAt = undefined;
        await existing.save();
        return res.json({ message: 'Subscription reactivated' });
      }
      return res.status(400).json({ message: 'Already subscribed' });
    }
    await Subscriber.create({ email, name });
    res.status(201).json({ message: 'Subscribed successfully' });
  } catch (err) { next(err); }
});

router.post('/unsubscribe', writeLimiter, async (req, res, next) => {
  try {
    const email = clampStr(asPlainString(req.body.email), 254).toLowerCase();
    if (!isEmail(email)) return res.status(400).json({ message: 'Please enter a valid email address.' });
    const subscriber = await Subscriber.findOne({ email });
    if (!subscriber) return res.status(404).json({ message: 'Subscriber not found' });
    subscriber.active = false;
    subscriber.unsubscribedAt = new Date();
    await subscriber.save();
    res.json({ message: 'Unsubscribed successfully' });
  } catch (err) { next(err); }
});

export default router;
