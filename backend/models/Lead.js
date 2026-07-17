import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
  },
  company: {
    type: String,
    trim: true,
  },
  projectType: {
    type: String,
    enum: ['AI Chatbot', 'AI Agent', 'Automation', 'Web Development', 'SaaS Platform', 'Consulting', 'Other'],
  },
  budget: {
    type: String,
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'qualified', 'proposal', 'negotiation', 'won', 'lost'],
    default: 'new',
  },
  source: {
    type: String,
    enum: ['website', 'whatsapp', 'referral', 'linkedin', 'other'],
    default: 'website',
  },
  notes: [{
    text: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }],
}, {
  timestamps: true,
});

export default mongoose.model('Lead', leadSchema);
