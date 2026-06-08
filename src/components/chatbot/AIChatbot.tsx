import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, MessageSquare, Sparkles } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const initialMessages: Message[] = [
  {
    role: 'assistant',
    content: "👋 Hi! I'm Nimrah's AI assistant. I can help you learn about her services, projects, experience, and answer any questions you have. Feel free to ask me anything!"
  }
];

const knowledgeBase = [
  {
    keywords: ['services', 'offer', 'do', 'provide'],
    response: "Nimrah offers four main services:\n\n🤖 **AI Chatbot Development** - Website chatbots, WhatsApp bots, customer support bots\n🧠 **AI Agents** - Task automation, research agents, business assistants\n⚡ **Automation** - CRM, email, lead automation & workflow systems\n💻 **Full Stack Development** - Next.js, React, Node.js, SaaS platforms\n\nWhich service are you interested in?"
  },
  {
    keywords: ['price', 'cost', 'pricing', 'package', 'hire', 'budget'],
    response: "Nimrah offers flexible pricing plans:\n\n**🚀 Starter - $2,999**\nPerfect for small businesses\n\n**💼 Business - $7,999** (Most Popular)\nComprehensive AI solutions\n\n**⭐ Professional - $14,999**\nEnterprise-grade solutions\n\n**🏢 Enterprise - Custom**\nTailored for large organizations\n\nWant to discuss a custom package? Let's connect!"
  },
  {
    keywords: ['contact', 'reach', 'email', 'call', 'message'],
    response: "You can reach Nimrah through:\n\n📧 **Email:** brainlinkai13@gmail.com\n💬 **WhatsApp:** +92 343 2817289 (or click the green chat button)\n📝 **Contact Form:** Fill out the form in the Contact section\n\nShe typically responds within 24 hours!"
  },
  {
    keywords: ['portfolio', 'project', 'work', 'demo', 'example'],
    response: "Nimrah has built projects including:\n\n🌟 **Neuraloft** - AI software & automation studio\n🌟 **Brain Link AI** - AI, Web3 & automation solutions\n🌟 **AI Chatbot Assistant** - GPT-powered business chatbot\n🌟 **PDF Chatbot** - Chat with your documents using RAG\n🌟 **WhatsApp Business Bot** - Automated WhatsApp support\n🌟 **AI Automation Dashboard** - Business workflow automation\n🌟 **SaaS Platform** - Subscription-based web app\n\nCheck out the Projects section for details!"
  },
  {
    keywords: ['experience', 'background', 'skills', 'expertise', 'technology', 'tech stack'],
    response: "Nimrah is a skilled AI Engineer & Full-Stack Developer with expertise in:\n\n**🤖 AI & ML:** OpenAI, LangChain, RAG systems, AI Agents, Prompt Engineering\n**⚛️ Frontend:** React, Next.js, TypeScript, Tailwind CSS, Framer Motion\n**🖥️ Backend:** Node.js, Express, REST APIs, Auth Systems\n**🗄️ Database:** MongoDB, PostgreSQL\n**⛓️ Web3:** Solidity, Web3.js, Ethers.js, Smart Contracts\n**☁️ DevOps:** Vercel, GitHub, AWS\n\nShe's a certified Agentic AI Engineer (PIAIC) and certified AI, Metaverse & Web3 Developer (GIAIC), and founder of Brain Link AI and Neuraloft."
  },
  {
    keywords: ['process', 'how it works', 'timeline', 'delivery', 'deadline'],
    response: "Here's how Nimrah works:\n\n1️⃣ **Discovery Call** - Understand your needs\n2️⃣ **Proposal** - Custom solution & timeline\n3️⃣ **Development** - Agile sprints with updates\n4️⃣ **Testing** - Rigorous QA & optimization\n5️⃣ **Deployment** - Production launch\n6️⃣ **Support** - Ongoing maintenance\n\nMost projects take 4-12 weeks depending on complexity."
  },
  {
    keywords: ['testimonial', 'review', 'client', 'feedback', 'rating'],
    response: "Nimrah works closely with startups, creators, and businesses to deliver AI chatbots, automation, and full-stack products.\n\nClient testimonials are being added to the site. In the meantime, you can review her work in the Projects section or reach out directly to discuss references.\n\nWant to talk about your project? Book a call or fill out the contact form!"
  },
  {
    keywords: ['freelance', 'available', 'availability', 'book', 'schedule'],
    response: "Yes, Nimrah is currently available for new projects! 🎉\n\nShe takes on:\n✅ Freelance/Contract projects\n✅ Full-time remote positions\n✅ Part-time consulting\n✅ Agency partnerships\n\n**Ready to discuss your project?** Book a discovery call or fill out the contact form!"
  }
];

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  
  // Check for greeting
  if (lower.match(/^(hi|hello|hey|greetings|sup|howdy)/)) {
    return "Hello! 👋 Thanks for reaching out! I'm Nimrah's AI assistant. How can I help you today? Feel free to ask about services, pricing, projects, or anything else!";
  }

  // Check knowledge base
  for (const item of knowledgeBase) {
    for (const keyword of item.keywords) {
      if (lower.includes(keyword)) {
        return item.response;
      }
    }
  }

  // Default response
  return "Great question! 🤔 I'd love to help you with that. However, for the most accurate and personalized information, I'd recommend:\n\n1️⃣ **Booking a discovery call** with Nimrah\n2️⃣ **Filling out the contact form** below\n3️⃣ **Checking the Services section** for detailed offerings\n\nOr you can ask me about: services, pricing, portfolio, experience, process, testimonials, or availability!";
}

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      const response = getResponse(input);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring' }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-110 transition-all duration-200"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageSquare className="w-6 h-6 text-white" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-6 z-40 w-[90vw] sm:w-96 h-[500px] max-h-[80vh]"
          >
            <div className="glass-card rounded-2xl overflow-hidden flex flex-col h-full">
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-600 to-cyan-500 p-4 flex items-center justify-between flex-shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-sm">AI Assistant</p>
                    <p className="text-white/70 text-xs flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Powered by Nimrah's knowledge
                    </p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                        msg.role === 'user'
                          ? 'bg-purple-600/30 text-white border border-purple-500/20'
                          : 'bg-white/5 text-muted border border-white/10'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
                    </div>
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-white/5 rounded-2xl px-4 py-3 border border-white/10">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t border-purple-500/10 flex-shrink-0">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask me anything..."
                    className="flex-1 bg-white/5 border border-purple-500/20 rounded-xl px-4 py-2.5 text-sm text-white placeholder-muted focus:outline-none focus:border-purple-500/50 transition-colors"
                  />
                  <button
                    onClick={handleSend}
                    disabled={!input.trim() || isTyping}
                    className="px-4 py-2.5 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-xl text-white disabled:opacity-50 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
