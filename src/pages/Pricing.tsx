import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const pricingTiers = [
  {
    name: 'Starter Architecture',
    pricing: 'Project Based Tier',
    desc: 'Perfect for startups requiring immediate automated core infrastructure integrations.',
    perks: ['Single Channel Chatbot Link', 'Basic Vector Database Setup', 'React Architecture Layout Integration', '7 Days Post-Deployment QA Support']
  },
  {
    name: 'Professional Systems',
    pricing: 'SLA Resource Tier',
    desc: 'Optimized for growing commercial teams linking multiple data sources to AI systems.',
    perks: ['Multi-Agent Logic Automations', 'Enterprise-wide CRM Webhook Hooks', 'High-Speed API Execution Paths', '30 Days Dedicated Maintenance SLA'],
    highlight: true
  }
];

export default function Pricing() {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-white">Project Resource Packages</h1>
          <p className="text-gray-400 text-sm">Transparent structural blueprints adapted to fit precise corporate scope maps cleanly.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pricingTiers.map((tier) => (
            <div 
              key={tier.name}
              className={`premium-card p-6 sm:p-8 flex flex-col justify-between relative ${
                tier.highlight ? 'border-purple-500/40 bg-gradient-to-b from-[#1E2023] to-[#121417]' : ''
              }`}
            >
              {tier.highlight && (
                <span className="absolute top-4 right-4 text-[9px] font-mono bg-purple-600 text-white px-2 py-0.5 rounded-full uppercase tracking-wider">Most Requested</span>
              )}
              <div>
                <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                <p className="text-purple-400 text-sm font-mono tracking-wide font-medium mb-3">{tier.pricing}</p>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">{tier.desc}</p>
                <ul className="space-y-3 mb-8">
                  {tier.perks.map(p => (
                    <li key={p} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <Check className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <button 
                onClick={() => navigate('/contact')}
                className={`w-full py-3 rounded-xl text-xs font-medium flex items-center justify-center gap-1.5 transition-all ${
                  tier.highlight ? 'bg-gradient-to-r from-purple-600 to-indigo-500 text-white' : 'bg-black/40 border border-white/10 text-white hover:bg-white/5'
                }`}
              >
                Initiate Scope Evaluation <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
