import { motion } from 'framer-motion';
import { BarChart3, ShieldCheck, Zap, Layers } from 'lucide-react';

const structuralCaseStudies = [
  {
    client: 'Brainlink AI Operations',
    metric: '99.8% Core Automation Uptime',
    challenge: 'Fragmented conversational flows causing data collection drops and asynchronous messaging lag.',
    solution: 'Designed an asynchronous event framework with standard context caching loops ensuring structural trace matching.',
    results: 'Eliminated message ingestion loss completely while slashing communication overhead expenses.',
    metricsIcon: Zap
  },
  {
    client: 'N3KO Enterprise Games',
    metric: '3.4x Frame Render Multiplier',
    challenge: 'Heavy data mutation calculations blocking UI re-render updates during intensive concurrent updates.',
    solution: 'Migrated layout states to an efficient server-side processing layer running Next.js structural engines.',
    results: 'Achieved instantaneous state hydration parameters running flawlessly on mobile client viewports.',
    metricsIcon: BarChart3
  }
];

export default function CaseStudies() {
  return (
    <div className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h1 className="text-3xl font-bold text-white tracking-tight sm:text-4xl">Architectural Reports</h1>
          <p className="text-gray-400 text-sm">Deep-dive structural investigations profiling real problem processing states and final system results.</p>
        </div>

        <div className="space-y-8">
          {structuralCaseStudies.map((cs, i) => (
            <motion.div
              key={cs.client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="premium-card p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6"
            >
              <div className="lg:col-span-8 space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold text-white">{cs.client}</h2>
                <div className="space-y-2.5 text-xs sm:text-sm">
                  <p className="text-gray-400"><strong className="text-gray-200 block mb-0.5">The Challenge</strong> {cs.challenge}</p>
                  <p className="text-gray-400"><strong className="text-gray-200 block mb-0.5">Technical Solution</strong> {cs.solution}</p>
                  <p className="text-gray-400"><strong className="text-gray-200 block mb-0.5">System Results</strong> {cs.results}</p>
                </div>
              </div>
              <div className="lg:col-span-4 bg-black/30 border border-white/5 rounded-xl p-5 flex flex-col justify-center items-center text-center">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-3">
                  <cs.metricsIcon className="w-5 h-5" />
                </div>
                <p className="text-xs uppercase font-mono tracking-widest text-gray-500">Validated Outcome</p>
                <p className="text-lg sm:text-xl font-bold text-purple-400 mt-1">{cs.metric}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
