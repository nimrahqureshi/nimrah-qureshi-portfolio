import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/utils/cn';

interface NavLink {
  to: string;
  label: string;
}

const navLinks: NavLink[] = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/case-studies', label: 'Case Studies' },
  { to: '/ai-tools', label: 'AI Tools' },
  { to: '/blog', label: 'Blog' },
  { to: '/pricing', label: 'Pricing' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Determine background transparency change threshold
      setScrolled(currentScrollY > 50);

      // Core functionality: Scroll up to show, scroll down to hide navbar
      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        // Scrolling down — hide navbar unless mobile menu is actively open
        if (!isOpen) setIsVisible(false);
      } else {
        // Scrolling up — safely show navbar
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const handleNav = (link: NavLink) => {
    setIsOpen(false);
    navigate(link.to);
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 0);
  };

  const isActive = (link: NavLink) => {
    return location.pathname === link.to;
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -120 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 pt-4',
          scrolled ? 'translate-y-0' : 'translate-y-2'
        )}
      >
        <div 
          className={cn(
            'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-xl md:rounded-2xl transition-all duration-300',
            scrolled 
              ? 'bg-black/60 backdrop-blur-md border border-white/[0.08] shadow-lg shadow-purple-500/5' 
              : 'bg-[#101010]/30 backdrop-blur-sm border border-white/[0.03]'
          )}
        >
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link 
              to="/" 
              onClick={() => { 
                setIsOpen(false); 
                window.scrollTo({ top: 0, behavior: 'smooth' }); 
              }} 
              className="flex items-center gap-2 group"
            >
              {/* Image Logo Container */}
              <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img 
                  src="/images/logo.png" 
                  alt="Logo" 
                  className="w-full h-full object-cover filter brightness-100 group-hover:brightness-110 transition-all duration-300"
                  onError={(e) => {
                    // Fallback hidden line if image fails to load properly
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <span className="text-lg font-bold text-[#E1E0CC] group-hover:text-purple-400 transition-colors">
                Nimrah<span className="text-purple-400">.</span>
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.to}
                  onClick={() => handleNav(link)}
                  className={cn(
                    'px-3 py-2 text-xs md:text-sm font-medium rounded-lg transition-all duration-200',
                    isActive(link)
                      ? 'text-purple-400 bg-purple-500/10'
                      : 'text-gray-400 hover:text-[#E1E0CC] hover:bg-white/5'
                  )}
                >
                  {link.label}
                </button>
              ))}
              
              <button
                onClick={() => handleNav({ to: '/contact', label: 'Contact' })}
                className="ml-4 px-5 py-2.5 text-sm font-medium text-black bg-[#E1E0CC] rounded-full hover:bg-white hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Hire Me
              </button>
            </div>

            {/* Mobile Menu Trigger button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors relative z-50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={() => setIsOpen(false)} />
            
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 240 }}
              className="absolute right-0 top-0 h-full w-72 bg-[#101010] border-l border-white/[0.05] p-6 pt-24 flex flex-col gap-2 overflow-hidden"
            >
              <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none z-0" />
              <div className="absolute -top-10 left-1/4 w-[300px] h-[300px] bg-[#E1E0CC]/[0.02] blur-[80px] rounded-full pointer-events-none z-0" />
              <div className="absolute bottom-10 -right-10 w-[250px] h-[250px] bg-[#212121]/60 blur-[70px] rounded-full pointer-events-none z-0" />

              <div className="relative z-10 flex flex-col gap-2 h-full overflow-y-auto scrollbar-none">
                {navLinks.map((link) => (
                  <button
                    key={link.to}
                    onClick={() => handleNav(link)}
                    className={cn(
                      'px-4 py-3 text-left text-sm font-medium rounded-lg transition-all',
                      isActive(link)
                        ? 'text-purple-400 bg-purple-500/10'
                        : 'text-gray-400 hover:text-[#E1E0CC] hover:bg-white/5'
                    )}
                  >
                    {link.label}
                  </button>
                ))}
                
                <button
                  onClick={() => handleNav({ to: '/contact', label: 'Contact' })}
                  className="mt-6 px-5 py-3 text-center font-medium text-black bg-[#E1E0CC] rounded-full shadow-lg shadow-purple-500/5 hover:bg-white hover:shadow-purple-500/10 transition-all duration-300"
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
