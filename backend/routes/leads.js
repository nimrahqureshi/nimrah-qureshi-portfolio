import express from 'express';
import Lead from '../models/Lead.js';

const router = express.Router();

// Get all leads
router.get('/', async (req, res) => {
  try {
    const { status, source, page = 1, limit = 20 } = req.query;
    const query = {};
    if (status) query.status = status;
    if (source) query.source = source;

    const leads = await Lead.find(query)
      .sort('-createdAt')
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Lead.countDocuments(query);

    res.json({
      leads,
      total,
      pages: Math.ceil(total / limit),
      currentPage: Number(page),
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single lead
router.get('/:id', async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json(lead);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create lead (public)
router.post('/', async (req, res) => {
  try {
    const lead = await Lead.create(req.body);
    
    // TODO: Send notification email via Resend
    // TODO: Send confirmation email to lead
    
    res.status(201).json({ message: 'Message received successfully', lead });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update lead
router.put('/:id', async (req, res) => {
  try {
    const lead = await Lead.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json(lead);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete lead
router.delete('/:id', async (req, res) => {
  try {
    const lead = await Lead.findByIdAndDelete(req.params.id);
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    res.json({ message: 'Lead deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add note to lead
router.post('/:id/notes', async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) return res.status(404).json({ message: 'Lead not found' });
    
    lead.notes.push({ text: req.body.text });
    await lead.save();
    
    res.json(lead);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
