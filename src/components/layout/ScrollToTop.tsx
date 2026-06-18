import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scrolls to the top of the page on every route change.
 * If the location contains a hash (e.g. /#contact), it scrolls to that
 * element instead so in-page anchor links keep working seamlessly.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        // Multi-browser anchor matching transition framework
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 0);
        return;
      }
    }
    
    // Safely reset window coordinate position across all browsers
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}