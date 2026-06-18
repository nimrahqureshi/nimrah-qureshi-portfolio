import { motion } from 'framer-motion';

// FlabbyMonster — recolored to match luxury AI portfolio theme
// Primary palette: #E1E0CC (champagne), #C8B68A (gold), #111111 (ink)

interface FlabbyMonsterProps {
  size?: number;
  className?: string;
  waving?: boolean;
}

export function FlabbyMonster({ size = 80, className = '', waving = false }: FlabbyMonsterProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={className}
      style={waving ? { animation: 'flabbyWave 1.5s ease-in-out infinite' } : undefined}
    >
      <style>{`
        @keyframes flabbyWave {
          0%, 100% { transform: rotate(0deg) translateY(0); }
          25% { transform: rotate(-3deg) translateY(-2px); }
          75% { transform: rotate(3deg) translateY(-2px); }
        }
        @keyframes blink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }
        .flabby-eye { 
          animation: blink 4s ease-in-out infinite; 
          transform-origin: 60px 50px; 
        }
      `}</style>

      <defs>
        <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F2EFD9" />
          <stop offset="55%" stopColor="#E1E0CC" />
          <stop offset="100%" stopColor="#C8B68A" />
        </linearGradient>
        <radialGradient id="eyeShine" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="60" cy="110" rx="30" ry="4" fill="#000" opacity="0.18" />

      {/* Body */}
      <path
        d="M60 15 C 35 15, 20 35, 22 60 C 20 80, 28 98, 50 100 C 55 103, 65 103, 70 100 C 92 98, 100 80, 98 60 C 100 35, 85 15, 60 15 Z"
        fill="url(#bodyGradient)"
        stroke="#1a1a1a"
        strokeWidth="2.5"
      />

      {/* Body highlights */}
      <ellipse cx="38" cy="40" rx="12" ry="8" fill="#ffffff" opacity="0.35" />
      <ellipse cx="75" cy="75" rx="8" ry="5" fill="#ffffff" opacity="0.18" />

      {/* Little horns/antennae */}
      <path d="M40 18 Q 38 8, 45 12" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="45" cy="11" r="3" fill="#E1E0CC" stroke="#1a1a1a" strokeWidth="2" />

      <path d="M80 18 Q 82 8, 75 12" fill="none" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="75" cy="11" r="3" fill="#E1E0CC" stroke="#1a1a1a" strokeWidth="2" />

      {/* Eye */}
      <g className="flabby-eye">
        <circle cx="60" cy="50" r="22" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2.5" />
        <circle cx="60" cy="52" r="13" fill="#0a0a0a" />
        <circle cx="60" cy="52" r="10" fill="#1a1a1a" />
        <circle cx="56" cy="48" r="4" fill="#ffffff" />
        <circle cx="64" cy="55" r="1.5" fill="#E1E0CC" opacity="0.8" />
      </g>

      {/* Mouth + tongue */}
      <path
        d="M45 78 Q 60 92, 75 78 Q 72 86, 60 88 Q 48 86, 45 78 Z"
        fill="#0a0a0a"
        stroke="#1a1a1a"
        strokeWidth="2"
      />
      <ellipse cx="60" cy="85" rx="6" ry="4" fill="#C8B68A" />
      <path d="M60 82 L 60 88" stroke="#8a7a52" strokeWidth="1.5" />

      {/* Cheek blush */}
      <ellipse cx="32" cy="70" rx="6" ry="4" fill="#C8B68A" opacity="0.45" />
      <ellipse cx="88" cy="70" rx="6" ry="4" fill="#C8B68A" opacity="0.45" />

      {/* Feet */}
      <ellipse cx="45" cy="105" rx="8" ry="4" fill="#1a1a1a" />
      <ellipse cx="75" cy="105" rx="8" ry="4" fill="#1a1a1a" />
    </svg>
  );
}

export function FlabbyMini({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120">
      <defs>
        <linearGradient id="miniBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F2EFD9" />
          <stop offset="100%" stopColor="#C8B68A" />
        </linearGradient>
      </defs>
      <path
        d="M60 15 C 35 15, 20 35, 22 60 C 20 80, 28 98, 50 100 C 55 103, 65 103, 70 100 C 92 98, 100 80, 98 60 C 100 35, 85 15, 60 15 Z"
        fill="url(#miniBody)"
        stroke="#1a1a1a"
        strokeWidth="3"
      />
      <circle cx="60" cy="50" r="20" fill="#ffffff" stroke="#1a1a1a" strokeWidth="2.5" />
      <circle cx="60" cy="52" r="11" fill="#0a0a0a" />
      <circle cx="56" cy="48" r="3.5" fill="#ffffff" />
      <path
        d="M45 78 Q 60 92, 75 78 Q 72 86, 60 88 Q 48 86, 45 78 Z"
        fill="#0a0a0a"
      />
      <ellipse cx="60" cy="85" rx="5" ry="3" fill="#C8B68A" />
    </svg>
  );
}

export function UserAvatar({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120">
      <defs>
        <linearGradient id="userBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E1E0CC" />
          <stop offset="100%" stopColor="#C8B68A" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="42" r="22" fill="#1a1a1a" stroke="#0a0a0a" strokeWidth="2" />
      <path d="M38 38 Q 40 20, 60 20 Q 80 20, 82 38 Q 75 32, 60 32 Q 45 32, 38 38" fill="#0a0a0a" />
      <circle cx="52" cy="42" r="2.5" fill="#E1E0CC" />
      <circle cx="68" cy="42" r="2.5" fill="#E1E0CC" />
      <path d="M52 52 Q 60 58, 68 52" fill="none" stroke="#E1E0CC" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M25 110 Q 25 80, 45 72 L 75 72 Q 95 80, 95 110 Z"
        fill="url(#userBg)"
        stroke="#1a1a1a"
        strokeWidth="2"
      />
      <path d="M50 72 L 60 82 L 70 72" fill="none" stroke="#1a1a1a" strokeWidth="2" />
    </svg>
  );
}

export function SpeechBubble({ text = "What's up?" }: { text?: string }) {
  return (
    <div className="relative inline-block">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 5 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-[#0a0a0a] text-[#E1E0CC] px-4 py-2 rounded-2xl text-sm font-semibold shadow-md border border-[#E1E0CC]/20"
      >
        {text}
      </motion.div>
      <div
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0"
        style={{
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          borderTop: '10px solid #0a0a0a',
        }}
      />
    </div>
  );
}