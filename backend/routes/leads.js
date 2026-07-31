import express from 'express';
import Lead from '../models/Lead.js';
import { requireAdmin } from '../middleware/auth.js';
import { writeLimiter } from '../middleware/limiters.js';
import { isEmail, clampStr, asPlainString } from '../middleware/validate.js';

const router = express.Router();

// ---- Admin-only: leads contain private client data (names, emails, briefs).
router.get('/', requireAdmin, async (req, res, next) => {
  try {
    const { status, source } = req.query;
    const page = Math.max(1, parseInt(req.query.page, 10) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(req.query.limit, 10) || 20));
    const query = {};
    if (status) query.status = String(status);
    if (source) query.source = String(source);

    const [leads, total] = await Promise.all([
      Lead.find(query).sort('-createdAt').skip((page - 1) * limit).limit(limit),
      Lead.countDocuments(query),
    ]);
    res.json({ leads, total, pages: Math.ceil(total / limit), currentPage: page });
  } catch (err) { next(err); }
});

router.get('/:id', requireAdmin, async (req, res, next) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json(lead);
  } catch (err) { next(err); }
});

// ---- Public lead creation with an explicit field allowlist (no mass assignment).
router.post('/', writeLimiter, async (req, res, next) => {
  try {
    const name = clampStr(asPlainString(req.body.name), 100);
    const email = clampStr(asPlainString(req.body.email), 254).toLowerCase();
    const message = clampStr(asPlainString(req.body.message), 5000);
    if (name.length < 2 || !isEmail(email) || message.length < 10) {
      return res.status(400).json({ message: 'Name, valid email, and a short message are required.' });
    }
    const lead = await Lead.create({
      name, email, message,
      company: clampStr(asPlainString(req.body.company), 150),
      subject: clampStr(asPlainString(req.body.subject), 150),
      projectType: clampStr(asPlainString(req.body.projectType), 60),
      budget: clampStr(asPlainString(req.body.budget), 60),
      source: 'website',
    });
    res.status(201).json({ message: 'Message received successfully', lead: { _id: lead._id } });
  } catch (err) { next(err); }
});

router.put('/:id', requireAdmin, async (req, res, next) => {
  try {
    const allowed = ['status', 'projectType', 'budget', 'company'];
    const update = {};
    for (const k of allowed) if (k in req.body) update[k] = clampStr(asPlainString(req.body[k]), 150);
    const lead = await Lead.findByIdAndUpdate(req.params.id, update, { new: true, runValidators: true });
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json(lead);
  } catch (err) { next(err); }
});

router.delete('/:id', requireAdmin, async (req, res, next) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json({ message: 'Lead deleted successfully' });
  } catch (err) { next(err); }
});

router.post('/:id/notes', requireAdmin, async (req, res, next) => {
  try {
    const text = clampStr(asPlainString(req.body.text), 2000);
    if (!text) return res.status(400).json({ message: 'Note text is required.' });
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    lead.notes.push({ text });
    await lead.save();
    res.json(lead);
  } catch (err) { next(err); }
});

export default router;
