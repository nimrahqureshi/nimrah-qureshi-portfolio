import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const roles = [
  'AI Engineer',
  'Full-Stack Developer',
  'AI Chatbot Specialist',
  'Automation Expert',
  'SaaS Architect'
];

export default function Typewriter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = roles[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentWord.length) {
          setCharIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (charIndex > 0) {
          setCharIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentIndex]);

  return (
    <div className="relative overflow-hidden py-2 rounded-xl inline-block">
      {/* Integrated Atmospheric Micro-Glow Layer specifically tuned for text highlights */}
      <div className="absolute inset-0 bg-[#E1E0CC]/[0.01] blur-md rounded-full pointer-events-none" />
      
      <div className="relative z-10 text-xl md:text-2xl font-mono text-gray-400 tracking-wide flex items-center">
        <span className="text-[#E1E0CC]/60 font-light mr-1">&gt; </span>
        <span className="text-[#E1E0CC]">{roles[currentIndex].substring(0, charIndex)}</span>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-[2px] h-5 bg-[#E1E0CC] ml-1 align-middle"
        />
      </div>
    </div>
  );
}