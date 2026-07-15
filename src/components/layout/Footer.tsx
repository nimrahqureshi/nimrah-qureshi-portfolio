import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Mail, Heart, Send, Loader2 } from 'lucide-react';
import { api, ApiError } from '@/lib/api';
import Picture from '@/components/ui/Picture';
import { FaGithub, FaLinkedin, FaUpwork, FaInstagram } from 'react-icons/fa6';
import { SiFiverr } from 'react-icons/si';

const footerLinks = {
  services: [
    { label: 'AI Chatbots', href: '/services' },
    { label: 'AI Agents', href: '/services' },
    { label: 'Automation', href: '/services' },
    { label: 'Full Stack Dev', href: '/services' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  support: [
    { label: 'Pricing', href: '/pricing' }
  ]
};

const socialLinks = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/nimrah-qureshi-5a372b2bb', label: 'LinkedIn' },
  { icon: FaUpwork, href: 'https://www.upwork.com/freelancers/~010d340d7ed5f5c501?mp_source=share', label: 'Upwork' },
  { icon: SiFiverr, href: 'https://www.fiverr.com/nimrah_013', label: 'Fiverr' },
  { icon: FaGithub, href: 'https://github.com/nimrahqureshi', label: 'GitHub' },
  { icon: FaInstagram, href: 'https://www.instagram.com/nimrahqureshi013', label: 'Instagram' },
  { icon: Mail, href: 'mailto:nimrahqureshi013@gmail.com', label: 'Email' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribing, setSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (subscribing) return;

    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    setSubscribing(true);
    try {
      const res = await api.subscribe({ email: trimmed });
      toast.success(res.message || 'Subscribed successfully!');
      setEmail('');
    } catch (err) {
      const message =
        err instanceof ApiError ? err.message : 'Subscription failed. Please try again.';
      toast.error(message);
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <footer className="relative bg-black border-t border-white/[0.06] overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 bg-[#101010]/40" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#E1E0CC]/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#C8B68A]/[0.03] rounded-full blur-[120px] pointer-events-none" />
      
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Brand Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Logo Container */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#0A0A0A] border border-white/10 p-1.5 flex items-center justify-center shadow-lg shadow-black/40 overflow-hidden">
                <Picture
                  src="/images/logo.png"
                  alt="Nimrah Qureshi logo"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-[#E1E0CC]">
                Nimrah Qureshi
              </span>
            </div>
            
            <div className="space-y-3">
              <p className="text-white text-sm font-medium tracking-wide">
                Full Stack Developer, Chatbot Developer and Digital Solutions Builder.
              </p>
              <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                Passionate about creating modern websites, intelligent chatbot experiences,
                automation solutions and scalable digital products for businesses worldwide.
              </p>
            </div>

            {/* Direct Contact Stack */}
            <div className="space-y-2 text-sm text-gray-400 pt-2 border-t border-white/[0.03]">
              <p className="flex items-center gap-2">📧 nimrahqureshi013@gmail.com</p>
              <p className="flex items-center gap-2">📍 Karachi, Pakistan</p>
            </div>
            
            {/* Social Links */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#161616] border border-white/5 flex items-center justify-center text-gray-400 hover:text-[#E1E0CC] hover:border-[#E1E0CC]/30 hover:bg-white/[0.02] transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="pt-4 max-w-sm">
              <h4 className="text-[#E1E0CC] font-medium mb-1 text-sm">
                Stay Connected
              </h4>
              <p className="text-gray-500 text-xs mb-3 leading-relaxed">
                Get updates about projects, new work, creative ideas, and opportunities to collaborate.
              </p>
              <div className="flex gap-2 bg-[#141414] border border-white/5 p-1.5 rounded-xl focus-within:border-[#E1E0CC]/30 transition-colors">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  aria-label="Email address"
                  className="flex-1 bg-transparent px-3 text-sm text-white placeholder-gray-600 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={subscribing}
                  className="px-4 py-2 bg-[#E1E0CC] text-black rounded-lg font-medium text-sm hover:bg-[#D6D4BC] transition-all disabled:opacity-50 flex items-center gap-2"
                >
                  {subscribing ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  <span className="hidden sm:inline">Subscribe</span>
                </button>
              </div>
            </form>
          </motion.div>

          {/* Links Column Units */}
          {Object.entries(footerLinks).map(([title, links], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="space-y-4 lg:pl-8"
            >
              <h3 className="text-xs font-semibold tracking-widest uppercase text-gray-500">{title}</h3>
              <nav aria-label={`Footer ${title} links`}>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={`${link.label}-${link.href}`}>
                      <Link
                        to={link.href}
                        className="text-gray-400 hover:text-[#E1E0CC] transition-colors text-sm font-normal text-left block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          ))}
        </div>

        {/* Bottom Metadata Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs sm:text-sm flex items-center gap-1 font-light">
            &copy; {new Date().getFullYear()} Nimrah Qureshi. Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> by Nimrah Qureshi.
          </p>
          <p className="text-gray-500 text-xs sm:text-sm tracking-wide font-light italic">
            Turning ideas into meaningful digital experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}
