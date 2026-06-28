import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { X } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const message = encodeURIComponent(
    'Hi Nimrah, I visited your portfolio and would like to discuss my project.'
  );
  const phoneNumber = '923432817289'; // Nimrah Qureshi WhatsApp

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/20 hover:shadow-xl hover:shadow-green-500/30 hover:scale-110 transition-all duration-200"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <FaWhatsapp className="w-7 h-7 text-white" />
        )}
      </motion.button>

      {/* Quick Message Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-40 right-6 z-40 w-80"
          >
            {/* Ambient Glassmorphism Container */}
            <div className="absolute inset-0 bg-neutral-950/95 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              {/* Geometric Background Accents */}
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-green-500/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
              
              <div className="flex flex-col h-full relative z-10 backdrop-blur-xl">
                {/* Header */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-4 flex items-center justify-between flex-shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <FaWhatsapp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">Nimrah Qureshi</p>
                      <p className="text-white/70 text-xs">Typically replies within 1 hour</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Body Content */}
                <div className="p-4">
                  <div className="bg-green-500/10 rounded-xl p-3 mb-3 border border-green-500/20">
                    <p className="text-sm text-gray-200 leading-relaxed">
                      👋 Hi! How can I help you with your project?
                    </p>
                  </div>
                  <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                    Start a conversation on WhatsApp. I'll respond promptly!
                  </p>
                  <a
                    href={`https://wa.me/${phoneNumber}?text=${message}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-green-500/25 hover:scale-[1.02] transition-all duration-200"
                  >
                    <FaWhatsapp className="w-4 h-4" />
                    Start Chat
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
