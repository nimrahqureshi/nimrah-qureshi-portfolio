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
  // --- Personality & Conversational Flow Entries ---
  {
    keywords: ['who is nimrah', 'about nimrah'],
    response:
      "👩‍💻 Nimrah Qureshi is an AI Chatbot Developer and Full Stack Developer specializing in OpenAI, LangChain, AI Agents, Automation Systems, WhatsApp Bots and modern web applications. She helps businesses automate workflows and improve customer engagement."
  },
  {
    keywords: ['social', 'linkedin', 'github'],
    response:
      "🔗 You can connect with Nimrah through the social links available on the website. Feel free to explore her portfolio, projects and professional profiles."
  },
  {
    keywords: ['friend', 'best friend', 'buddy'],
    response:
      "😊 Of course! We can be friends. I'm Flabby, your friendly AI buddy. What's on your mind today?"
  },
  {
    keywords: ['nickname', 'call me'],
    response:
      "✨ I'd love a nickname! Tell me what you'd like me to call you, and I'll use it during our chat."
  },
  {
    keywords: ['bored', 'lonely', 'sad'],
    response:
      "💛 I'm here with you. Want to talk about your day, your goals, AI projects, or anything else?"
  },
  {
    keywords: ['nothing', 'dont know'],
    response:
      "😊 No worries! We can talk about AI, websites, chatbots, automation, your business idea, or just have a friendly chat."
  },

  // --- Services, Platforms & Technical Background ---
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
    keywords: ['openai', 'langchain', 'agent', 'agentic ai'],
    response:
      "🤖 AI Expertise\n\n• OpenAI GPT Integration\n• LangChain Development\n• AI Agents\n• Multi-Agent Systems\n• RAG Applications\n• Prompt Engineering\n• Vector Databases\n• AI Automation Workflows\n\nNeed an AI solution for your business?"
  },
  {
    keywords: ['website', 'web development', 'react', 'nextjs'],
    response:
      "💻 Web Development Services\n\n✅ React.js\n✅ Next.js\n✅ TypeScript\n✅ Tailwind CSS\n✅ Framer Motion\n✅ Node.js\n✅ Express.js\n✅ MongoDB\n\nFrom landing pages to complete SaaS platforms."
  },

  // --- Education & Professional Credentials ---
  {
    keywords: ['education', 'study', 'degree', 'college'],
    response:
      "🎓 Education\n\nAssociate Degree (AA)\nGovt College for Women Shahrah-e-Liaquat, Karachi\n2021 - 2022\n\nContinuously learning AI, Automation, Agentic AI and modern web technologies."
  },
  {
    keywords: ['certificate', 'certification', 'certified', 'piaic', 'giaic', 'experience', 'background', 'skills', 'expertise', 'technology', 'stack', 'tech'],
    response:
      "🏆 Certifications & Skills\n\n✅ Certified Agentic AI Engineer (PIAIC)\n✅ Certified AI, Metaverse & Web3 Developer (GIAIC)\n\nNimrah's Superpowers:\n🤖 AI/ML — OpenAI, LangChain, RAG, Agents, Prompt Engineering\n⚛️ Frontend — React, Next.js, TypeScript, Tailwind, Framer Motion\n🖥️ Backend — Node.js, Express, REST APIs\n🗄️ Database — MongoDB, PostgreSQL\n⛓️ Web3 — Solidity, Ethers.js\n☁️ DevOps — Vercel, GitHub, AWS"
  },

  // --- Portfolio & Brands ---
  {
    keywords: ['portfolio', 'project', 'work', 'demo', 'example', 'case', 'showcase'],
    response:
      "Recent projects:\n\n🌟 Neuraloft — AI software studio\n🌟 Brain Link AI — AI, Web3 & automation\n🌟 PDF Chatbot (RAG) — chat with documents\n🌟 WhatsApp Business Bot — automated support\n🌟 AI Automation Dashboard\n🌟 SaaS Platforms\n\nCheck the Projects section for the full showcase!",
  },
  {
    keywords: ['founder', 'company', 'brain link ai', 'neuraloft', 'brainlink'],
    response:
      "🚀 Founder & Builder\n\nNimrah is the founder of:\n\n🌟 Brain Link AI\n🌟 Neuraloft\n\nFocused on AI automation, chatbot solutions, SaaS products and business growth through technology."
  },
  {
    keywords: ['resume', 'cv', 'profile'],
    response:
      "📄 Professional Profile\n\nAI Chatbot Developer\nOpenAI & LangChain Specialist\nFull Stack Developer\nAutomation Expert\nFounder of Brain Link AI & Neuraloft\n\nYou can explore the portfolio, projects and case studies throughout the website."
  },

  // --- Business Workflow, Timeline & Hiring ---
  {
    keywords: ['price', 'cost', 'pricing', 'package', 'budget', 'rate', 'fee'],
    response:
      "Flexible pricing plans:\n\n🚀 Starter — $2,999\n💼 Business — $7,999 (most popular)\n⭐ Professional — $14,999\n🏢 Enterprise — Custom\n\nWant a tailored quote for your idea?",
  },
  {
    keywords: ['process', 'how', 'timeline', 'delivery', 'deadline', 'workflow', 'steps'],
    response:
      "A simple 6-step process:\n\n1️⃣ Discovery call\n2️⃣ Proposal & plan\n3️⃣ Agile development\n4️⃣ Testing & QA\n5️⃣ Launch & deploy\n6️⃣ Ongoing support\n\nTypical timeline: 4–12 weeks 📅",
  },
  {
    keywords: ['location', 'where', 'karachi', 'pakistan'],
    response:
      "📍 Location\n\nKarachi, Pakistan 🇵🇰\n\nAvailable for remote projects worldwide.\n\nFlexible with international clients and time zones."
  },
  {
    keywords: ['available', 'availability', 'hours', 'weekly', 'book', 'schedule', 'freelance', 'free', 'consulting'],
    response:
      "Yes! Currently taking on new projects 🎉\n\n✔ Available 30+ hours/week\n✔ Freelance / contract work\n✔ Full-time remote / Long-Term Collaboration\n✔ Agency partnerships\n\nLet's talk about your idea!",
  },
  {
    keywords: ['upwork', 'freelancer', 'rating', 'satisfaction', 'why hire', 'why nimrah', 'choose you'],
    response:
      "⭐ Why Work With Nimrah?\n\n✔ Upwork AI Chatbot Developer\n✔ 50+ Projects Completed with 100% Client Satisfaction\n✔ OpenAI & LangChain Specialist\n✔ Fast Communication & Business-Focused Solutions\n\nThe goal isn't just code — it's delivering high-impact business results.",
  },

  // --- Intent & Lead Capture Pipelines ---
  {
    keywords: ['my project', 'need chatbot', 'need website', 'need ai', 'start project', 'hire you', 'work together'],
    response:
      "Awesome! 🚀\n\nTo help recommend the perfect solution, tell me:\n\n• What business are you in?\n• What problem are you trying to solve?\n• Do you need a chatbot, automation, website, or AI agent?\n• What's your timeline and budget range?\n\nI'll help you organize everything to get started!"
  },
  {
    keywords: ['contact', 'reach', 'email', 'call', 'message', 'talk', 'phone', 'mail'],
    response:
      "Let's connect 👇\n\n📧 nimrahqueshi013@gmail.com\n💬 WhatsApp: +92 3445495438\n📝 Contact form on the site\n\nTypical reply: within 24h ⏱️",
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
  
  if (lower.match(/\b(how are you|how r you|how you doing)\b/)) {
    return "I'm doing wonderful today! 😊 Thanks for asking. How are you doing? Hope you're having an amazing day! ✨";
  }

  if (lower.match(/\b(i am fine|im fine|good|great|excellent|awesome|amazing|fantastic)\b/)) {
    return "That's wonderful to hear! 🌟 I love positive energy. How can I help you today?";
  }

  if (lower.match(/\b(nice|nice name|cute|lovely)\b/)) {
    return "Aww thank you! 😊 My name is Flabby and I'm Nimrah's friendly AI assistant. It's nice meeting you too! 💛";
  }

  if (lower.match(/\b(who are you|your name|what is your name)\b/)) {
    return "I'm Flabby 🤖✨ Nimrah's AI assistant. I'm here to help you learn about her AI services, projects, automation solutions and answer your questions.";
  }

  if (lower.match(/\b(you are beautiful|pretty|cute bot)\b/)) {
    return "Aww, that's sweet of you! 😊 Thank you. I'm just a friendly little AI helper trying my best. 💛";
  }

  if (lower.match(/\b(good morning)\b/)) {
    return "Good morning! ☀️ Wishing you a productive and successful day ahead. How can I help you?";
  }

  if (lower.match(/\b(good afternoon)\b/)) {
    return "Good afternoon! 🌸 Hope your day is going great. What would you like to know?";
  }

  if (lower.match(/\b(good evening)\b/)) {
    return "Good evening! ✨ Glad you're here. How can I assist you today?";
  }

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

// Random fallback responder system
const friendlyReplies = [
  "😊 Tell me more!",
  "✨ That sounds interesting.",
  "💛 I'd love to hear more about that.",
  "🚀 What's your goal with that?",
  "🌟 That's a great question.",
];

export function getFallbackResponse(): string {
  const randomIntro = friendlyReplies[Math.floor(Math.random() * friendlyReplies.length)];
  
  return `${randomIntro}\n\nI'm not sure about that specific detail yet, but I can help with:\n🤖 AI Chatbots\n💻 Websites & Next.js\n⚡ Workflows & Automation\n📁 Portfolio & Experiences\n🏆 Certifications\n💰 Pricing & Packages\n📞 Contact Profiles\n📄 Professional Profiles\n\nOr tell me about your project idea and I'll guide you directly! 😊`;
}
