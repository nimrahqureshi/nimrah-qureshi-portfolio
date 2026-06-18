import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, MessageCircle, HelpCircle, Sparkles } from 'lucide-react';
import { FlabbyMonster, FlabbyMini, UserAvatar, SpeechBubble } from './FlabbyMonster';
import { knowledgeBase, quickActions, getGreeting}  from '@/data/chathknowledge';
interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
  options?: string[];
}

function getResponse(input: string): { content: string; options?: string[] } {
  const lower = input.toLowerCase().trim();

  const greeting = getGreeting(input);
  if (greeting) {
    return {
      content: greeting,
      options: ['Services', 'Pricing', 'Portfolio', 'Contact'],
    };
  }

  // Check quick actions and match clean normalized text profiles
  for (const action of quickActions) {
    const strippedAction = action.label.replace(/^[^A-Za-z0-9]+/, '').trim().toLowerCase();
    if (lower.includes(strippedAction)) {
      for (const item of knowledgeBase) {
        for (const kw of item.keywords) {
          if (strippedAction.includes(kw) || kw.includes(strippedAction)) {
            return {
              content: item.response,
              options: ['Get a quote', 'See portfolio', 'Book a call', 'Ask another question'],
            };
          }
        }
      }
    }
  }

  // Global Knowledge Base Keyword Matching
  for (const item of knowledgeBase) {
    for (const keyword of item.keywords) {
      if (lower.includes(keyword.toLowerCase())) {
        return {
          content: item.response,
          options: ['Get a quote', 'See portfolio', 'Book a call', 'Ask another question'],
        };
      }
    }
  }

  return {
    content:
      "Hmm, great question! 🤔\n\nI'm still learning. For the best answer, you could:\n\n1️⃣ Browse the sections above\n2️⃣ Book a discovery call with Nimrah\n3️⃣ Or try asking about: services, pricing, portfolio or experience!",
    options: ['Services', 'Pricing', 'Contact', 'Experience'],
  };
}

