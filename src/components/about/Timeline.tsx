import { motion } from 'framer-motion';
import { BookOpen, Code2, Brain, Bot, Link2, Building2 } from 'lucide-react';

const timeline = [
  {
    year: '2019',
    title: 'Learning Programming',
    description: 'Started with HTML, CSS, and JavaScript. Built my first web applications and fell in love with coding.',
    icon: BookOpen,
  },
  {
    year: '2020',
    title: 'Full Stack Development',
    description: 'Mastered React, Node.js, MongoDB, and TypeScript. Built complex full-stack applications and SaaS platforms.',
    icon: Code2,
  },
  {
    year: '2021',
    title: 'AI Engineering',
    description: 'Dived into AI/ML, learned OpenAI APIs, LangChain, and RAG systems. Started building intelligent AI solutions.',
    icon: Brain,
  },
  {
    year: '2022',
    title: 'Chatbot Development',
    description: 'Specialized in AI chatbot development. Built multi-channel chatbots for websites, WhatsApp, and customer support.',
    icon: Bot,
  },
  {
    year: '2023',
    title: 'Building Brain Link AI',
    description: 'Founded Brain Link AI - an enterprise AI platform connecting businesses with intelligent automation solutions.',
    icon: Link2,
  },
  {
    year: '2024',
    title: 'Building Neuraloft',
    description: 'Launched Neuraloft - an AI development agency delivering enterprise-grade AI solutions to global clients.',
    icon: Building2,
  }
];

export default function Timeline() {
  return (
    <div className="relative w-full">
      <h3 style={{ color: '#E1E0CC' }} className="text-xl sm:text-2xl font-medium text-center mb-16 tracking-tight">
        My Journey
      </h3>
      
      <div className="relative max-w-5xl mx-auto px-2">
        {/* Center Guide Line with Muted Minimalist Gradient */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 transform md:-translate-x-px w-[1px] bg-gradient-to-b from-purple-500/40 via-white/10 to-purple-500/40" />
        
        <div className="space-y-10 md:space-y-14">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 relative ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content Box */}
              <div className={`w-full md:flex-1 pl-12 md:pl-0 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <GlassCard className="bg-[#101010] border border-white/[0.04] p-5 sm:p-6 rounded-2xl hover:border-white/[0.08] transition-all duration-300 group inline-block text-left w-full">
                  <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] sm:text-xs font-mono font-medium bg-white/[0.04] text-purple-300 border border-white/[0.03] mb-3 transition-colors group-hover:bg-[#E1E0CC] group-hover:text-black">
                    {item.year}
                  </span>
                  <h4 style={{ color: '#E1E0CC' }} className="text-base sm:text-lg font-medium mb-1.5 tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </GlassCard>
              </div>

              {/* Icon Marker Hub (Fixed layout alignment positions) */}
              <div className="absolute left-0 md:relative md:left-auto md:right-auto z-10 flex-shrink-0 transform translate-x-1 md:translate-x-0">
                <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-[#151515] border border-white/10 flex items-center justify-center shadow-2xl group-hover:border-white/30 transition-colors duration-300">
                  <item.icon className="w-3.5 h-3.5 text-[#E1E0CC]" />
                </div>
              </div>

              {/* Balanced Spacing Column for Desktop Layout alignment */}
              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Minimal Clean Inline Helper Component to match implementation properties
function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-xl ${className}`}>
      {children}
    </div>
  );
}