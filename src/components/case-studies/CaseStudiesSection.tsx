import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2, Clock, Building2, BarChart3 } from 'lucide-react';
import SectionHeading from '@/components/effects/SectionHeading';
import GlassCard from '@/components/effects/GlassCard';
import { caseStudies, CaseStudy } from '@/data/caseStudies';

export default function CaseStudiesSection() {
  const [selected, setSelected] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 neural-bg" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading 
          title="Case Studies"
          subtitle="Real projects, real results. See how I've helped businesses transform with AI and automation."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="h-full cursor-pointer group" hover={true}>
                <div className={`h-40 rounded-lg bg-gradient-to-br ${cs.gradient} mb-6 flex items-center justify-center`}>
                  <Building2 className="w-10 h-10 text-white/60" />
                </div>

                <span className="text-xs text-purple-400 font-medium">{cs.industry}</span>
                <h3 className="text-xl font-bold text-white mt-1 mb-3">{cs.title}</h3>
                <p className="text-sm text-muted mb-2 line-clamp-2">{cs.client}</p>
                <p className="text-sm text-muted mb-4 line-clamp-3">{cs.problem}</p>

                <div className="flex items-center gap-2 text-sm text-muted mb-4">
                  <Clock className="w-4 h-4" />
                  <span>{cs.timeline}</span>
                </div>

                <button
                  onClick={() => setSelected(cs)}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors"
                >
                  Read Case Study <ArrowRight className="w-4 h-4" />
                </button>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Detail Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelected(null)} />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto glass-card rounded-2xl p-8"
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-muted hover:text-white hover:bg-white/10 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className={`h-48 rounded-xl bg-gradient-to-br ${selected.gradient} flex items-center justify-center mb-6`}>
                  <div className="text-center">
                    <Building2 className="w-12 h-12 text-white/60 mx-auto mb-2" />
                    <h2 className="text-2xl font-bold text-white">{selected.title}</h2>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Building2 className="w-4 h-4" />
                    {selected.client}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <Clock className="w-4 h-4" />
                    {selected.timeline}
                  </div>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-semibold text-red-400 mb-3">The Problem</h3>
                    <p className="text-muted leading-relaxed">{selected.problem}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-green-400 mb-3">The Solution</h3>
                    <p className="text-muted leading-relaxed">{selected.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-purple-400 mb-3">Technology Stack</h3>
                    <div className="flex flex-wrap gap-2">
                      {selected.technologies.map((t) => (
                        <span key={t} className="px-3 py-1 rounded-lg text-xs bg-purple-500/10 text-purple-400 border border-purple-500/10">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-cyan-400 mb-3">Implementation</h3>
                    <p className="text-muted leading-relaxed">{selected.implementation}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Results</h3>
                    <ul className="space-y-3">
                      {selected.results.map((r) => (
                        <li key={r} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="text-muted">{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20">
                    <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-purple-400" />
                      Business Impact
                    </h3>
                    <p className="text-muted leading-relaxed">{selected.businessImpact}</p>
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
