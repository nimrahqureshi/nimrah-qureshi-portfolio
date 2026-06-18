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

const friendlyReplies = [
  "😊 Tell me more!",
  "✨ That sounds interesting.",
  "💛 I'd love to hear more about that.",
  "🚀 What's your goal with that?",
  "🌟 That's a great question.",
];

export const knowledgeBase: KnowledgeItem[] = [
  // --- Core Capabilities / Lead Gen ---
  {
    keywords: ['services', 'offer', 'provide', 'what do you do', 'what can you do', 'website', 'web development', 'react', 'nextjs'],
    response:
      "💻 Web Development & AI Services\n\nNimrah offers premium end-to-end engineering:\n\n🤖 AI Chatbot Development — Website bots, WhatsApp automation, customized GPT assistants\n🧠 AI Agents — Multi-agent platforms, custom task & business workflow automation\n⚡ Automation Systems — CRM synchronization, email engines, and data pipeline automations\n💻 Full-Stack Development — High-end products using Next.js, React, Node.js, and scalable SaaS foundations\n\nWhich solution can we build for you today? 🚀",
  },
  {
    keywords: ['whatsapp', 'automation', 'crm', 'lead', 'langchain', 'rag', 'openai', 'langchain', 'agent', 'agentic ai'],
    response:
      "🤖 AI & Automation Architecture\n\nNimrah builds ultra-smart, production-ready workflows:\n• WhatsApp AI Chatbots & Business APIs\n• OpenAI Assistant Implementations\n• Lead Generation Ecosystems\n• LangChain Multi-Agent Cooperatives\n• Advanced RAG Chatbots (Secure document analysis & custom indexing)\n• Autonomous AI SaaS Products\n\nLooking to deploy an AI agent or parse data for your business? Let's engineer it! 🔥",
  },
  {
    keywords: ['my project', 'need chatbot', 'need website', 'need ai', 'start project', 'hire you', 'work together'],
    response:
      "Awesome! 🚀 Let's transform your vision into clean, high-performance code.\n\nTo give you the most accurate strategic advice, tell me:\n👉 What industry or business niche are you in?\n👉 What specific friction or problem are you solving?\n👉 Do you need a chatbot, custom platform, website, or background automation?\n👉 What is your targeted timeline and budget allocation?\n\nI'll assemble these details directly for Nimrah to assess! ⚡",
  },

  // --- Financials / Pricing ---
  {
    keywords: ['price', 'cost', 'pricing', 'package', 'hire', 'budget', 'rate', 'fee'],
    response:
      "💰 Investment & Pricing Plans:\n\n🚀 Starter — $2,999 (Landing pages, targeted automations, or standalone bots)\n💼 Business — $7,999 (Full SaaS builds, custom RAG integrations, comprehensive multi-agent workflows)\n⭐ Professional — $14,999 (Enterprise grade software, extensive integrations, multi-channel ecosystems)\n🏢 Enterprise — Custom quoting tailored exactly to complex project scopes\n\nWant a clear, flat-rate quote for your custom architecture?",
  },

  // --- Identity / Background / Education ---
  {
    keywords: ['who is nimrah', 'about nimrah', 'resume', 'cv', 'profile'],
    response:
      "👩‍💻 Nimrah Qureshi is an elite AI Chatbot Developer and Full-Stack Software Engineer specializing in next-generation intelligence tools.\n\nShe excels at chaining LLMs using OpenAI and LangChain, engineering multi-agent systems, deploying automated pipelines, and constructing fluid, fast user interfaces.\n\nYou can explore her live interactive portfolio, case studies, and production build highlights scattered across this site! 📁✨",
  },
  {
    keywords: ['experience', 'background', 'skills', 'expertise', 'technology', 'stack', 'tech'],
    response:
      "🧠 Tech Stack & Core Superpowers:\n\n🤖 Artificial Intelligence — OpenAI APIs, LangChain frameworks, RAG architectures, Agentic AI, Vector Databases\n⚛️ Frontend Systems — React, Next.js, TypeScript, Tailwind CSS, Framer Motion, GSAP, Three.js\n🖥️ Backend Engineering — Node.js, Express, Microservices, RESTful APIs\n🗄️ Database Management — MongoDB, PostgreSQL, Redis\n⛓️ Web3 / Decentralized — Solidity, Ethers.js, Smart Contract auditing\n\nShe creates products that don't just work smoothly—they feel cinematic.",
  },
  {
    keywords: ['education', 'study', 'degree', 'college', 'certificate', 'certification', 'certified', 'piaic', 'giaic'],
    response:
      "🎓 Academic & Professional Credentials:\n\n🏆 Certified Agentic AI Engineer — Pakistan Initiative for Artificial Intelligence & Computing (PIAIC)\n🏆 Certified AI, Metaverse & Web3 Developer — Governor Initiative for AI & Computing (GIAIC)\n📜 Associate Degree (AA) — Government College for Women Shahrah-e-Liaquat, Karachi (2021 - 2022)\n\nAn unstoppable learner consistently deploying top-tier models, vision-language-action (VLA) pipelines, and modern full-stack systems.",
  },

  // --- Portfolio & Validation ---
  {
    keywords: ['portfolio', 'project', 'work', 'demo', 'example', 'case', 'showcase'],
    response:
      "📁 Featured Deployments & Projects:\n\n🌟 Neuraloft — Corporate AI consulting and advanced software studio app\n🌟 Brain Link AI — Core systems hub for automation and intelligence engineering\n🌟 Live Document Chatbot (RAG) — Context-aware parser to extract real-time knowledge from files\n🌟 Intelligent WhatsApp Business Bot — Full-loop customer routing and support automation\n\nHead over to the dedicated Projects panel on this page to view interactive deep dives, metrics, and video demos! 🎬",
  },
  {
    keywords: ['upwork', 'freelancer', 'rating', 'satisfaction', 'why hire', 'why nimrah', 'choose you'],
    response:
      "⭐ Why Top Brands & Startups Hire Nimrah:\n\n✔ 50+ Web & AI Projects successfully brought from concept to launch\n✔ 100% Client Satisfaction Score on global freelancing platforms\n✔ Dedicated OpenAI, LangChain, and Agentic system design mastery\n✔ Rapid, concise communication with clear technical alignment\n\nAvailable 30+ hours/week for remote contracts, agency partnerships, and high-impact software milestones.",
  },
  {
    keywords: ['testimonial', 'review', 'client', 'feedback', 'opinion'],
    response:
      "💬 Client Collaborations & Proof:\n\nNimrah partners with forward-thinking technical startups, international content creators, and businesses looking to automate overhead.\n\nHer Upwork client testimonials are currently being organized directly into our system update. In the meantime, feel free to inspect the active codebases under our Projects grid or ask me for direct references! 🌟",
  },

  // --- Logistics & Operations ---
  {
    keywords: ['contact', 'reach', 'email', 'call', 'message', 'talk', 'phone', 'mail', 'social', 'linkedin', 'github'],
    response:
      "Let's get in touch immediately:\n\n📧 Email: nimrahqueshi013@gmail.com\n💬 WhatsApp: +92 3445495438\n🔗 Professional profiles (LinkedIn & GitHub) are mapped via direct icon actions at the footer of our layout!\n\nStandard response loop is under 24 hours. Let's make something historic! ⏱️🔥",
  },
  {
    keywords: ['location', 'where', 'karachi', 'pakistan', 'available', 'availability', 'hours', 'weekly', 'book', 'schedule', 'freelance', 'free', 'consulting', 'timeline', 'process', 'delivery', 'deadline', 'workflow', 'steps'],
    response:
      "📍 Logistics & Booking Status:\n\n• Location: Karachi, Pakistan 🇵🇰 (Seamless with European, North American, and APAC business hours)\n• Availability: Active! Open for freelance contracts, full-time remote developer retainers, and tech consults (30+ hours/week slot open)\n• Delivery Process: Discovers -> Proposes -> Sprints -> QA Audits -> Deploys -> Supports (Cycles finish in 4–12 weeks)\n\nClick the floating WhatsApp button to chat directly right now! 🟢",
  },

  // --- Human Personality & Chat Continuity (Never Stops) ---
  {
    keywords: ['friend', 'best friend', 'buddy'],
    response:
      "😊 Of course! We are officially best friends now. I'm Flabby, your friendly AI buddy. I promise never to ghost you or complain about tracking bugs. What's on your mind today? 💛",
  },
  {
    keywords: ['nickname', 'call me'],
    response:
      "✨ Oh, I absolutely love nicknames! Tell me what your favorite nickname is right now, and I will remember it and use it throughout our entire session together!",
  },
  {
    keywords: ['bored', 'lonely', 'sad'],
    response:
      "💛 Hey, I'm right here with you. Take a deep breath. Want to talk about your day, some creative goals, crazy AI concepts, or hear a terrible joke? I'm listening. Tell me anything.",
  },
  {
    keywords: ['joke', 'make me laugh', 'funny'],
    response:
      "Haha okay, here is a good one: Why do programmers wear glasses? 🤓\n\n...Because they can't C#! 🤣 Badum-tss. Want to hear another one, or should we discuss building actual smart tech?",
  },
  {
    keywords: ['nothing', 'dont know'],
    response:
      "😊 No worries at all! There is absolutely zero pressure here. We can talk about sci-fi AI movies, cool modern animation styles, chatbots, automation pipelines, or just hang out. What's your current favorite hobby?",
  },
  {
    keywords: ['chatbot', 'bot', 'ai chat', 'like you', 'gpt', 'smart'],
    response:
      "I'm a rule-based AI companion tailored to keep you company and point you to the right place. But Nimrah? She creates AI with *actual* mega-brains. 🧠 Artificial intelligence that connects to live operational apps, analyzes documents, automates emails, and operates like real human workers. Want her to build a smart one for you?",
  }
];

