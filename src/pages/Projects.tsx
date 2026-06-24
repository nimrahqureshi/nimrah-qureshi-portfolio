import { motion } from 'framer-motion';
import { ExternalLink, FolderGit2, Terminal } from 'lucide-react';

const highTierProjects = [
  {
    name: 'Brainlink AI',
    desc: 'Autonomous workspace environment mapping multiple custom API channels into unified communication nodes.',
    tech: ['React', 'Tailwind', 'OpenAI API', 'Framer Motion'],
    git: 'https://github.com/nimrahqureshi',
    live: '#'
  },
  {
    name: 'Neuraloft Hub',
    desc: 'Brand layout interface configured for dynamic digital software houses handling machine learning assets.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    git: 'https://github.com/nimrahqureshi',
    live: '#'
  },
  {
    name: 'N3KO Games Ecosystem',
    desc: 'High-performance interactive casino gaming dashboard utilizing Next.js 15 routing architecture and robust data schemas.',
    tech: ['Next.js 15', 'NestJS', 'PostgreSQL', 'Tailwind'],
    git: 'https://github.com/nimrahqureshi',
    live: '#'
  },
  {
    name: 'MeowMeow Marketing Node',
    desc: 'E-commerce affiliate data collection core rendering localized partner elements natively with optimal caching layout metrics.',
    tech: ['HTML5', 'CSS3', 'JavaScript Engine'],
    git: 'https://github.com/nimrahqureshi',
    live: '#'
  }
];

export default function Projects() {
  return (
    <div className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-left max-w-2xl space-y-2">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">Case Operations</h1>
          <p className="text-gray-400 text-sm">Selective look across live microservices, frontend assets, and artificial intelligence experiments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highTierProjects.map((proj) => (
            <motion.div
              key={proj.name}
              className="premium-card p-6 flex flex-col justify-between"
              style={{ contentVisibility: 'auto' }}
            >
              <div>
                <div className="flex items-center gap-2 text-purple-400 mb-3">
                  <Terminal className="w-4 h-4" />
                  <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500">Active Build Stack</span>
                </div>
                <h2 className="text-xl font-bold text-white mb-2">{proj.name}</h2>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">{proj.desc}</p>
              </div>
              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {proj.tech.map(t => (
                    <span key={t} className="px-2.5 py-1 bg-black/40 border border-white/5 rounded-md text-[10px] text-gray-400 font-mono">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                  <a href={proj.git} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors">
                    <FolderGit2 className="w-4 h-4" /> Source
                  </a>
                  <a href={proj.live} className="flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 transition-colors ml-auto">
                    Live Demo <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
