import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import PageShell from '@/components/layout/PageShell';

interface LegalPageProps {
  title: string;
  updated: string;
  children: ReactNode;
}

/**
 * Shared layout for Privacy / Terms / Cookies pages.
 * Enhanced with modern ambient gradients and deep canvas textures.
 */
export default function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <PageShell>
      <section className="relative min-h-screen bg-black py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        
        {/* Subtle Noise Texture Overlay */}
        <div className="absolute inset-0 bg-noise opacity-[0.12] pointer-events-none mix-blend-overlay" />

        {/* Dynamic Ambient Background Shapes (No Videos) */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#E1E0CC]/[0.05] blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#C8B68A]/[0.04] blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Card Wrapper Container matching the layout references */}
          <div className="bg-[#101010] border border-white/[0.05] rounded-2xl md:rounded-[2rem] py-14 sm:py-20 px-6 sm:px-10 md:px-16 lg:px-20 shadow-2xl">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Over-headline element style detail */}
              <p className="text-[#C8B68A] text-[10px] sm:text-xs tracking-widest uppercase mb-4">
                Legal Framework
              </p>

              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-[#E1E0CC] mb-3">
                {title}
              </h1>
              
              <p className="text-xs sm:text-sm text-gray-500 mb-10 pb-6 border-b border-white/[0.05]">
                Last updated: {updated}
              </p>
              
              <div className="legal-prose space-y-6 text-[#DEDBC8] text-sm sm:text-base leading-relaxed antialiased">
                {children}
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </PageShell>
  );
}