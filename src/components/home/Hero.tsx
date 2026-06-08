import { motion } from 'framer-motion';
import { ArrowRight, Download, Play, Sparkles } from 'lucide-react';
import Typewriter from './Typewriter';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 neural-bg" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-purple-500 rounded-full animate-float opacity-50" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-5 h-5 bg-purple-400 rounded-full animate-float opacity-30" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-cyan-500 rounded-full animate-float opacity-50" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8"
          >
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-400">AI Engineer & Full-Stack Developer</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="gradient-text">Hi, I'm Nimrah</span>
            <br />
            <span className="text-white">Qureshi</span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <Typewriter />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-muted max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Building AI Chatbots, AI Agents, Automation Systems & Modern Web Applications. 
            Helping businesses automate workflows and scale with cutting-edge AI technology.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button
              onClick={() => scrollTo('contact')}
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 flex items-center gap-2"
            >
              Hire Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="px-8 py-4 bg-white/5 border border-purple-500/20 text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
            >
              <Play className="w-4 h-4" />
              Book Discovery Call
            </button>
            <button
              onClick={() => scrollTo('portfolio')}
              className="px-8 py-4 bg-white/5 border border-purple-500/20 text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
            >
              View Projects
            </button>
            <button className="px-8 py-4 bg-white/5 border border-purple-500/20 text-white rounded-xl font-medium hover:bg-white/10 transition-all duration-200 flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Resume
            </button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-purple-500/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
