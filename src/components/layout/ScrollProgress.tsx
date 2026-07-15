import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * A thin champagne progress bar fixed to the top of the viewport that
 * fills as the user scrolls down the page. Premium-startup detail.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] pointer-events-none">
      {/* Structural micro-shadow layer backing the progress bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-black/40 backdrop-blur-[1px]" />

      <motion.div
        style={{ scaleX }}
        className="h-0.5 origin-left bg-gradient-to-r from-[#C8B68A] via-[#E1E0CC] to-white/80 shadow-[0_1px_8px_rgba(225,224,204,0.35)]"
        aria-hidden="true"
      />
    </div>
  );
}
