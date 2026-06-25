import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Mail, Linkedin, Globe, MessageSquare, Loader2, Send } from 'lucide-react';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields.');
      return;
    }

    setLoading(true);
    // Simulate API pipeline latency
    setTimeout(() => {
      toast.success('Secure transmission handshake successful!');
      setFormData({ name: '', email: '', message: '' });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Header Block */}
        <div className="text-left max-w-2xl space-y-2">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">Secure Link</h1>
          <p className="text-gray-400 text-sm">Initiate an encrypted node connection or reach out through direct communication relays.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Relays / Info Panel (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="premium-card p-6 space-y-6">
              <h3 className="text-sm font-mono uppercase tracking-widest text-purple-400">Direct Channels</h3>
              
              <div className="space-y-4">
                <a href="mailto:nimrah.qureshi.dev@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-purple-500/50 transition-colors">
                    <Mail className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-mono uppercase">Email Core</p>
                    <p className="text-xs sm:text-sm">Click to route mail</p>
                  </div>
                </a>

                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-purple-500/50 transition-colors">
                    <Linkedin className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-mono uppercase">Professional ID</p>
                    <p className="text-xs sm:text-sm">LinkedIn Network</p>
                  </div>
                </a>

                <a href="https://github.com/nimrahqureshi" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-purple-500/50 transition-colors">
                    <Globe className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-mono uppercase">Source Cluster</p>
                    <p className="text-xs sm:text-sm">GitHub Environment</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Form Panel (8 cols) */}
          <form onSubmit={handleSubmit} className="lg:col-span-8 premium-card p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2 text-purple-400">
              <MessageSquare className="w-4 h-4" />
              <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500">Transmission Interface</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-mono text-gray-400">Identity Name</label>
                <input 
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500/50 transition-colors placeholder:text-gray-600"
                  placeholder="e.g., John Doe"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-mono text-gray-400">Return Route (Email)</label>
                <input 
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500/50 transition-colors placeholder:text-gray-600"
                  placeholder="name@domain.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[10px] uppercase font-mono text-gray-400">Payload Message</label>
              <textarea 
                rows={5}
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500/50 transition-colors placeholder:text-gray-600 resize-none"
                placeholder="Describe your architecture requirements or workflow goals..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 disabled:from-purple-800/40 disabled:to-indigo-800/40 text-white text-xs font-mono uppercase tracking-wider rounded-lg hover:opacity-90 disabled:opacity-50 active:scale-[0.98] transition-all ml-auto w-full sm:w-auto"
            >
              {loading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" /> Processing...
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" /> Dispatch Message
                </>
              )}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}
