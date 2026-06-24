import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';

const logicArticles = [
  {
    title: 'Building Stateful Multi-Agent Pipelines with OpenAI Tool Definitions',
    desc: 'Deep-dive into executing isolated programmatic actions, state synchronization, and prompt caching matrices.',
    cat: 'AI Systems',
    time: '6 min read'
  },
  {
    title: 'Performance Evaluation Metrics across Next.js 15 Route Layers',
    desc: 'Investigating response delays, dynamic data hydration pipelines, and proper microservice payload compression setups.',
    cat: 'Development',
    time: '4 min read'
  },
  {
    title: 'Automating Workflow Operations Using Modern Webhook Architecture',
    desc: 'Connecting decentralized databases securely via encrypted data pipes for failure-free state logging.',
    cat: 'Automation',
    time: '5 min read'
  }
];

export default function Blog() {
  return (
    <div className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-left space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Engineering Journal</h1>
          <p className="text-gray-400 text-sm">Architectural thoughts regarding AI pipelines, safe memory states, and backend performance tracking.</p>
        </div>

        {/* Featured Top Post */}
        <div className="premium-card p-6 sm:p-8 bg-gradient-to-br from-[#1E2023] via-[#151719] to-black">
          <span className="text-[10px] font-mono uppercase bg-purple-500/10 text-purple-400 px-25 py-1 rounded-md border border-purple-500/20">Featured Entry</span>
          <h2 className="text-xl sm:text-3xl font-bold text-white mt-4 mb-2 max-w-2xl leading-tight">Optimizing Large Language Model Workflows with Memory-Mapped Vector DB Pipelines</h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-xl leading-relaxed mb-6">How modifying local chunk schemas and managing embedding buffers improves contextual data matching rates dynamically.</p>
          <div className="flex items-center gap-4 text-xs text-gray-500 font-mono">
            <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> AI Research</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 12 min runtime</span>
          </div>
        </div>

        {/* Article Grid Array */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {logicArticles.map((art) => (
            <div key={art.title} className="premium-card p-5 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-purple-400 uppercase tracking-widest font-mono font-semibold">{art.cat}</span>
                <h3 className="text-base font-bold text-white mt-2 mb-2 line-clamp-2 hover:text-purple-300 transition-colors cursor-pointer">{art.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">{art.desc}</p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500 font-mono">
                <span>{art.time}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
