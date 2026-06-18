import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="relative py-24 bg-black overflow-hidden">
      {/* Premium Visual Arts Background Architecture (Copied from Case Studies) */}
      {/* 1. Fine Noise Layout Overlay */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none z-0" />
      
      {/* 2. Sophisticated Warm Ambient Light Vectors */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#E1E0CC]/[0.02] blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-[#212121]/60 blur-[110px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#E1E0CC] uppercase bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mt-6 mb-4">
                Let's construct something <span className="italic font-normal text-[#E1E0CC]">exceptional</span> together.
              </h2>
              <p className="text-gray-400 text-base font-light max-w-sm leading-relaxed">
                Have a project in mind, a business query, or just want to connect? Drop a message.
              </p>

              {/* Contact Cards */}
              <div className="mt-12 space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#101010] border border-white/[0.03] hover:border-white/[0.08] transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-[#141414] flex items-center justify-center text-[#E1E0CC]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Email Me</p>
                    <a href="mailto:hello@example.com" className="text-sm text-gray-200 hover:text-[#E1E0CC] transition-colors">
                      hello@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#101010] border border-white/[0.03] hover:border-white/[0.08] transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-[#141414] flex items-center justify-center text-[#E1E0CC]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Call Me</p>
                    <a href="tel:+923000000000" className="text-sm text-gray-200 hover:text-[#E1E0CC] transition-colors">
                      +92 300 0000000
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-[#101010] border border-white/[0.03] hover:border-white/[0.08] transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-[#141414] flex items-center justify-center text-[#E1E0CC]">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Location</p>
                    <p className="text-sm text-gray-200">Karachi, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Handlers with Pure SVGs (Safe from package crashes) */}
            <div className="mt-12 lg:mt-0">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Connect Socially</p>
              <div className="flex gap-3">
                {/* GitHub */}
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#101010] border border-white/[0.03] flex items-center justify-center text-gray-400 hover:text-[#E1E0CC] hover:border-[#E1E0CC]/20 transition-all duration-300"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#101010] border border-white/[0.03] flex items-center justify-center text-gray-400 hover:text-[#E1E0CC] hover:border-[#E1E0CC]/20 transition-all duration-300"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 md:p-10 rounded-2xl bg-[#101010] border border-white/[0.03] backdrop-blur-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#141414] border border-white/5 focus:border-[#E1E0CC]/30 focus:ring-1 focus:ring-[#E1E0CC]/30 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#141414] border border-white/5 focus:border-[#E1E0CC]/30 focus:ring-1 focus:ring-[#E1E0CC]/30 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-[#141414] border border-white/5 focus:border-[#E1E0CC]/30 focus:ring-1 focus:ring-[#E1E0CC]/30 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300"
                    placeholder="Project consultation"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-gray-400 uppercase tracking-wider">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#141414] border border-white/5 focus:border-[#E1E0CC]/30 focus:ring-1 focus:ring-[#E1E0CC]/30 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 outline-none transition-all duration-300 resize-none"
                    placeholder="Tell me about your project visions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-[#E1E0CC] font-medium rounded-xl text-sm px-6 py-4 transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-white/5"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}