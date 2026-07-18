import { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/utils/cn';
import { useUI } from '@/context/UIContext';
import Picture from '@/components/ui/Picture';

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
  const {
    activeOverlay,
    isOpen: isOverlayOpen,
    toggleOverlay,
    closeOverlay,
  } = useUI();
  const isOpen = isOverlayOpen('menu');

  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Background transparency threshold
      setScrolled(currentScrollY > 50);

      // Scroll down to hide, scroll up to show — never hide while menu is open
      // Don't allow scrolling to change navbar while overlay is open
      if (!activeOverlay) {
        setIsVisible(
          !(currentScrollY > lastScrollY.current && currentScrollY > 80)
        );
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen, activeOverlay]);

  useEffect(() => {
    if (activeOverlay) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }, [activeOverlay]);

  // Focus management: move focus into the drawer on open,
  // return it to the toggle button on close.
  useEffect(() => {
    if (isOpen) {
      firstLinkRef.current?.focus();
    } else {
      // Only restore focus if it was inside the drawer (avoid stealing focus on load)
      if (document.activeElement === document.body) {
        toggleRef.current?.focus({ preventScroll: true });
      }
    }
  }, [isOpen]);

  const closeMenu = () => closeOverlay('menu');

  const isActive = (link: NavLink) => location.pathname === link.to;

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{
          y: isVisible ? 0 : -120,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        aria-label="Primary"
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 pt-4',
          scrolled ? 'translate-y-0' : 'translate-y-2'
        )}
      >
        <div
          className={cn(
            'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-xl md:rounded-2xl transition-all duration-300',
            scrolled
              ? 'bg-black/60 backdrop-blur-md border border-white/[0.08] shadow-lg shadow-black/40'
              : 'bg-[#101010]/30 backdrop-blur-sm border border-white/[0.03]'
          )}
        >
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link
              to="/"
              onClick={closeMenu}
              className="flex items-center gap-2 group rounded-lg"
              aria-label="Nimrah Qureshi — Home"
            >
              {/* Image Logo Container - Changed rounded-lg to rounded-full */}
              <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Picture
                  src="/images/logo.png"
                  alt="Nimrah Qureshi logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <span className="text-lg font-bold text-[#E1E0CC] group-hover:text-white transition-colors">
                Nimrah<span className="text-[#C8B68A]">.</span>
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  aria-current={isActive(link) ? 'page' : undefined}
                  className={cn(
                    'relative px-3 py-2 text-xs md:text-sm font-medium rounded-lg transition-all duration-200',
                    isActive(link)
                      ? 'text-[#E1E0CC]'
                      : 'text-gray-400 hover:text-[#E1E0CC] hover:bg-white/5'
                  )}
                >
                  {link.label}
                  {isActive(link) && (
                    <motion.span
                      layoutId="nav-underline"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      className="absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-[#E1E0CC] to-transparent"
                    />
                  )}
                </Link>
              ))}

              <Link
                to="/contact"
                className="ml-4 px-5 py-2.5 text-sm font-medium text-black bg-[#E1E0CC] rounded-full hover:bg-white hover:shadow-xl hover:shadow-black/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Hire Me
              </Link>
            </div>

            {/* Mobile Menu Trigger button */}
            <button
              ref={toggleRef}
              onClick={() => toggleOverlay('menu')}
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors relative z-50"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
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
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              onClick={closeMenu}
              aria-hidden="true"
            />

            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
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
                {navLinks.map((link, i) => (
                  <Link
                    key={link.to}
                    ref={i === 0 ? firstLinkRef : undefined}
                    to={link.to}
                    onClick={closeMenu}
                    aria-current={isActive(link) ? 'page' : undefined}
                    className={cn(
                      'px-4 py-3 text-left text-sm font-medium rounded-lg transition-all',
                      isActive(link)
                        ? 'text-[#E1E0CC] bg-[#E1E0CC]/10'
                        : 'text-gray-400 hover:text-[#E1E0CC] hover:bg-white/5'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}

                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="mt-6 px-5 py-3 text-center font-medium text-black bg-[#E1E0CC] rounded-full shadow-lg shadow-black/20 hover:bg-white transition-all duration-300"
                >
                  Hire Me
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}