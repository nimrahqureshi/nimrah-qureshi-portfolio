import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2, Clock, Building2, BarChart3 } from 'lucide-react';
import { WordsPullUpMultiStyle } from "@/components/effects/WordsPullUpMultiStyle";
import GlassCard from '@/components/effects/GlassCard';
import { caseStudies, CaseStudy } from '@/data/caseStudies';

export default function CaseStudiesSection() {
  const [selected, setSelected] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="relative min-h-screen bg-black py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* Premium Visual Arts Background Architecture */}
      {/* 1. Fine Noise Layout Overlay */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none z-0" />
      
      {/* 2. Sophisticated Warm Ambient Light Vectors (No Loud Videos) */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#E1E0CC]/[0.02] blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-[#212121]/60 blur-[110px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Studio-Grade Typography Header */}
        <div className="text-center mb-16 sm:mb-20 md:mb-24 max-w-3xl mx-auto">
          <p className="text-[#E1E0CC]/60 text-[10px] sm:text-xs tracking-widest uppercase mb-3 font-medium">
            Proven Performance
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Case Studies
          </h2>
          <div className="text-sm sm:text-base md:text-lg font-light leading-relaxed tracking-normal max-w-2xl mx-auto text-gray-400">
            <WordsPullUpMultiStyle
              segments={[
                { 
                  text: "Real projects, real results. See how I've helped businesses transform with AI and automation.", 
                  className: "font-normal text-gray-400 text-center" 
                },
              ]}
            />
          </div>
        </div>

        {/* Case Studies Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <GlassCard className="h-full bg-[#101010] border border-white/[0.03] hover:border-white/[0.08] p-5 sm:p-6 rounded-2xl md:rounded-[1.5rem] flex flex-col justify-between group cursor-pointer transition-all duration-300">
                <div>
                  {/* Decorative Gradient Header Canvas */}
                  <div className={`h-40 rounded-xl bg-gradient-to-br ${cs.gradient} mb-6 flex items-center justify-center relative overflow-hidden opacity-95 group-hover:opacity-100 transition-opacity duration-300`}>
                    <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
                    <Building2 className="w-10 h-10 text-white/70 relative z-10 transform group-hover:scale-105 transition-transform duration-500" />
                  </div>

                  <span className="text-xs text-purple-400 font-medium tracking-wide uppercase">{cs.industry}</span>
                  <h3 className="text-xl font-medium text-[#E1E0CC] mt-1 mb-3 group-hover:text-white transition-colors duration-200">{cs.title}</h3>
                  <p className="text-sm text-gray-400 font-medium mb-2 line-clamp-2">{cs.client}</p>
                  <p className="text-sm text-gray-500 font-light leading-relaxed mb-4 line-clamp-3">{cs.problem}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-5 pt-3 border-t border-white/[0.03]">
                    <Clock className="w-3.5 h-3.5 text-gray-600" />
                    <span>{cs.timeline}</span>
                  </div>

                  <button
                    onClick={() => setSelected(cs)}
                    className="inline-flex items-center gap-2 text-[#E1E0CC]/80 group-hover:text-white font-medium transition-colors text-sm w-full"
                  >
                    Read Case Study <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Dynamic Details Slide Modal Overlay */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
            >
              <div className="absolute inset-0 bg-black/85 backdrop-blur-md" onClick={() => setSelected(null)} />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-[#141414] border border-white/[0.05] rounded-2xl md:rounded-[2rem] p-6 sm:p-8 md:p-10 z-10 scrollbar-thin"
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 border border-white/[0.02] transition-all z-20"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className={`h-48 rounded-xl bg-gradient-to-br ${selected.gradient} flex items-center justify-center mb-6 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="text-center relative z-10 px-4">
                    <Building2 className="w-12 h-12 text-white/70 mx-auto mb-2" />
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">{selected.title}</h2>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-8 pb-4 border-b border-white/[0.03]">
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                    <Building2 className="w-4 h-4 text-gray-600" />
                    <span className="font-medium text-[#E1E0CC]">{selected.client}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
                    <Clock className="w-4 h-4 text-gray-600" />
                    <span>{selected.timeline}</span>
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm font-semibold tracking-wider text-red-400 uppercase mb-2">The Problem</h3>
                    <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base">{selected.problem}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold tracking-wider text-green-400 uppercase mb-2">The Solution</h3>
                    <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base">{selected.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold tracking-wider text-purple-400 uppercase mb-3">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selected.technologies.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-md text-xs bg-purple-500/10 text-purple-400 border border-purple-500/10 font-medium">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold tracking-wider text-cyan-400 uppercase mb-2">Implementation</h3>
                    <p className="text-gray-400 font-light leading-relaxed text-sm sm:text-base">{selected.implementation}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold tracking-wider text-[#E1E0CC] uppercase mb-3">Results</h3>
                    <ul className="space-y-3">
                      {selected.results.map((r) => (
                        <li key={r} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-400 font-light text-sm sm:text-base">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 sm:p-6 rounded-xl bg-gradient-to-r from-purple-500/[0.03] to-cyan-500/[0.03] border border-white/[0.04]">
                    <h3 className="text-base font-medium text-white mb-2 flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-purple-400" />
                      Business Impact
                    </h3>
                    <p className="text-gray-400 font-light leading-relaxed text-sm">{selected.businessImpact}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}