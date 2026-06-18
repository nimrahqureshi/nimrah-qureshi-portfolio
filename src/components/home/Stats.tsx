import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Code2, Briefcase, Award, Users } from 'lucide-react';

const stats = [
  { icon: Briefcase, value: 2, suffix: '', label: 'AI Brands Founded', prefix: '' },
  { icon: Code2, value: 10, suffix: '+', label: 'Projects Completed', prefix: '' },
  { icon: Award, value: 20, suffix: '+', label: 'Technologies', prefix: '' },
  { icon: Users, value: 2, suffix: '', label: 'AI Certifications', prefix: '' },
];

function AnimatedCounter({ target, suffix = '', prefix = '' }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-normal tracking-tight text-[#E1E0CC]">
      {prefix}{count}{suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-20 relative bg-black overflow-hidden">
      {/* Premium Visual Arts Background Architecture (Copied from Case Studies) */}
      {/* 1. Fine Noise Layout Overlay */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none z-0" />
      
      {/* 2. Sophisticated Warm Ambient Light Vectors */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#E1E0CC]/[0.02] blur-[130px] rounded-full pointer-events-none z-0 transform -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#212121]/60 blur-[110px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#101010] border border-white/[0.03] rounded-2xl md:rounded-[2rem] p-8 md:p-12 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-[#141414] border border-white/[0.03] flex items-center justify-center mx-auto mb-4 group-hover:border-white/[0.08] transition-colors duration-300">
                  <stat.icon className="w-5 h-5 text-[#E1E0CC]/70" />
                </div>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                <div className="text-gray-500 text-xs uppercase tracking-widest mt-3">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}