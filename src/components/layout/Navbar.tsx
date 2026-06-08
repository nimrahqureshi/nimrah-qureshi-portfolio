import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Bot } from 'lucide-react';
import { cn } from '@/utils/cn';

interface NavLink {
  to: string;
  /** Optional in-page anchor used when already on the home page */
  anchor?: string;
  label: string;
}

const navLinks: NavLink[] = [
  { to: '/', anchor: 'home', label: 'Home' },
  { to: '/about', anchor: 'about', label: 'About' },
  { to: '/services', anchor: 'services', label: 'Services' },
  { to: '/projects', anchor: 'portfolio', label: 'Projects' },
  { to: '/case-studies', anchor: 'case-studies', label: 'Case Studies' },
  { to: '/ai-tools', anchor: 'ai-tools', label: 'AI Tools' },
  { to: '/blog', anchor: 'blog', label: 'Blog' },
  { to: '/pricing', anchor: 'pricing', label: 'Pricing' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', anchor: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (!isHome) return;

      const sections = navLinks.map((l) => l.anchor).filter(Boolean) as string[];
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  // Navigate to a link. On the home page, prefer smooth-scrolling to the
  // matching section anchor; otherwise route to the dedicated page.
  const handleNav = (link: NavLink) => {
    setIsOpen(false);
    if (isHome && link.anchor) {
      const el = document.getElementById(link.anchor);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    navigate(link.to);
  };

  const isActive = (link: NavLink) => {
    if (isHome) return activeSection === link.anchor;
    return location.pathname === link.to;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'glass shadow-lg shadow-purple-500/5' : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                Nimrah<span className="text-purple-400">.</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.to}
                  onClick={() => handleNav(link)}
                  className={cn(
                    'px-3 py-2 text-sm rounded-lg transition-all duration-200',
                    isActive(link)
                      ? 'text-purple-400 bg-purple-500/10'
                      : 'text-muted hover:text-white hover:bg-white/5'
                  )}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav({ to: '/contact', anchor: 'contact', label: 'Contact' })}
                className="ml-4 px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200"
              >
                Hire Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-muted hover:text-white hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-72 glass p-6 pt-24 overflow-y-auto"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <button
                    key={link.to}
                    onClick={() => handleNav(link)}
                    className={cn(
                      'px-4 py-3 text-left rounded-lg transition-all',
                      isActive(link)
                        ? 'text-purple-400 bg-purple-500/10'
                        : 'text-muted hover:text-white hover:bg-white/5'
                    )}
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => handleNav({ to: '/contact', anchor: 'contact', label: 'Contact' })}
                  className="mt-4 px-5 py-3 text-center font-medium text-white bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg"
                >
                  Hire Me
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
