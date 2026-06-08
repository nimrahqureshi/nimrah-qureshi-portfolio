import express from 'express';
import Subscriber from '../models/Subscriber.js';

const router = express.Router();

// Get all subscribers
router.get('/', async (req, res) => {
  try {
    const { active } = req.query;
    const query = {};
    if (active !== undefined) query.active = active === 'true';

    const subscribers = await Subscriber.find(query).sort('-createdAt');
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Subscribe (public)
router.post('/', async (req, res) => {
  try {
    const existing = await Subscriber.findOne({ email: req.body.email });
    if (existing) {
      if (!existing.active) {
        existing.active = true;
        existing.unsubscribedAt = undefined;
        await existing.save();
        return res.json({ message: 'Subscription reactivated' });
      }
      return res.status(400).json({ message: 'Already subscribed' });
    }

    await Subscriber.create(req.body);
    res.status(201).json({ message: 'Subscribed successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Unsubscribe
router.post('/unsubscribe', async (req, res) => {
  try {
    const subscriber = await Subscriber.findOne({ email: req.body.email });
    if (!subscriber) return res.status(404).json({ message: 'Subscriber not found' });
    
    subscriber.active = false;
    subscriber.unsubscribedAt = new Date();
    await subscriber.save();
    
    res.json({ message: 'Unsubscribed successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
