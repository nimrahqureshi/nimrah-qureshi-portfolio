export interface ChatOption {
  label: string;
  keywords: string[];
}

export interface KnowledgeItem {
  keywords: string[];
  response: string;
}

export const quickActions: ChatOption[] = [
  { label: '💬 Services', keywords: ['services', 'offer', 'do', 'provide'] },
  { label: '💰 Pricing', keywords: ['price', 'cost', 'pricing', 'package'] },
  { label: '📁 Portfolio', keywords: ['portfolio', 'project', 'work', 'demo'] },
  { label: '🧠 Experience', keywords: ['experience', 'skills', 'expertise'] },
  { label: '📞 Contact', keywords: ['contact', 'reach', 'email', 'call'] },
];

export const knowledgeBase: KnowledgeItem[] = [
  {
    keywords: ['services', 'offer', 'provide', 'what do you do', 'what can you do'],
    response:
      "Nimrah offers four main services:\n\n🤖 AI Chatbot Development — website chatbots, WhatsApp bots, GPT support bots\n🧠 AI Agents — research, task & business automation agents\n⚡ Automation Systems — CRM, email & workflow pipelines\n💻 Full-Stack Development — Next.js, React, Node.js, SaaS\n\nWhich one interests you?",
  },
  {
    keywords: ['whatsapp', 'automation', 'crm', 'lead', 'langchain', 'rag'],
    response:
      "Nimrah builds end-to-end automation:\n\n• WhatsApp AI Chatbots\n• OpenAI Assistants\n• Lead Generation Automation\n• CRM Automation\n• LangChain Agents\n• RAG Chatbots (chat with your docs)\n• Customer Support Bots\n• AI SaaS Products\n\nWant one for your business?",
  },
  {
    keywords: ['price', 'cost', 'pricing', 'package', 'hire', 'budget', 'rate', 'fee'],
    response:
      "Flexible pricing plans:\n\n🚀 Starter — $2,999\n💼 Business — $7,999 (most popular)\n⭐ Professional — $14,999\n🏢 Enterprise — Custom\n\nWant a tailored quote for your idea?",
  },
  {
    keywords: ['contact', 'reach', 'email', 'call', 'message', 'talk', 'phone', 'mail'],
    response:
      "Let's connect 👇\n\n📧 brainlinkai13@gmail.com\n💬 WhatsApp: +92 343 2817289\n📝 Contact form on the site\n\nTypical reply: within 24h ⏱️",
  },
  {
    keywords: ['portfolio', 'project', 'work', 'demo', 'example', 'case', 'showcase'],
    response:
      "Recent projects:\n\n🌟 Neuraloft — AI software studio\n🌟 Brain Link AI — AI, Web3 & automation\n🌟 PDF Chatbot (RAG) — chat with documents\n🌟 WhatsApp Business Bot — automated support\n🌟 AI Automation Dashboard\n🌟 SaaS Platforms\n\nCheck the Projects section for the full showcase!",
  },
  {
    keywords: ['experience', 'background', 'skills', 'expertise', 'technology', 'stack', 'tech', 'piaic', 'giaic'],
    response:
      "Nimrah's superpowers:\n\n🤖 AI/ML — OpenAI, LangChain, RAG, Agents, Prompt Engineering\n⚛️ Frontend — React, Next.js, TypeScript, Tailwind, Framer Motion\n🖥️ Backend — Node.js, Express, REST APIs\n🗄️ Database — MongoDB, PostgreSQL\n⛓️ Web3 — Solidity, Ethers.js, Smart Contracts\n☁️ DevOps — Vercel, GitHub, AWS\n\n🏆 Certified Agentic AI Engineer (PIAIC)\n🏆 Certified AI, Metaverse & Web3 Developer (GIAIC)\n👩‍💼 Founder of Brain Link AI & Neuraloft",
  },
  {
    keywords: ['process', 'how', 'timeline', 'delivery', 'deadline', 'workflow', 'steps'],
    response:
      "A simple 6-step process:\n\n1️⃣ Discovery call\n2️⃣ Proposal & plan\n3️⃣ Agile development\n4️⃣ Testing & QA\n5️⃣ Launch & deploy\n6️⃣ Ongoing support\n\nTypical timeline: 4–12 weeks 📅",
  },
  {
    keywords: ['available', 'availability', 'book', 'schedule', 'freelance', 'free', 'consulting'],
    response:
      "Yes! Currently taking on new projects 🎉\n\n✅ Freelance / contract\n✅ Full-time remote\n✅ Part-time consulting\n✅ Agency partnerships\n\nLet's talk about your idea!",
  },
  {
    keywords: ['upwork', 'freelancer', 'profile', 'rating', 'satisfaction'],
    response:
      "⭐ Upwork AI Chatbot Developer\n\n✔ 50+ Projects Completed\n✔ 100% Client Satisfaction\n✔ AI Automation Specialist\n✔ OpenAI & LangChain Expert\n✔ 30+ Hours Available Weekly\n\nYou can view Nimrah's portfolio projects and reach out for collaboration.",
  },
  {
    keywords: ['chatbot', 'bot', 'ai chat', 'like you', 'gpt', 'smart'],
    response:
      "I'm a friendly rule-based assistant 🤖, but Nimrah builds way smarter ones!\n\nShe creates:\n• GPT-powered business chatbots\n• WhatsApp & website bots\n• Document chatbots (RAG)\n• Custom AI agents\n\nWant one for your business?",
  },
  {
    keywords: ['testimonial', 'review', 'client', 'feedback', 'opinion'],
    response:
      "Nimrah works closely with startups, creators, and businesses to deliver AI chatbots, automation and full-stack products.\n\nClient testimonials are being curated — in the meantime, check the Projects section or reach out directly for references.",
  },
];

export function getGreeting(input: string): string | null {
  const lower = input.toLowerCase().trim();
  
  if (lower.match(/\b(hi|hello|hey|greetings|sup|howdy|salam|assalam|yo)\b/)) {
    return "Hello there! 👋 I'm Flabby, Nimrah's friendly AI assistant.\n\nI can tell you about services, pricing, projects and more. What would you like to know?";
  }
  if (lower.match(/\b(thank|thanks|thx|appreciate|grateful)\b/)) {
    return "You're so welcome! 😊 Happy to help. Let me know if you have more questions — I'm here all day!";
  }
  if (lower.match(/\b(bye|goodbye|see you|later|cya|exit|quit)\b/)) {
    return "Bye bye! 👋 It was nice chatting. Come back anytime — I'll be right here.\n\n~ Flabby 💛";
  }
  return null;
}