import express from 'express';
import BlogPost from '../models/BlogPost.js';
import { requireAdmin } from '../middleware/auth.js';

const router = express.Router();

// Public reads
router.get('/', async (req, res, next) => {
  try {
    const { category, published } = req.query;
    const page = Math.max(1, parseInt(req.query.page, 10) || 1);
    const limit = Math.min(50, Math.max(1, parseInt(req.query.limit, 10) || 10));
    const query = {};
    if (category) query.category = String(category);
    if (published !== undefined) query.published = published === 'true';

    const [posts, total] = await Promise.all([
      BlogPost.find(query).sort('-createdAt').skip((page - 1) * limit).limit(limit),
      BlogPost.countDocuments(query),
    ]);
    res.json({ posts, total, pages: Math.ceil(total / limit), currentPage: page });
  } catch (err) { next(err); }
});

router.get('/slug/:slug', async (req, res, next) => {
  try {
    const post = await BlogPost.findOne({ slug: req.params.slug });
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (err) { next(err); }
});

router.get('/:id', async (req, res, next) => {
  try {
    const post = await BlogPost.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (err) { next(err); }
});

// Admin-only writes
router.post('/', requireAdmin, async (req, res, next) => {
  try { res.status(201).json(await BlogPost.create(req.body)); } catch (err) { next(err); }
});
router.put('/:id', requireAdmin, async (req, res, next) => {
  try {
    const post = await BlogPost.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (err) { next(err); }
});
router.delete('/:id', requireAdmin, async (req, res, next) => {
  try {
    const post = await BlogPost.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json({ message: 'Post deleted successfully' });
  } catch (err) { next(err); }
});

export default router;
