import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * A thin gradient progress bar fixed to the top of the viewport that
 * fills as the user scrolls down the page. Premium-startup detail (Phase C).
 * Finetuned visibility profiles across dark structural components.
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
      {/* Structural Micro-shadow blur layer backing for the progress gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-black/40 backdrop-blur-[1px]" />
      
      <motion.div
        style={{ scaleX }}
        className="h-0.5 origin-left bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 shadow-[0_1px_8px_rgba(168,85,247,0.4)]"
        aria-hidden="true"
      />
    </div>
  );
}