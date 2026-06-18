import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NeuralNetwork from '@/components/effects/NeuralNetwork';
import WhatsAppButton from '@/components/whatsapp/WhatsAppButton';
import AIChatbot from '@/components/chatbot/AIChatbot';
import ScrollToTop from '@/components/layout/ScrollToTop';
import ScrollProgress from '@/components/layout/ScrollProgress';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden antialiased selection:bg-purple-500/30 selection:text-white">
      <ScrollProgress />
      <ScrollToTop />

      {/* Global Studio Design Shapes Backdrop (Vector Art Style instead of raw Video) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Soft Ambient Vector Glow Top Left */}
        <motion.div 
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.22, 0.15]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-600/20 to-transparent blur-[150px]" 
        />

        {/* Soft Ambient Vector Glow Right Center */}
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.18, 0.1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/3 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-cyan-500/15 to-transparent blur-[130px]" 
        />
        
        {/* Subtle Fine Grain Noise Texture Grid */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
      </div>

      {/* Persistent Technical Network Particle Canvas */}
      <NeuralNetwork />

      {/* Navigation Layer */}
      <Navbar />

      {/* Main Content Area with Route Swaps */}
      <main className="relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Premium Content Footer */}
      <Footer />

      {/* Persistent Interactivity Widgets */}
      <WhatsAppButton />
      <AIChatbot />
    </div>
  );
}