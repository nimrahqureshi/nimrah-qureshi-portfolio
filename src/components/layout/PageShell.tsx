import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

/**
 * Wraps standalone routed pages so their content clears the fixed navbar.
 * Enhanced with premium background geometric glow layers and deep dark canvas styling.
 */
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-black text-white pt-24 md:pt-28 overflow-hidden">
      
      {/* Background Micro-Noise Overlay Texture */}
      <div className="absolute inset-0 bg-noise opacity-[0.12] pointer-events-none mix-blend-overlay z-0" />

      {/* Luxury Ambient Radial Glowing Shapes (Pure CSS Graphics) */}
      <div className="absolute top-[-5%] right-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[-15%] w-[700px] h-[700px] rounded-full bg-cyan-500/5 blur-[160px] pointer-events-none z-0" />
      <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] rounded-full bg-fuchsia-500/5 blur-[120px] pointer-events-none z-0" />

      {/* Page Content Shell Container */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}