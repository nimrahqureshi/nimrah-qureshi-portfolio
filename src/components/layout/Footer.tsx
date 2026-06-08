import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Bot, Mail, Heart, Send, Loader2 } from 'lucide-react';
import { api, ApiError } from '@/lib/api';

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
    { label: 'Pricing', href: '/pricing' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ]
};

import { FaGithub, FaLinkedin, FaUpwork, FaInstagram } from 'react-icons/fa6';
import { SiFiverr } from 'react-icons/si';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/nimrahqureshi', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/nimrah-qureshi-5a372b2bb', label: 'LinkedIn' },
  { icon: FaUpwork, href: 'https://www.upwork.com/freelancers/~nimrahqureshi', label: 'Upwork' },
  { icon: SiFiverr, href: 'https://www.fiverr.com/nimrah_013', label: 'Fiverr' },
  { icon: FaInstagram, href: 'https://www.instagram.com/nimrahqureshi013', label: 'Instagram' },
  { icon: Mail, href: 'mailto:brainlinkai13@gmail.com', label: 'Email' },
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
    <footer className="relative bg-bg-card border-t border-purple-500/10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-900/5 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                Nimrah<span className="text-purple-400">Qureshi</span>
              </span>
            </div>
            <p className="text-muted mb-6 max-w-md">
              AI Engineer & Full-Stack Developer helping businesses automate workflows, 
              deploy AI agents, and build scalable web applications.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-muted hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <form onSubmit={handleSubscribe} className="mt-8 max-w-md">
              <h4 className="text-white font-medium mb-2 text-sm">
                Subscribe to the newsletter
              </h4>
              <p className="text-muted text-xs mb-3">
                AI tips, project breakdowns, and occasional updates. No spam.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  aria-label="Email address"
                  className="flex-1 bg-white/5 border border-purple-500/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-muted focus:outline-none focus:border-purple-500/50 transition-colors"
                />
                <button
                  type="submit"
                  disabled={subscribing}
                  className="px-4 py-2.5 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-purple-500/25 transition-all disabled:opacity-50 flex items-center gap-2"
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

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links], i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-white font-semibold mb-4 capitalize">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-muted hover:text-purple-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-purple-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm flex items-center gap-1">
            &copy; {new Date().getFullYear()} Nimrah Qureshi. Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> and AI.
          </p>
          <p className="text-muted text-sm">
            Building the future, one line of code at a time.
          </p>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted">
          <Link to="/privacy" className="hover:text-purple-400 transition-colors">Privacy</Link>
          <span className="opacity-40">·</span>
          <Link to="/terms" className="hover:text-purple-400 transition-colors">Terms</Link>
          <span className="opacity-40">·</span>
          <Link to="/cookies" className="hover:text-purple-400 transition-colors">Cookies</Link>
        </div>
      </div>
    </footer>
  );
}
