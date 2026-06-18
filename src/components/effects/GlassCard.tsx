import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  delay?: number;
}

export default function GlassCard({ children, className, hover = true, glow = false, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={hover ? { 
        y: -5,
        transition: { duration: 0.2, ease: "easeOut" }
      } : undefined}
      className={cn(
        // Modern minimalist glassmorphism style framework matching Neuraloft layout blueprints
        'relative overflow-hidden rounded-2xl border border-white/[0.04] bg-[#121212]/60 backdrop-blur-xl p-6 transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]',
        glow && 'before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500/10 before:via-fuchsia-500/10 before:to-cyan-500/10 before:opacity-100 shadow-[0_0_25px_rgba(168,85,247,0.15)] animate-pulse-glow',
        className
      )}
    >
      {/* Structural background surface noise texture mapped into the single card shape */}
      <div className="absolute inset-0 bg-noise opacity-[0.06] pointer-events-none mix-blend-overlay" />
      
      {/* Structural content layer */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  );
}