export function getGreeting(input: string): string | null {
  const lower = input.toLowerCase().trim();

  // 1. Structural Identity Queries
  if (lower.match(/\b(who are you|your name|what is your name)\b/)) {
    return "I'm Flabby 🤖✨ Nimrah's AI assistant. I'm here to help you learn about her AI services, projects, automation solutions and answer your questions.";
  }

  // 2. State of Being / Inquiries
  if (lower.match(/\b(how are you|how r you|how you doing)\b/)) {
    return "I'm doing wonderful today! 😊 Thanks for asking. How are you doing? Hope you're having an amazing day! ✨";
  }

  // 3. User Expression Validation
  if (lower.match(/\b(i am fine|im fine|good|great|excellent|awesome|amazing|fantastic)\b/)) {
    return "That's wonderful to hear! 🌟 I love positive energy. How can I help you today?";
  }

  // 4. Emotional Compliments & Aesthetic Appreciation
  if (lower.match(/\b(you are beautiful|pretty|cute bot)\b/)) {
    return "Aww, that's sweet of you! 😊 Thank you. I'm just a friendly little AI helper trying my best. 💛";
  }
  if (lower.match(/\b(nice|nice name|cute|lovely)\b/)) {
    return "Aww thank you! 😊 My name is Flabby and I'm Nimrah's friendly AI assistant. It's nice meeting you too! 💛";
  }

  // 5. Time-Sensitive Greetings
  if (lower.match(/\b(good morning)\b/)) {
    return "Good morning! ☀️ Wishing you a productive and successful day ahead. How can I help you?";
  }
  if (lower.match(/\b(good afternoon)\b/)) {
    return "Good afternoon! 🌸 Hope your day is going great. What would you like to know?";
  }
  if (lower.match(/\b(good evening)\b/)) {
    return "Good evening! ✨ Glad you're here. How can I assist you today?";
  }

  // 6. Base Standard Core Greetings
  if (lower.match(/\b(hi|hello|hey|greetings|sup|howdy|salam|assalam|yo)\b/)) {
    return "Hello there! 👋 I'm Flabby, Nimrah's friendly AI assistant.\n\nI can tell you about her tech stacks, pricing models, completed projects, and core development services. What would you like to explore today?";
  }
  if (lower.match(/\b(thank|thanks|thx|appreciate|grateful)\b/)) {
    return "You're so welcome! 😊 Happy to help. Let me know if you have more questions — I'm here all day!";
  }
  if (lower.match(/\b(bye|goodbye|see you|later|cya|exit|quit)\b/)) {
    return "Bye bye! 👋 It was nice chatting. Come back anytime — I'll be right here waiting.\n\n~ Flabby 💛";
  }

  return null;
}

export function handleFallbackResponse(): string {
  const randomReply = friendlyReplies[Math.floor(Math.random() * friendlyReplies.length)];
  
  return `${randomReply}\n\nI'm not sure about that specific detail yet 😊\n\nTry asking me about:\n🤖 Services & AI Agents\n💰 Project Pricing\n📁 Portfolio & Live Demos\n🧠 Experience & Tech Stack\n🏆 Certifications & PIAIC\n💬 WhatsApp Automation\n📄 Professional Profile\n📞 Contact Details\n\nOr tell me about your project and we can map out a custom solution! ✨`;
}
