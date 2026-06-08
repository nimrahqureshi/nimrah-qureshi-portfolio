import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';
import SectionHeading from '@/components/effects/SectionHeading';
import GlassCard from '@/components/effects/GlassCard';
import { api, ApiError } from '@/lib/api';

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'brainlinkai13@gmail.com', href: 'mailto:brainlinkai13@gmail.com' },
  { icon: Phone, label: 'WhatsApp', value: '+92 343 2817289', href: 'https://wa.me/923432817289' },
  { icon: MapPin, label: 'Location', value: 'Karachi, Pakistan • Remote Worldwide', href: '#' },
];

const projectTypes = [
  'AI Chatbot',
  'AI Agent',
  'Automation',
  'Web Development',
  'SaaS Platform',
  'Consulting',
  'Other'
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    projectType: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    // Basic client-side validation before hitting the network
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in your name, email and message.');
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    if (!emailOk) {
      toast.error('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    try {
      const res = await api.submitContact({
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || undefined,
        company: formData.company.trim() || undefined,
        projectType: formData.projectType || undefined,
        budget: formData.budget || undefined,
        message: formData.message.trim(),
      });

      toast.success(res.message || 'Message sent successfully!');
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        budget: '',
        projectType: '',
        message: '',
      });
    } catch (err) {
      const message =
        err instanceof ApiError
          ? err.message
          : 'Something went wrong. Please try again.';
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 neural-bg" />
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <GlassCard>
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className="text-3xl font-bold gradient-text mb-4">Thank You!</h2>
              <p className="text-muted mb-8">
                Your message has been received! I'll get back to you within 24 hours.
                In the meantime, check your email for a confirmation message.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all"
              >
                Send Another Message
              </button>
            </GlassCard>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 neural-bg" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading 
          title="Let's Work Together"
          subtitle="Ready to transform your business with AI? Fill out the form below and I'll get back to you within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <GlassCard>
                  <a href={info.href} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-400 flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-muted">{info.label}</div>
                      <div className="text-sm text-white group-hover:text-purple-400 transition-colors">{info.value}</div>
                    </div>
                  </a>
                </GlassCard>
              </motion.div>
            ))}

            {/* Availability */}
            <GlassCard>
              <h4 className="text-white font-medium mb-3">Availability</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted">Mon - Fri</span>
                  <span className="text-white">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Weekend</span>
                  <span className="text-green-400">By appointment</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">Response Time</span>
                  <span className="text-purple-400">&lt; 24 hours</span>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <GlassCard>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-muted mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full bg-white/5 border border-purple-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-muted focus:outline-none focus:border-purple-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full bg-white/5 border border-purple-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-muted focus:outline-none focus:border-purple-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-muted mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-white/5 border border-purple-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-muted focus:outline-none focus:border-purple-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      className="w-full bg-white/5 border border-purple-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-muted focus:outline-none focus:border-purple-500/50 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-muted mb-2">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-purple-500/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500/50 transition-colors"
                    >
                      <option value="" className="bg-bg-card">Select type</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type} className="bg-bg-card">{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-muted mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-purple-500/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500/50 transition-colors"
                    >
                      <option value="" className="bg-bg-card">Select budget</option>
                      <option value="< $3,000" className="bg-bg-card">&lt; $3,000</option>
                      <option value="$3,000 - $8,000" className="bg-bg-card">$3,000 - $8,000</option>
                      <option value="$8,000 - $15,000" className="bg-bg-card">$8,000 - $15,000</option>
                      <option value="$15,000+" className="bg-bg-card">$15,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-muted mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project, goals, and timeline..."
                    className="w-full bg-white/5 border border-purple-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-muted focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                  />
                </div>

                <div>
                  <label className="block text-sm text-muted mb-2">File Upload (Optional)</label>
                  <div className="border-2 border-dashed border-purple-500/20 rounded-xl p-6 text-center hover:border-purple-500/40 transition-colors cursor-pointer">
                    <input type="file" className="hidden" />
                    <p className="text-sm text-muted">Drop files here or click to upload</p>
                    <p className="text-xs text-muted mt-1">PDF, DOC, Images (max 10MB)</p>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
