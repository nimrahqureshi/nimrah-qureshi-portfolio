import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import NeuralNetwork from '@/components/effects/NeuralNetwork';
import WhatsAppButton from '@/components/whatsapp/WhatsAppButton';
import AIChatbot from '@/components/chatbot/AIChatbot';
import ScrollToTop from '@/components/layout/ScrollToTop';
import ScrollProgress from '@/components/layout/ScrollProgress';

/**
 * App shell shared by every route. Renders the persistent chrome
 * (background, navbar, footer, floating buttons) once and swaps the
 * routed page through <Outlet/> with a smooth fade transition.
 */
export default function Layout() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-bg-primary text-white overflow-x-hidden">
      <ScrollProgress />
      <ScrollToTop />

      {/* Global animated background */}
      <NeuralNetwork />

      <Navbar />

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

      <Footer />

      {/* Floating elements persist across routes */}
      <WhatsAppButton />
      <AIChatbot />
    </div>
  );
}
