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
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { 
        y: -5,
        transition: { duration: 0.2 }
      } : undefined}
      className={cn(
        'glass-card rounded-xl p-6 transition-all duration-300',
        glow && 'animate-pulse-glow',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
