import { useState } from 'react';
import { Search, SlidersHorizontal, Wrench, ArrowUpRight } from 'lucide-react';

const intelligenceRegistry = [
  { name: 'Agent core engine', type: 'Chatbots', tier: 'Production Framework', use: 'Multi-step action sequences' },
  { name: 'Vector document linker', type: 'Automation Tools', tier: 'Context Injection', use: 'Document matching matrix maps' },
  { name: 'Dynamic content prompt layer', type: 'Content Tools', tier: 'Template Core', use: 'Automated structure assembly' },
  { name: 'Asset generation utility', type: 'Image AI', tier: 'Asset Pipeline', use: 'Digital visual rendering triggers' }
];

export default function AiTools() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredTools = intelligenceRegistry.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || tool.use.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || tool.type === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold tracking-tight text-white">AI Tools Engine</h1>
            <p className="text-gray-400 text-sm">Internal scripts and utility models configured for automated workspace actions.</p>
          </div>

          {/* Real-time Search Infrastructure */}
          <div className="flex gap-2 bg-[#1E2023] border border-white/5 p-2 rounded-xl max-w-sm w-full">
            <Search className="w-4 h-4 text-gray-500 ml-2 self-center" />
            <input
              type="text"
              placeholder="Query tool registry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-xs sm:text-sm text-white focus:outline-none w-full placeholder-gray-600"
            />
          </div>
        </div>

        {/* Category Filter Badges */}
        <div className="flex flex-wrap gap-2 border-b border-white/5 pb-4">
          {['All', 'Chatbots', 'Content Tools', 'Image AI', 'Automation Tools'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === cat 
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/10' 
                  : 'bg-[#1E2023] text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tools Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredTools.map((tool) => (
            <div key={tool.name} className="bg-[#1E2023] border border-white/5 rounded-2xl p-5 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start gap-2">
                  <h3 className="text-sm sm:text-base font-bold text-white font-mono">{tool.name}</h3>
                  <span className="text-[9px] font-mono px-2 py-0.5 bg-black/40 text-purple-400 border border-purple-500/10 rounded-md shrink-0 uppercase tracking-wider">{tool.type}</span>
                </div>
                <p className="text-gray-400 text-xs mt-2 leading-relaxed">{tool.use}</p>
              </div>
              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500">
                <span>{tool.tier}</span>
                <span className="text-purple-400 flex items-center gap-0.5 cursor-pointer hover:underline">Verify Source <ArrowUpRight className="w-3 h-3" /></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