function getTime() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content:
        "Hey there! I'm Flabby 🐙 — your smart little assistant from Nimrah.\n\nAsk me anything, or tap a quick option below to get started!",
      timestamp: getTime(),
      options: ['Services', 'Pricing', 'Portfolio', 'Contact'],
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return;

    const userMessage: Message = {
      role: 'user',
      content: text,
      timestamp: getTime(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    setShowWelcome(false);

    const delay = 900 + Math.random() * 800;
    setTimeout(() => {
      const { content, options } = getResponse(text);
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content, timestamp: getTime(), options },
      ]);
      setIsTyping(false);
    }, delay);
  };

  const handleQuickAction = (label: string) => {
    const cleanLabel = label.replace(/^[^A-Za-z0-9]+/, '').trim();
    sendMessage(cleanLabel || label);
  };

  const handleOptionClick = (option: string) => {
    sendMessage(option);
  };

  const insertStarterPrompt = (text: string) => {
    setInput(text);
  };

  return (
    <>
      {/* Floating launcher button */}
      <motion.button
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 group"
        aria-label="Open chat"
      >
        <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#F2EFD9] via-[#E1E0CC] to-[#C8B68A] flex items-center justify-center shadow-2xl shadow-black/40 group-hover:scale-110 transition-all duration-300 border-2 border-[#E1E0CC]/40">
          {isOpen ? (
            <X className="w-7 h-7 text-black" strokeWidth={2.5} />
          ) : (
            <div className="relative">
              <MessageCircle className="w-7 h-7 text-black" strokeWidth={2.2} />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#C8B68A] rounded-full border-2 border-black animate-pulse" />
            </div>
          )}
        </div>

        {/* Floating Flabby hint */}
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute -top-2 -left-44 hidden sm:block"
          >
            <div className="flex items-center gap-2 bg-[#0a0a0a]/95 backdrop-blur-xl rounded-full shadow-xl border border-[#E1E0CC]/20 px-3 py-2">
              <div className="w-8 h-8 -ml-1">
                <FlabbyMini size={32} />
              </div>
              <span className="text-xs font-semibold text-[#E1E0CC] whitespace-nowrap">
                Need help?
              </span>
            </div>
          </motion.div>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: 'spring', stiffness: 250, damping: 25 }}
            className="fixed bottom-28 right-6 z-40 w-[92vw] sm:w-[420px] h-[600px] max-h-[82vh]"
          >
            <div className="relative w-full h-full bg-[#0a0a0a]/95 backdrop-blur-2xl rounded-3xl shadow-2xl shadow-black/60 overflow-hidden border border-[#E1E0CC]/15 flex flex-col">
              {/* Decorative ambient orbs */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#E1E0CC]/10 rounded-full blur-3xl -translate-y-10 translate-x-10 pointer-events-none" />
              <div className="absolute bottom-20 left-0 w-32 h-32 bg-[#C8B68A]/10 rounded-full blur-3xl translate-y-10 -translate-x-10 pointer-events-none" />

              {/* HEADER */}
              <div className="relative px-5 pt-5 pb-4 border-b border-[#E1E0CC]/10 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0a0a0a]">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="relative flex-shrink-0">
                      <FlabbyMonster size={64} waving />
                      <span className="absolute bottom-1 right-1 w-4 h-4 bg-[#C8B68A] rounded-full border-2 border-[#0a0a0a]" />
                    </div>
                    <div className="pt-1">
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-[#E1E0CC] font-bold text-base leading-tight">
                          Flabby
                        </h3>
                        <Sparkles className="w-3.5 h-3.5 text-[#C8B68A]" />
                      </div>
                      <p className="text-[#E1E0CC]/50 text-xs mt-0.5">
                        Nimrah's AI assistant
                      </p>
                      <div className="flex items-center gap-1.5 mt-1.5">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8B68A] opacity-75" />
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E1E0CC]" />
                        </span>
                        <span className="text-[11px] text-[#E1E0CC]/60 font-medium">
                          Online • Replies instantly
                        </span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-full hover:bg-[#E1E0CC]/10 flex items-center justify-center text-[#E1E0CC]/50 hover:text-[#E1E0CC] transition-colors"
                    aria-label="Close chat"
                  >
                    <X className="w-4 h-4" strokeWidth={2.2} />
                  </button>
                </div>

                {/* Quick actions row */}
                <div 
                  className="mt-4 flex gap-2 overflow-x-auto pb-1 -mx-1 px-1"
                  style={{ maskImage: 'linear-gradient(to right, transparent, white 4px, white 95%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, white 4px, white 95%, transparent)', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                >
                  <style>{`.overflow-x-auto::-webkit-scrollbar { display: none; }`}</style>
                  {quickActions.map((action) => (
                    <button
                      key={action.label}
                      onClick={() => handleQuickAction(action.label)}
                      className="flex-shrink-0 text-xs font-semibold px-3.5 py-1.5 bg-[#E1E0CC]/5 border border-[#E1E0CC]/15 text-[#E1E0CC] rounded-full hover:border-[#E1E0CC]/40 hover:text-[#0a0a0a] hover:bg-[#E1E0CC] transition-all"
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* MESSAGES LAYER */}
              <div className="flex-1 overflow-y-auto px-4 py-5 space-y-4 bg-gradient-to-b from-[#0a0a0a] to-[#111]/80">
                <AnimatePresence>
                  {showWelcome && messages.length <= 1 && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex justify-center -mt-1 mb-1"
                    >
                      <SpeechBubble text="What's up? 👋" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`flex gap-2 max-w-[85%] ${
                        msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'
                      }`}
                    >
                      <div className={`flex-shrink-0 ${msg.role === 'user' ? 'w-8 h-8' : 'w-9 h-9'}`}>
                        {msg.role === 'user' ? (
                          <UserAvatar size={32} />
                        ) : (
                          <FlabbyMini size={36} />
                        )}
                      </div>

                      <div className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                        <div
                          className={`relative rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
                            msg.role === 'user'
                              ? 'bg-gradient-to-br from-[#E1E0CC] to-[#C8B68A] text-[#0a0a0a] rounded-tr-sm font-medium'
                              : 'bg-[#E1E0CC]/5 text-[#E1E0CC]/90 border border-[#E1E0CC]/15 rounded-tl-sm backdrop-blur-md'
                          }`}
                        >
                          <p className="whitespace-pre-wrap">{msg.content}</p>

                          {msg.options && msg.options.length > 0 && msg.role === 'assistant' && (
                            <div className="mt-3 pt-3 border-t border-[#E1E0CC]/10 flex flex-wrap gap-1.5">
                              {msg.options.map((opt, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => handleOptionClick(opt)}
                                  className="text-xs font-semibold px-3 py-1.5 bg-[#E1E0CC]/10 text-[#E1E0CC] border border-[#E1E0CC]/20 rounded-full hover:bg-[#E1E0CC] hover:text-[#0a0a0a] hover:border-[#E1E0CC] transition-colors"
                                >
                                  {opt}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                        <span className="text-[10px] text-[#E1E0CC]/40 mt-1 px-1 font-medium">
                          {msg.timestamp}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Typing status bar indicator */}
                <AnimatePresence>
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex gap-2 items-end max-w-[85%]">
                        <div className="w-9 h-9 flex-shrink-0">
                          <FlabbyMini size={36} />
                        </div>
                        <div className="bg-[#E1E0CC]/5 border border-[#E1E0CC]/15 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm backdrop-blur-md">
                          <div className="flex items-center gap-1.5">
                            <span
                              className="w-2 h-2 bg-[#E1E0CC] rounded-full animate-bounce"
                              style={{ animationDelay: '0ms' }}
                            />
                            <span
                              className="w-2 h-2 bg-[#E1E0CC] rounded-full animate-bounce"
                              style={{ animationDelay: '150ms' }}
                            />
                            <span
                              className="w-2 h-2 bg-[#E1E0CC] rounded-full animate-bounce"
                              style={{ animationDelay: '300ms' }}
                            />
                            <span className="text-xs text-[#E1E0CC]/50 ml-2 font-medium">
                              Flabby is typing…
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div ref={messagesEndRef} />
              </div>

              {/* ACTION FOOTER INPUT AREA */}
              <div className="relative px-4 py-3 border-t border-[#E1E0CC]/10 bg-[#0a0a0a]/80">
                <div className="flex items-center gap-2 bg-[#E1E0CC]/5 border border-[#E1E0CC]/15 rounded-2xl px-3 py-2 focus-within:border-[#E1E0CC]/50 focus-within:bg-[#E1E0CC]/10 focus-within:ring-4 focus-within:ring-[#E1E0CC]/5 transition-all">
                  <button
                    onClick={() => insertStarterPrompt('What services do you offer?')}
                    className="w-8 h-8 flex-shrink-0 rounded-xl hover:bg-[#E1E0CC]/10 text-[#E1E0CC]/40 hover:text-[#E1E0CC] flex items-center justify-center transition-colors"
                    aria-label="Help"
                    title="Quick help"
                  >
                    <HelpCircle className="w-5 h-5" />
                  </button>

                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
                    placeholder="Type your message..."
                    className="flex-1 bg-transparent text-sm text-[#E1E0CC] placeholder-[#E1E0CC]/30 focus:outline-none font-medium"
                  />

                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={() => sendMessage(input)}
                    disabled={!input.trim() || isTyping}
                    className={`w-9 h-9 flex-shrink-0 rounded-xl flex items-center justify-center transition-all ${
                      input.trim() && !isTyping
                        ? 'bg-gradient-to-br from-[#E1E0CC] to-[#C8B68A] text-[#0a0a0a] shadow-lg shadow-[#C8B68A]/20'
                        : 'bg-[#E1E0CC]/10 text-[#E1E0CC]/30 cursor-not-allowed'
                    }`}
                    aria-label="Send"
                  >
                    <Send className="w-4 h-4" strokeWidth={2.2} />
                  </motion.button>
                </div>

                <p className="text-center text-[10px] text-[#E1E0CC]/40 mt-2 font-medium">
                  Powered by Nimrah • Press{' '}
                  <kbd className="px-1 py-0.5 bg-[#E1E0CC]/10 rounded border border-[#E1E0CC]/15 text-[#E1E0CC]/60">
                    Enter
                  </kbd>{' '}
                  to send
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}