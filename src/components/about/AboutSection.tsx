import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Code2, Briefcase, Award, Users, Sparkles, GraduationCap, Flame, Terminal } from 'lucide-react';

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

export default function AboutSection() {
  return (
    <section 
      id="about" 
      className="relative min-h-screen py-24 bg-black overflow-hidden"
      style={{ overflowX: 'clip' }}
    >
      {/* PRISMA INSPIRED LUXURY BACKGROUND SYSTEM */}
      {/* Studio Noise & Texture Map Layer */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

      {/* High-End Tech Grid Mask Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#E1E0CC05_1px,transparent_1px),linear-gradient(to_bottom,#E1E0CC05_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" 
      />
      
      {/* Ambient Premium Soft Light Radiance Orbs */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#E1E0CC]/5 rounded-full blur-[140px] animate-pulse pointer-events-none" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-slate-800/40 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '3.5s' }} />
      
      {/* Micro-Flares and Cinematic Structural Anchors */}
      <div className="absolute top-48 left-24 w-1.5 h-1.5 bg-[#E1E0CC] rounded-full animate-float opacity-30" />
      <div className="absolute top-12 right-12 w-1 h-1 bg-gray-400 rounded-full animate-float opacity-40" style={{ animationDelay: '0.8s' }} />
      <div className="absolute bottom-48 right-36 w-2 h-2 bg-slate-600 rounded-full animate-float opacity-20" style={{ animationDelay: '1.8s' }} />
      <div className="absolute bottom-12 left-16 w-1.5 h-1.5 bg-gray-500 rounded-full animate-float opacity-30" style={{ animationDelay: '2.5s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Studio Section Title Badge */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#101010] border border-[#E1E0CC]/10 mb-4 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E1E0CC]" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#E1E0CC]/80">
              Our Identity
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium tracking-tight text-white uppercase"
          >
            About Me
          </motion.h2>
        </div>

        {/* MAIN PROFILE INFRASTRUCTURE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* LEFT COLUMN: PREMIUM GALLERY BLOCK (All 4 Images Preserved Separately) */}
          <div className="lg:col-span-5 grid grid-cols-12 gap-4 relative group">
            {/* Absolute accent element behind layout gallery */}
            <div className="absolute -inset-4 bg-[#E1E0CC]/5 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none" />
            
            {/* Image 1: Main Feature Block */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-8 aspect-[4/5] rounded-2xl md:rounded-[1.5rem] overflow-hidden bg-[#101010] border border-neutral-900 shadow-xl relative"
            >
              <img 
                src="/banner.png" 
                alt="Nimrah Qureshi Profile" 
                className="w-full h-full object-cover grayscale tracking-wide group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Image 2: Stacked Upper Right Block */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="col-span-4 aspect-square rounded-xl md:rounded-2xl overflow-hidden bg-[#101010] border border-neutral-900 shadow-lg mt-6"
            >
              <img 
                src="/banner.png" 
                alt="AI Development Workspace" 
                className="w-full h-full object-cover scale-110 grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-out"
              />
            </motion.div>

            {/* Image 3: Structural Lower Left Anchor */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="col-span-4 aspect-square rounded-xl md:rounded-2xl overflow-hidden bg-[#101010] border border-neutral-900 shadow-lg -mt-12 z-20"
            >
              <img 
                src="/banner.png" 
                alt="Neural Operations" 
                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
            </motion.div>

            {/* Image 4: Wide Lower Base Block */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="col-span-8 aspect-[16/10] rounded-xl md:rounded-2xl overflow-hidden bg-[#101010] border border-neutral-900 shadow-xl -mt-4"
            >
              <img 
                src="/banner.png" 
                alt="System Architecture Hub" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-neutral-950/10 mix-blend-multiply" />
            </motion.div>
          </div>

          {/* RIGHT COLUMN: TECHNICAL BIOGRAPHY AND ROADMAPS */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl md:text-2xl font-normal text-[#E1E0CC] mb-4">
                Pioneering Next-Generation Autonomous Workflows
              </h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6 font-normal tracking-wide">
                I am an AI Engineer &amp; Full-Stack Developer specializing in architecting custom multi-agent frameworks, complex RAG pipelines, and automated intelligence hubs. Based in Karachi, Pakistan, I operate globally to engineer infrastructure that bridges the gap between raw data paradigms and beautiful, scalable web execution.
              </p>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed font-normal tracking-wide">
                As the founder of <span className="text-[#E1E0CC] font-medium">Brainlink AI</span> and <span className="text-[#E1E0CC] font-medium">Neuraloft</span>, my operations focus entirely on creating robust software ecosystems. Whether training intelligent customer support systems, crafting fluid web interfaces with glassmorphic aesthetics, or configuring AI automation systems, I target absolute precision.
              </p>
            </motion.div>

            {/* High-End Technical Timeline Milestones */}
            <div className="pt-6 space-y-4 border-t border-neutral-900">
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0 mt-1">
                  <Terminal className="w-4 h-4 text-[#E1E0CC]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white uppercase tracking-wider">Enterprise Focus</h4>
                  <p className="text-xs text-gray-500 mt-1">Deploying tailored AI Agents, Large Language Model configurations, and custom database vectors for scaling startups.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0 mt-1">
                  <GraduationCap className="w-4 h-4 text-[#E1E0CC]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white uppercase tracking-wider">Advanced Core Tech</h4>
                  <p className="text-xs text-gray-500 mt-1">Deep integration experience across LangChain systems, OpenAI interfaces, Python environments, Next.js, and TypeScript architectures.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COUNTER GRID MODULE */}
        <div className="bg-[#101010] border border-neutral-900 rounded-2xl md:rounded-[2rem] p-8 md:p-12 shadow-2xl backdrop-blur-sm relative overflow-hidden group">
          {/* Internal card radiance glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#E1E0CC]/[0.02] to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:border-[#E1E0CC]/20">
                  <stat.icon className="w-5 h-5 text-[#E1E0CC]/70" />
                </div>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                <div className="text-gray-500 text-xs uppercase tracking-widest mt-3 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}