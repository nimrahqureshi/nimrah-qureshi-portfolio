import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * A thin gradient progress bar fixed to the top of the viewport that
 * fills as the user scrolls down the page. Premium-startup detail (Phase C).
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400"
      aria-hidden="true"
    />
  );
}
