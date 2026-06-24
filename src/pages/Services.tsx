import { motion } from 'framer-motion';
import { Cpu, Bot, Code, Settings, Server, CheckCircle } from 'lucide-react';

const comprehensiveServices = [
  {
    icon: Cpu,
    category: 'AI Agent Development',
    features: ['Custom Cognitive Architectures', 'OpenAI Function Call Integration', 'LangChain Workflow Blueprints', 'Dynamic Database Memory Layers']
  },
  {
    icon: Bot,
    category: 'AI Chatbot Engineering',
    features: ['Interactive Web Core Bots', 'CRM Support Operations System', 'Multi-turn Dialog Workflows', 'High-speed Conversational Pipelines']
  },
  {
    icon: Code,
    category: 'Full-Stack Web Development',
    features: ['Type-safe React / Next.js Frontends', 'Scalable Node.js / Express Architecture', 'Secure REST & GraphQL Endpoint Structures', 'High-performance PostgreSQL & MongoDB Hooks']
  },
  {
    icon: Settings,
    category: 'Operational Automation',
    features: ['Custom Workflow Automation Nodes', 'External API Sync Services', 'Data Extraction Pipelines', 'Legacy App Modernization Hooks']
  }
];

export default function Services() {
  return (
    <div className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">Technical Frameworks</h1>
          <p className="text-gray-400 text-sm sm:text-base">Custom computational structures engineered for immediate enterprise value.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {comprehensiveServices.map((srv, idx) => (
            <motion.div
              key={srv.category}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="premium-card p-6 sm:p-8 text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                    <srv.icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">{srv.category}</h2>
                </div>
                <ul className="space-y-3">
                  {srv.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
