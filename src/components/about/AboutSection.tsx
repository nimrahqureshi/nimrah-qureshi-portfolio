import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Code2, Briefcase, Award, Users, Sparkles, GraduationCap, Terminal } from 'lucide-react';
import { FaGithub, FaLinkedin, FaUpwork, FaInstagram } from 'react-icons/fa6';
import { SiFiverr } from 'react-icons/si';
import Picture from '@/components/ui/Picture';

const stats = [
  { icon: Briefcase, value: 2, suffix: '', label: 'Companies Founded', prefix: '' },
  { icon: Code2, value: 15, suffix: '+', label: 'Projects Built', prefix: '' },
  { icon: Award, value: 20, suffix: '+', label: 'Technologies', prefix: '' },
  { icon: Users, value: 2, suffix: '', label: 'Certifications', prefix: '' },
];

const skills = [
  "OpenAI",
  "LangChain",
  "Agentic AI",
  "RAG",
  "Python",
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "Framer Motion",
  "Vercel",
  "GitHub",
  "Automation"
];

const socialLinks = [
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/nimrah-qureshi-5a372b2bb', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/nimrahqureshi', label: 'GitHub' },
  { icon: FaUpwork, href: 'https://www.upwork.com/freelancers/~nimrahqureshi', label: 'Upwork' },
  { icon: SiFiverr, href: 'https://www.fiverr.com/nimrah_013', label: 'Fiverr' },
  { icon: FaInstagram, href: 'https://www.instagram.com/nimrahqureshi013', label: 'Instagram' },
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
  // State to manage mobile tap color activations
  const [isTouched, setIsTouched] = useState(false);

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
              Personal Profile
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
        <div className="mt-6 flex justify-center">
  <div className="h-px w-20 rounded-full bg-gradient-to-r from-transparent via-[#E1E0CC] to-transparent" />
</div>
         <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="mt-12 mb-20"
>
  <div className="w-full max-w-3xl mx-auto">
    <h3 className="text-2xl text-[#E1E0CC] mb-6 text-center">
      Professional Upwork Presence
    </h3>

    <Picture
      src="/images/upwork-profile.png"
      alt="Nimrah Qureshi's Upwork freelancer profile"
      loading="lazy"
      decoding="async"
      width={1086}
      height={1448}
      className="w-full rounded-2xl border border-neutral-800 shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
    />
  </div>
</motion.div>

        {/* MAIN PROFILE INFRASTRUCTURE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* LEFT COLUMN: PREMIUM GALLERY BLOCK (Touch/Hover interactions configured perfectly) */}
          <div 
            onTouchStart={() => setIsTouched(!isTouched)}
            className="lg:col-span-5 grid grid-cols-12 gap-4 relative group cursor-pointer"
          >
            {/* Absolute accent element behind layout gallery */}
            <div className={`absolute -inset-4 bg-[#E1E0CC]/5 rounded-[2rem] blur-2xl transition-all duration-700 pointer-events-none ${isTouched ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
            
            {/* Image 1: Main Feature Block */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="col-span-8 aspect-[4/5] rounded-2xl md:rounded-[1.5rem] overflow-hidden bg-[#101010] border border-neutral-900 shadow-xl relative"
            >
              <Picture
                src="/images/about.png"
                alt="Portrait of Nimrah Qureshi"
                loading="lazy"
                decoding="async"
                width={1086}
                height={1448}
                className={`w-full h-full object-cover transition-all duration-700 ease-out ${isTouched ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'}`}
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
              <Picture
                src="/images/about-1.png"
                alt="AI development workspace"
                loading="lazy"
                decoding="async"
                width={1086}
                height={1448}
                className={`w-full h-full object-cover scale-110 transition-all duration-700 ease-out ${isTouched ? 'grayscale-0 brightness-100' : 'grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100'}`}
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
              <Picture
                src="/images/about-1.png"
                alt="Detail of Nimrah Qureshi at work"
                loading="lazy"
                decoding="async"
                width={1086}
                height={1448}
                className={`w-full h-full object-cover transition-all duration-700 ease-out ${isTouched ? 'grayscale-0' : 'grayscale contrast-125 group-hover:grayscale-0'}`}
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
              <Picture
                src="/images/about.png"
                alt="Wide view of the development workspace"
                loading="lazy"
                decoding="async"
                width={1086}
                height={1448}
                className={`w-full h-full object-cover transition-all duration-700 ease-out ${isTouched ? 'grayscale-0' : 'grayscale group-hover:grayscale-0'}`}
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
                AI Engineer, Agentic AI Developer & Full-Stack Developer
              </h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-4 font-normal tracking-wide">
                I am Nimrah Qureshi, an AI Engineer and Full-Stack Developer from Pakistan. I specialize in AI Chatbots, Agentic AI Systems, RAG Applications, Automation Workflows, React, Next.js, TypeScript and modern web development.
              </p>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-6 font-normal tracking-wide">
                My goal is to help startups, businesses and entrepreneurs build intelligent products that automate tasks, improve customer experience and increase productivity.
              </p>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed font-normal tracking-wide">
                I am the founder of  Neuraloft. I work with clients worldwide to build AI-powered solutions including GPT Chatbots, WhatsApp Automation, AI Agents, SaaS Platforms and custom business automation systems.
              </p>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed font-normal tracking-wide mt-4">
                I enjoy turning complex ideas into scalable digital products with clean design, modern technologies and real business impact.
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

              {/* Education Section Added Successfully */}
              <div className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0 mt-1">
                  <GraduationCap className="w-4 h-4 text-[#E1E0CC]" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white uppercase tracking-wider">
                    Education & Certifications
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Certified Agentic AI Engineer (PIAIC)
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Certified AI, Metaverse & Web3 Developer (GIAIC)
                  </p>
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

        {/* SKILLS GRID MODULE */}
        <div className="mt-12 bg-[#101010]/30 border border-neutral-900 rounded-2xl p-6 md:p-8">
          <h3 className="text-xl text-[#E1E0CC] mb-6 font-medium">
            Technologies & Expertise
          </h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-[#101010] border border-neutral-800 text-sm text-gray-300 hover:border-[#E1E0CC]/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* REAL SOCIAL LINKS MODULE */}
        <div className="mt-12 bg-[#101010]/30 border border-neutral-900 rounded-2xl p-6 md:p-8">
          <h3 className="text-xl text-[#E1E0CC] mb-4 font-medium">
            Connect With Me
          </h3>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#101010] border border-neutral-800 text-sm text-gray-400 hover:text-[#E1E0CC] hover:border-[#E1E0CC]/30 hover:bg-white/[0.02] transition-all duration-300"
              >
                <social.icon className="w-4 h-4" />
                <span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
