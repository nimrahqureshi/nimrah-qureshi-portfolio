import { motion } from 'framer-motion';
import { Code2, Bot, Brain, Briefcase, Globe, Cpu, Target } from 'lucide-react';
import SectionHeading from '@/components/effects/SectionHeading';
import GlassCard from '@/components/effects/GlassCard';
import Timeline from './Timeline';

const skills = [
  { name: 'AI & ML', level: 95, icon: Brain },
  { name: 'Chatbot Dev', level: 95, icon: Bot },
  { name: 'Full Stack', level: 92, icon: Code2 },
  { name: 'Automation', level: 90, icon: Cpu },
  { name: 'SaaS Dev', level: 88, icon: Globe },
  { name: 'DevOps', level: 85, icon: Briefcase },
];

const services = [
  {
    icon: Brain,
    title: 'My Mission',
    desc: 'To empower businesses with intelligent AI solutions that automate operations, enhance customer experiences, and drive measurable growth.'
  },
  {
    icon: Target,
    title: 'My Vision',
    desc: 'To become the leading AI engineer bridging the gap between cutting-edge AI technology and practical business applications worldwide.'
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 neural-bg" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading 
          title="About Me"
          subtitle="A passionate AI Engineer & Full-Stack Developer dedicated to building innovative solutions that transform businesses."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="h-full">
              <h3 className="text-2xl font-bold mb-6 gradient-text">My Story</h3>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  I'm Nimrah Qureshi, an AI Engineer and Full-Stack Developer based in
                  Karachi, focused on building practical AI solutions for startups,
                  creators, and businesses.
                </p>
                <p>
                  My expertise spans AI chatbots, AI agents, workflow automation,
                  full-stack web applications, API integrations, and modern SaaS products.
                  I work with OpenAI, LangChain, and RAG on the AI side, and React, Next.js,
                  and Node.js across the stack.
                </p>
                <p>
                  I help businesses automate repetitive work, improve customer support,
                  generate leads, and launch scalable digital products. I'm also the founder
                  of Brain Link AI and Neuraloft, two brands focused on AI, automation,
                  and software development.
                </p>
                <p>
                  My mission is to combine intelligence, automation, and software engineering
                  to create systems that save time and drive growth. I'm available worldwide
                  and remote-friendly.
                </p>
              </div>
            </GlassCard>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="h-full">
              <h3 className="text-2xl font-bold mb-6 gradient-text">Skills & Expertise</h3>
              <div className="space-y-5">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-white">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Mission & Vision */}
              <div className="mt-8 space-y-4">
                {services.map((item) => (
                  <div key={item.title} className="flex gap-3 p-4 rounded-lg bg-white/5">
                    <item.icon className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      <p className="text-sm text-muted">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Timeline */}
        <Timeline />
      </div>
    </section>
  );
}
