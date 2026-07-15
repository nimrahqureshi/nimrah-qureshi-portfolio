import type { ReactNode } from 'react';

/**
 * Wraps standalone routed pages so their content clears the fixed navbar.
 * Background is provided by Layout (fixed layers), so PageShell stays transparent.
 */
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen text-white pt-24 md:pt-28">
      {/* Subtle per-page ambient glows — these sit on top of Layout's global bg */}
      <div className="absolute top-[-5%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#E1E0CC]/[0.04] blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[-15%] w-[700px] h-[700px] rounded-full bg-[#C8B68A]/[0.03] blur-[160px] pointer-events-none z-0" />
      <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] rounded-full bg-white/[0.015] blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
