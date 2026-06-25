import React, { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Mail, Globe, MessageSquare, Loader2, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('All form fields must be completed.');
      return;
    }
    setSending(true);
    
    // Simulate real backend ingestion tracking logs
    await new Promise(resolve => setTimeout(resolve, 1200));
    toast.success('Your message has been processed successfully.');
    setFormData({ name: '', email: '', message: '' });
    setSending(false);
  };

  return (
    <div className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8 relative z-10">
        
        {/* Left Side Metadata Panel */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">Let's Work Together</h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              Let's discuss your next AI, automation, or web development project. I'm available for freelance work, collaborations, and long-term partnerships.
            </p>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-gray-400 font-mono pt-4 border-t border-white/5">
            <p className="flex items-center gap-2">📧 nimrahqureshi013@gmail.com</p>
            <p className="flex items-center gap-2">📍 Karachi, Pakistan</p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {[
              { icon: Globe, url: 'https://www.linkedin.com/in/nimrah-qureshi-5a372b2bb', title: 'LinkedIn Profile' },
              { icon: Globe, url: 'https://github.com/nimrahqureshi', title: 'GitHub Profile' },
              { icon: MessageSquare, url: 'mailto:nimrahqureshi013@gmail.com', title: 'Direct Email' }
            ].map((soc, i) => (
              <a 
                key={i} 
                href={soc.url} 
                target="_blank" 
                rel="noreferrer" 
                title={soc.title}
                className="w-10 h-10 rounded-xl bg-[#1E2023] border border-white/5 flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/20 transition-all"
              >
                <soc.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Right Side Secure Form Portal */}
        <div className="lg:col-span-7">
          <form onSubmit={handleSubmit} className="premium-card p-6 sm:p-8 space-y-4 text-left bg-[#1E2023]/80">
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-gray-400 mb-1.5 font-mono">Full Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                placeholder="Alex Mercer"
                className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500/30 transition-colors placeholder-gray-700"
              />
            </div>
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-gray-400 mb-1.5 font-mono">Email Address</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                placeholder="alex@company.com"
                className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500/30 transition-colors placeholder-gray-700"
              />
            </div>
            <div>
              <label className="block text-xs font-medium uppercase tracking-wider text-gray-400 mb-1.5 font-mono">Project Details</label>
              <textarea
                rows={4}
                required
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                placeholder="Outline operational criteria, target platform requirements or timeline metrics..."
                className="w-full bg-black/40 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500/30 transition-colors placeholder-gray-700 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full py-3.5 text-xs font-mono font-medium uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-50 mt-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl text-white transition-all hover:opacity-90 active:scale-[0.99]"
            >
              {sending ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Processing...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Message
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
