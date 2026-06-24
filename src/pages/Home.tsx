import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Bot, Cpu, Code, Layers, ArrowRight, Star, Sparkles, CheckCircle2 } from 'lucide-react';

const technologies = [
  { name: 'OpenAI', type: 'AI Infrastructure' },
  { name: 'LangChain', type: 'Agent Frameworks' },
  { name: 'React / Next.js', type: 'Frontend Architecture' },
  { name: 'Node.js', type: 'Backend Systems' },
  { name: 'MongoDB', type: 'Data Storage' },
  { name: 'AWS', type: 'Cloud Nodes' }
];

const homeServices = [
  {
    icon: Cpu,
    title: 'AI Agents',
    description: 'Autonomous decision-making engines designed to automate complex, multi-step business logic workflows efficiently.'
  },
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: 'Intelligent, multi-platform conversational systems integrated into legacy backend APIs for optimal engagement.'
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Production-ready full-stack architectures built using React, Next.js, and robust microservices systems.'
  },
  {
    icon: Layers,
    title: 'Business Automation',
    description: 'Custom middleware and workflow tools syncing platforms, databases, and third-party tools flawlessly.'
  }
];

const projectsPreview = [
  {
    title: 'Brainlink AI (BLAI)',
    problem: 'Siloed computational tools and fragmented client service channels.',
    solution: 'Built an integrated client services core containing responsive automated workflows.',
    result: 'Streamlined communication latency and enhanced user pipeline tracking.',
    tech: ['React', 'OpenAI Node API', 'Framer Motion']
  },
  {
    title: 'N3KO Games Engine',
    problem: 'Legacy betting and casino structures lacked modern interfaces.',
    solution: 'Engineered a secure, performant microservices hub running transactional states.',
    result: 'Drastically improved frame performance rates and high security levels.',
    tech: ['Next.js 15', 'NestJS', 'PostgreSQL']
  }
];

const testimonials = [
  {
    quote: "Nimrah's architecture for our automation pipeline was clean and incredibly fast. The AI agent workflow transformed our operations completely.",
    author: "Enterprise Collaborator",
    role: "Technical Operations Director",
    rating: 5
  },
  {
    quote: "Exceptional execution on complex technical microservices. The project was delivered ahead of schedule with flawless integration parameters.",
    author: "Startup Director",
    role: "Co-Founder & Product Lead",
    rating: 5
  },
  {
    quote: "Professional communication, high-level technical expertise, and outstanding code maintainability. A premium developer in every aspect.",
    author: "Agile Project Partner",
    role: "Senior Engineering Manager",
    rating: 5
  }
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      {/* Background Radiance Systems */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 left-10 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5" /> Core Portfolio Hub
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]"
            >
              Nimrah Qureshi <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-200 to-white">
                AI Engineer & <br />Full Stack Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base sm:text-lg text-gray-400 max-w-xl leading-relaxed"
            >
              I build high-end AI agents, advanced autonomous automation systems, 
              and modern scalable web applications optimized for premium startups and businesses.
            </motion.p>

            {/* CTA Button Array */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button 
                onClick={() => navigate('/contact')}
                className="premium-btn-primary px-6 py-3.5 text-sm flex items-center gap-2 group"
              >
                Hire Me 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => navigate('/projects')}
                className="premium-btn-secondary px-6 py-3.5 text-sm"
              >
                View Projects
              </button>
            </motion.div>

            {/* Performance Metric Counters */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-10 border-t border-white/5 max-w-md"
            >
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white font-mono">20+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Projects Built</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white font-mono">10+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Happy Clients</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white font-mono">2+</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">Years Exp</p>
              </div>
            </motion.div>
          </div>

          {/* Right Layout Visual Column */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="w-72 h-72 sm:w-85 sm:h-85 rounded-full bg-gradient-to-tr from-purple-600/20 to-indigo-500/10 border border-white/10 flex items-center justify-center relative shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-radial-gradient from-purple-500/5 to-transparent mix-blend-screen" />
              <img 
                src="/images/logo.png" 
                alt="Visual Core Node" 
                className="w-40 h-40 object-contain drop-shadow-[0_0_50px_rgba(139,92,246,0.3)] animate-pulse"
                loading="eager"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted Technologies Bar */}
      <section className="bg-[#11141D] border-y border-white/[0.04] py-8 my-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">
            Engineered Across Premium Enterprise Tech Stacks
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 lg:gap-12">
            {technologies.map((tech) => (
              <div key={tech.name} className="px-4 py-2 bg-[#1E2023] border border-white/5 rounded-xl text-center">
                <p className="text-sm font-medium text-white">{tech.name}</p>
                <p className="text-[10px] text-purple-400 mt-0.5">{tech.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Specialized Architectural Services</h2>
          <p className="text-gray-400 mt-3 text-sm sm:text-base">Production-grade computational systems designed to elevate business agility.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {homeServices.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="premium-card p-6 text-left flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5">
                  <service.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{service.description}</p>
              </div>
              <button 
                onClick={() => navigate('/services')} 
                className="mt-6 flex items-center gap-1.5 text-xs text-purple-400 font-medium hover:text-purple-300 transition-colors group"
              >
                Learn Architecture <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Featured Case Operations</h2>
            <p className="text-gray-400 mt-2 text-sm">A selective look at high-end client applications built to specifications.</p>
          </div>
          <button onClick={() => navigate('/projects')} className="premium-btn-secondary px-4 py-2 text-xs flex items-center gap-1.5">
            Explore All Work <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsPreview.map((project) => (
            <div key={project.title} className="premium-card p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
                <div className="space-y-3 mb-6 text-xs sm:text-sm">
                  <p className="text-gray-400"><strong className="text-gray-300">Challenge:</strong> {project.problem}</p>
                  <p className="text-gray-400"><strong className="text-gray-300">Solution:</strong> {project.solution}</p>
                  <p className="text-gray-400"><strong className="text-gray-300">Result:</strong> {project.result}</p>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map(t => (
                    <span key={t} className="px-2.5 py-1 bg-[#15171B] border border-white/5 rounded-md text-[11px] text-gray-400">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-[#0E121E]/60 border-y border-white/[0.02]">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">Collaborator & Client Validation</h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-2">Verifiable reviews regarding communication speed, system reliability, and architecture design.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="premium-card p-6 flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-4 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />)}
                </div>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed italic">"{t.quote}"</p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">{t.author}</h4>
                  <p className="text-[10px] text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Layer */}
      <section className="max-w-4xl mx-auto px-4 text-center py-16 mt-8">
        <div className="premium-card p-8 sm:p-12 relative overflow-hidden bg-gradient-to-b from-[#1E2023] to-[#141619]">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">Ready to Build Your Next Project?</h2>
          <p className="text-gray-400 text-xs sm:text-sm max-w-lg mx-auto mb-8">
            Connect directly to schedule an architectural review or draft autonomous client workflow blueprints.
          </p>
          <button onClick={() => navigate('/contact')} className="premium-btn-primary px-8 py-3.5 text-sm inline-flex items-center gap-2">
            Start Project <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
