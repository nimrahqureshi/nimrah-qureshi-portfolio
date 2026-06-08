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
    <div className="text-2xl md:text-3xl font-mono text-muted">
      <span className="text-purple-400">&gt; </span>
      <span>{roles[currentIndex].substring(0, charIndex)}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-0.5 h-6 bg-purple-400 ml-0.5"
      />
    </div>
  );
}
