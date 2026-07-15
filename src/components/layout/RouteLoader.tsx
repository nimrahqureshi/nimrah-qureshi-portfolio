/**
 * Suspense fallback shown while a lazy-loaded route chunk downloads.
 * Deliberately quiet: a fixed thin sweep line under the navbar and a
 * min-height placeholder so the footer never jumps. No flashing.
 */
export default function RouteLoader() {
  return (
    <div className="relative min-h-screen" aria-busy="true" aria-live="polite">
      <div className="fixed top-0 left-0 right-0 z-[70] h-[2px] overflow-hidden pointer-events-none">
        <div
          className="h-full w-1/3 shimmer"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(225,224,204,0.85), transparent)',
            animation: 'routeSweep 1.1s ease-in-out infinite',
          }}
        />
      </div>
      <style>{`
        @keyframes routeSweep {
          0% { transform: translateX(-120%); }
          100% { transform: translateX(360%); }
        }
        @media (prefers-reduced-motion: reduce) {
          [aria-busy="true"] div div { animation: none !important; }
        }
      `}</style>
      <span className="sr-only">Loading page…</span>
    </div>
  );
}
