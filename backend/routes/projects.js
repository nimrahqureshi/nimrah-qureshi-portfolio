import express from 'express';
import Project from '../models/Project.js';
import { requireAdmin } from '../middleware/auth.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const { category, featured, published } = req.query;
    const query = {};
    if (category) query.category = String(category);
    if (featured) query.featured = featured === 'true';
    if (published !== undefined) query.published = published === 'true';
    res.json(await Project.find(query).sort('order'));
  } catch (err) { next(err); }
});

router.get('/:id', async (req, res, next) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (err) { next(err); }
});

router.post('/', requireAdmin, async (req, res, next) => {
  try { res.status(201).json(await Project.create(req.body)); } catch (err) { next(err); }
});
router.put('/:id', requireAdmin, async (req, res, next) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json(project);
  } catch (err) { next(err); }
});
router.delete('/:id', requireAdmin, async (req, res, next) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: 'Project not found' });
    res.json({ message: 'Project deleted successfully' });
  } catch (err) { next(err); }
});

export default router;
