import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

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
      {/* Premium Visual Arts Background Architecture */}
      {/* 1. Fine Noise Layout Overlay */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none z-0" />
      
      {/* 2. Sophisticated Warm Ambient Light Vectors */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#E1E0CC]/[0.02] blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-[#212121]/60 blur-[110px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Media Presentation & Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold tracking-widest text-[#E1E0CC] uppercase bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mt-6 mb-4">
                Let's construct something <span className="italic font-normal text-[#E1E0CC]">exceptional</span> together.
              </h2>
              <p className="text-gray-400 text-base font-light max-w-sm leading-relaxed mb-10">
                Have a project in mind, a business query, or just want to connect? Drop a message.
              </p>

              {/* Layout Container: Image Side-by-Side with Contact Information Cards */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mt-12">
                
                {/* Visual Media Placeholder Box (Positioned exactly on the left) */}
                <div className="md:col-span-5 relative group rounded-xl overflow-hidden aspect-[4/5] bg-[#101010] border border-white/[0.03] flex items-center justify-center">
                  <img 
                    src="/images/contact.png" 
                    alt="Contact Presentation" 
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>

                {/* Contact Cards Stack (Positioned to the right of the image container) */}
                <div className="md:col-span-7 space-y-4 w-full">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-[#101010] border border-white/[0.03] hover:border-white/[0.08] transition-all duration-300">
                    <div className="w-10 h-10 rounded-lg bg-[#141414] flex items-center justify-center text-[#E1E0CC]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Email Me</p>
                      <a href="mailto:nimrahqureshi013@gmail.com" className="text-sm text-gray-200 hover:text-[#E1E0CC] transition-colors break-all">
                        nimrahqureshi013@gmail.com
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
            </div>

            {/* Complete Custom Professional Ecosystem Grid */}
            <div className="mt-12">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Connect Socially</p>
              <div className="flex flex-wrap gap-2.5 max-w-sm">
                {/* GitHub */}
                <a
                  href="https://github.com/nimrahqureshi"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#101010] border border-white/[0.03] flex items-center justify-center text-gray-400 hover:text-[#E1E0CC] hover:border-[#E1E0CC]/20 transition-all duration-300"
                  title="GitHub"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/nimrah-qureshi-5a372b2bb"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#101010] border border-white/[0.03] flex items-center justify-center text-gray-400 hover:text-[#E1E0CC] hover:border-[#E1E0CC]/20 transition-all duration-300"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* Upwork */}
                <a
                  href="https://upwork.com/freelancers/~010d340d7ed5f5c501?mp_source=share"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#101010] border border-white/[0.03] flex items-center justify-center text-gray-400 hover:text-[#E1E0CC] hover:border-[#E1E0CC]/20 transition-all duration-300"
                  title="Upwork"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.55 12c-1.12 0-2.14.47-2.87 1.23-.42-1.22-.84-2.58-1.22-3.92H18.6V7.44h-3.41V4H12.7v3.44H9.68a4.26 4.26 0 0 0-4.26 4.26v3.44H7.9v-3.44a1.78 1.78 0 0 1 1.78-1.78h2.09c.35 1.25.75 2.56 1.15 3.73-.72.84-1.16 1.95-1.16 3.16a4.23 4.23 0 0 0 4.23 4.23c2.33 0 4.23-1.9 4.23-4.23V12h-.67zm-3.66 4.83a1.75 1.75 0 0 1-1.75-1.75c0-.52.2-1 .54-1.37.28.69.6 1.41.92 2.11-.27.56-.56 1.01-.71 1.01zm3.66-1.75a1.76 1.76 0 0 1-3.52 0v-.81c.54-.53 1.25-.87 2.03-.87a1.76 1.76 0 0 1 1.49 1.68z"/>
                  </svg>
                </a>

                {/* Fiverr */}
                <a
                  href="https://fiverr.com/sellers/nimrah_013"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#101010] border border-white/[0.03] flex items-center justify-center text-gray-400 hover:text-[#E1E0CC] hover:border-[#E1E0CC]/20 transition-all duration-300"
                  title="Fiverr"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.1 24H24v-6.9h-6.9V24zM0 0v24h14.4v-7.2H7.2V7.2h7.2V0H0zm24 0h-7.2v7.2H24V0zm-7.2 9.6H24v7.2h-7.2V9.6z" />
                  </svg>
                </a>

                {/* Freelancer */}
                <a
                  href="https://freelancer.pk/u/nimrah013"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#101010] border border-white/[0.03] flex items-center justify-center text-gray-400 hover:text-[#E1E0CC] hover:border-[#E1E0CC]/20 transition-all duration-300"
                  title="Freelancer"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M13.68 2.25L4.83 6.94l6.09 3.01 2.76-7.7zm2.46.68l-2 5.56 5.86 2.89 2.5-6.19-6.36-2.26zm-3.6 8.52L5.45 8.12l1.66 9.4 5.43-6.07zm1.8 1.14l-4.5 5 7.6 3.65 1.53-7.07-4.63-1.58z" />
                  </svg>
                </a>

                {/* X */}
                <a
                  href="https://x.com/nimrah_013"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#101010] border border-white/[0.03] flex items-center justify-center text-gray-400 hover:text-[#E1E0CC] hover:border-[#E1E0CC]/20 transition-all duration-300"
                  title="X"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#101010] border border-white/[0.03] flex items-center justify-center text-gray-400 hover:text-[#E1E0CC] hover:border-[#E1E0CC]/20 transition-all duration-300"
                  title="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/nimrahqureshi_013"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#101010] border border-white/[0.03] flex items-center justify-center text-gray-400 hover:text-[#E1E0CC] hover:border-[#E1E0CC]/20 transition-all duration-300"
                  title="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                  </svg>
                </a>

                {/* Pinterest */}
                <a
                  href="https://pinterest.com/nimrahqureshi013"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#101010] border border-white/[0.03] flex items-center justify-center text-gray-400 hover:text-[#E1E0CC] hover:border-[#E1E0CC]/20 transition-all duration-300"
                  title="Pinterest"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.948-.199-2.411.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.922-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z" />
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
