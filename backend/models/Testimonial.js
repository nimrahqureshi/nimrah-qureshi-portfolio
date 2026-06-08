import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  role: {
    type: String,
    required: [true, 'Role is required'],
    trim: true,
  },
  company: {
    type: String,
    required: [true, 'Company is required'],
    trim: true,
  },
  image: {
    type: String,
    default: '',
  },
  content: {
    type: String,
    required: [true, 'Content is required'],
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  highlight: String,
  featured: {
    type: Boolean,
    default: false,
  },
  published: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

export default mongoose.model('Testimonial', testimonialSchema);
