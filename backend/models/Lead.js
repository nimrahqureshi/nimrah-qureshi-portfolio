import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'], trim: true, maxlength: 100 },
  email: { type: String, required: [true, 'Email is required'], trim: true, lowercase: true, maxlength: 254 },
  company: { type: String, trim: true, maxlength: 150 },
  /** Free-text subject line from the contact form. */
  subject: { type: String, trim: true, maxlength: 150 },
  /**
   * Optional structured category. Previously a strict enum, which made the
   * contact form fail whenever a visitor typed a free-text subject — now a
   * plain string so submissions never bounce on categorization.
   */
  projectType: { type: String, trim: true, maxlength: 60 },
  budget: { type: String, trim: true, maxlength: 60 },
  message: { type: String, required: [true, 'Message is required'], maxlength: 5000 },
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
  notes: [{ text: { type: String, maxlength: 2000 }, createdAt: { type: Date, default: Date.now } }],
}, { timestamps: true });

export default mongoose.model('Lead', leadSchema);
