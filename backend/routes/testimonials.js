import express from 'express';
import Testimonial from '../models/Testimonial.js';
import { requireAdmin } from '../middleware/auth.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const { featured, published } = req.query;
    const query = {};
    if (featured) query.featured = featured === 'true';
    if (published !== undefined) query.published = published === 'true';
    res.json(await Testimonial.find(query).sort('-createdAt'));
  } catch (err) { next(err); }
});

router.post('/', requireAdmin, async (req, res, next) => {
  try { res.status(201).json(await Testimonial.create(req.body)); } catch (err) { next(err); }
});
router.put('/:id', requireAdmin, async (req, res, next) => {
  try {
    const t = await Testimonial.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!t) return res.status(404).json({ message: 'Testimonial not found' });
    res.json(t);
  } catch (err) { next(err); }
});
router.delete('/:id', requireAdmin, async (req, res, next) => {
  try {
    const t = await Testimonial.findByIdAndDelete(req.params.id);
    if (!t) return res.status(404).json({ message: 'Testimonial not found' });
    res.json({ message: 'Testimonial deleted successfully' });
  } catch (err) { next(err); }
});

export default router;
