import { motion } from 'framer-motion';
import { BookOpen, Code2, Brain, Bot, Link2, Building2 } from 'lucide-react';

const timeline = [
  {
    year: '2019',
    title: 'Learning Programming',
    description: 'Started with HTML, CSS, and JavaScript. Built my first web applications and fell in love with coding.',
    icon: BookOpen,
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    year: '2020',
    title: 'Full Stack Development',
    description: 'Mastered React, Node.js, MongoDB, and TypeScript. Built complex full-stack applications and SaaS platforms.',
    icon: Code2,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    year: '2021',
    title: 'AI Engineering',
    description: 'Dived into AI/ML, learned OpenAI APIs, LangChain, and RAG systems. Started building intelligent AI solutions.',
    icon: Brain,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    year: '2022',
    title: 'Chatbot Development',
    description: 'Specialized in AI chatbot development. Built multi-channel chatbots for websites, WhatsApp, and customer support.',
    icon: Bot,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    year: '2023',
    title: 'Building Brain Link AI',
    description: 'Founded Brain Link AI - an enterprise AI platform connecting businesses with intelligent automation solutions.',
    icon: Link2,
    gradient: 'from-purple-600 to-cyan-400'
  },
  {
    year: '2024',
    title: 'Building Neuraloft',
    description: 'Launched Neuraloft - an AI development agency delivering enterprise-grade AI solutions to global clients.',
    icon: Building2,
    gradient: 'from-cyan-400 to-blue-600'
  }
];

export default function Timeline() {
  return (
    <div className="relative">
      <h3 className="text-2xl font-bold text-center mb-12 gradient-text">My Journey</h3>
      
      <div className="relative">
        {/* Center Line */}
        <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-purple-500 via-cyan-400 to-purple-500 hidden md:block" />
        
        <div className="space-y-12">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-6 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <GlassCard>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${item.gradient} text-white mb-3`}>
                    {item.year}
                  </span>
                  <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-muted">{item.description}</p>
                </GlassCard>
              </div>

              {/* Icon */}
              <div className="relative z-10 flex-shrink-0">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${item.gradient} flex items-center justify-center shadow-lg`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Empty space for alignment */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`glass-card rounded-xl p-6 ${className}`}>
      {children}
    </div>
  );
}
