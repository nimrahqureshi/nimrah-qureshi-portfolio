import { motion } from 'framer-motion';
import { Calendar, Award, Compass, ChevronRight } from 'lucide-react';

const coreValues = [
  { icon: Compass, title: 'Problem Solver', desc: 'Analyzing bottlenecks thoroughly before writing production code layouts.' },
  { icon: Award, title: 'AI Specialist', desc: 'Focusing heavily on model operational behaviors, vector matching, and agent actions.' },
  { icon: Calendar, title: 'Modern Development', desc: 'Deploying optimized architectures using type-safe states and secure endpoints.' }
];

const milestones = [
  { year: 'Phase 1', title: 'Foundational Computer Science', desc: 'Mastered essential software principles, layout designs, and clean procedural code logic.' },
  { year: 'Phase 2', title: 'Full Stack Integration', desc: 'Architected dynamic responsive systems matching complex commercial layout requirements.' },
  { year: 'Phase 3', title: 'Advanced Robotics & AI Sim', desc: 'Investigated physical artificial intelligence models, digital twins, and autonomous control architectures.' },
  { year: 'Phase 4', title: 'Autonomous Business Agents', desc: 'Building custom vector pipelines, multi-tool workflows, and enterprise automation components.' }
];

export default function About() {
  return (
    <div className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-purple-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* About Profile Header */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-8">
          <div className="md:col-span-4 flex justify-center">
            <div className="w-48 h-48 rounded-2xl bg-[#1E2023] border border-white/10 p-3 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 to-transparent" />
              <img 
                src="/images/logo.png" 
                alt="Nimrah Qureshi Profile" 
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
          <div className="md:col-span-8 text-left space-y-4">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">About My Architecture</h1>
            <p className="text-purple-400 text-sm font-medium tracking-wide uppercase">Nimrah Qureshi — Engineer & Artist</p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              I specialize in bridges built between operational business problems and creative artificial intelligence solutions. 
              By merging robust full-stack logic frameworks with conversational agent behaviors, I transform concepts into reliable digital tools.
            </p>
          </div>
        </section>

        {/* Dynamic Timeline Component */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-left text-white tracking-tight border-b border-white/5 pb-3">Development Milestones</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {milestones.map((m, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#1E2023] border border-white/5 p-5 rounded-2xl text-left"
              >
                <span className="text-xs font-mono px-2 py-1 bg-purple-500/10 text-purple-400 rounded-md border border-purple-500/20">{m.year}</span>
                <h3 className="text-sm font-bold text-white mt-3 mb-1">{m.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why Choose Core Strengths Grid */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-center text-white tracking-tight">Core Values & Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((v, idx) => (
              <div key={idx} className="premium-card p-6 text-left">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
                  <v.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
