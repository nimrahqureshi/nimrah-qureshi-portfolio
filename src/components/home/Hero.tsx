import { motion } from 'framer-motion';
import { ArrowRight, Download, Play, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from './Typewriter';
import FadeIn from '../effects/FadeIn';
import Magnet from '../effects/Magnet';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 bg-black"
      style={{ overflowX: 'clip' }}
    >
      {/* PRISMA INSPIRED LUXURY BACKGROUND SYSTEM */}
      {/* Studio Noise & Texture Map Layer */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

      {/* High-End Tech Grid Mask Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#E1E0CC05_1px,transparent_1px),linear-gradient(to_bottom,#E1E0CC05_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" 
      />
      
      {/* Ambient Premium Soft Light Radiance Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#E1E0CC]/5 rounded-full blur-[140px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-slate-800/40 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '2.5s' }} />
      
      {/* Micro-Flares and Cinematic Structural Anchors */}
      <div className="absolute top-24 left-12 w-1.5 h-1.5 bg-[#E1E0CC] rounded-full animate-float opacity-30" />
      <div className="absolute top-48 right-24 w-1 h-1 bg-gray-400 rounded-full animate-float opacity-40" style={{ animationDelay: '1.2s' }} />
      <div className="absolute bottom-36 left-20 w-2 h-2 bg-slate-600 rounded-full animate-float opacity-20" style={{ animationDelay: '2.2s' }} />
      <div className="absolute bottom-24 right-16 w-1.5 h-1.5 bg-gray-500 rounded-full animate-float opacity-30" style={{ animationDelay: '3.5s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center">
          
          {/* Studio Tech Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#101010] border border-[#E1E0CC]/10 mb-8 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E1E0CC] animate-pulse" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#E1E0CC]/80">
              AI Engineer &amp; Full-Stack Developer
            </span>
          </motion.div>

          {/* INTERACTIVE LAYER CONTAINER (Premium Scale Typography) */}
          <div className="relative w-full max-w-5xl mx-auto min-h-[240px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px] flex items-center justify-center group select-none">
            
            {/* WATERMARK BACKGROUND HEADINGS */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center z-10 pointer-events-none transition-all duration-700 ease-out transform group-hover:scale-[1.01]"
            >
              <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-medium tracking-[-0.05em] leading-none uppercase">
                <span className="block text-gray-500 opacity-20 text-xl sm:text-2xl md:text-3xl normal-case font-normal tracking-wide mb-2 transition-all duration-500 group-hover:opacity-60 group-hover:text-[#E1E0CC]">
                  Hi, I&apos;m
                </span>
                {/* Text Outline styled to capture studio gallery tone */}
                <span 
                  className="block text-transparent bg-clip-text bg-gradient-to-b from-[#E1E0CC] to-neutral-400 opacity-15 sm:opacity-20 pb-2 transition-all duration-700 group-hover:opacity-100"
                  style={{ 
                    WebkitTextStroke: '1px rgba(225,224,204,0.25)',
                    filter: 'drop-shadow(0 4px 30px rgba(225,224,204,0.05))'
                  }}
                >
                  Nimrah Qureshi
                </span>
              </h1>
            </motion.div>

            {/* PORTRAIT OVERLAY LAYER */}
            <div className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer pointer-events-auto">
              <FadeIn delay={0.4}>
                <Magnet
                  padding={120}
                  strength={3.5}
                  activeTransition="transform 0.25s ease-out"
                  inactiveTransition="transform 0.5s ease-in-out"
                >
                  <img
                    src="/banner.png"
                    alt="Nimrah Qureshi"
                    loading="eager"
                    fetchPriority="high"
                    className="w-[200px] sm:w-[280px] md:w-[320px] lg:w-[360px] object-contain drop-shadow-[0_10px_50px_rgba(0,0,0,0.8)]
                               transition-all duration-500 ease-out
                               group-hover:opacity-0 group-hover:scale-95 group-hover:blur-md"
                  />
                </Magnet>
              </FadeIn>
            </div>
          </div>

          {/* TYPEWRITER AUTOMATION TERMINAL */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 mb-8 relative z-30"
          >
            <Typewriter />
          </motion.div>

          {/* DESCRIPTION LAYER */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xs sm:text-sm md:text-base text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed px-4 font-normal tracking-wide"
          >
            Building AI Chatbots, AI Agents, Automation Systems &amp; Modern Web Applications. 
            Helping businesses automate workflows and scale with cutting-edge AI technology.
          </motion.p>

          {/* STUDIO TECH BUTTONS LAYOUT CONTAINER */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap justify-center items-center gap-4 px-4 relative z-30 max-w-3xl mx-auto"
          >
            {/* Primary Hire Action */}
            <button
              onClick={() => navigate('/contact')}
              style={{ backgroundColor: '#E1E0CC' }}
              className="group px-7 py-3.5 text-black rounded-full font-medium transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider w-full sm:w-auto justify-center hover:opacity-90"
            >
              Hire Me
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            {/* Book Discovery Call */}
            <button
              onClick={() => navigate('/contact')}
              className="px-7 py-3.5 bg-[#101010] border border-neutral-800 text-[#E1E0CC]/80 rounded-full font-medium hover:bg-neutral-900 hover:text-[#E1E0CC] hover:border-neutral-700 transition-all duration-200 flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider w-full sm:w-auto justify-center backdrop-blur-sm"
            >
              <Play className="w-3.5 h-3.5 text-[#E1E0CC]" />
              Book Discovery Call
            </button>
            
            {/* View Projects */}
            <button
              onClick={() => navigate('/projects')}
              className="px-7 py-3.5 bg-[#101010] border border-neutral-800 text-[#E1E0CC]/80 rounded-full font-medium hover:bg-neutral-900 hover:text-[#E1E0CC] hover:border-neutral-700 transition-all duration-200 flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider w-full sm:w-auto justify-center backdrop-blur-sm"
            >
              View Projects
            </button>
            
            {/* Download Resume */}
            <button className="px-7 py-3.5 bg-[#101010] border border-neutral-800 text-[#E1E0CC]/80 rounded-full font-medium hover:bg-neutral-900 hover:text-[#E1E0CC] hover:border-neutral-700 transition-all duration-200 flex items-center gap-2 text-xs sm:text-sm uppercase tracking-wider w-full sm:w-auto justify-center backdrop-blur-sm">
              <Download className="w-3.5 h-3.5 text-gray-500" />
              Download Resume
            </button>
          </motion.div>

        </div>
      </div>

      {/* Modern Studio Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block opacity-40"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-9 rounded-full border border-neutral-800 flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-[#E1E0CC]" />
        </motion.div>
      </motion.div>
    </section>
  );
}