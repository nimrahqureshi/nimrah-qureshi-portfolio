export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  results: string[];
  links: ProjectLink[];
  gradient: string;
  category: string;
}

export const projects: Project[] = [
  {
    id: 'neuraloft',
    title: 'Neuraloft',
    subtitle: 'AI Software & Automation Studio',
    description:
      'An AI-powered software and automation studio offering AI applications, agents, chatbots, MVP and SaaS development, plus video editing and client-acquisition systems.',
    problem:
      'Startups and creators needed a single partner to design AI products, automate workflows, and ship MVPs without assembling a full in-house team.',
    solution:
      'Built Neuraloft as a studio brand covering AI apps, agents, chatbots, automation systems, MVP/SaaS development, and client-acquisition workflows under one roof.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'OpenAI', 'LangChain'],
    features: [
      'AI Application Development',
      'AI Agents & Chatbots',
      'Automation Systems',
      'MVP & SaaS Development',
      'Client Acquisition Systems',
      'Video Editing Services',
    ],
    results: [
      'Unified AI, software, and video services under one studio',
      'Reusable templates for faster MVP delivery',
      'Workflow automation for repetitive client tasks',
    ],
    links: [
      { label: 'Live Demo', url: 'https://blai-portfolio.vercel.app' },
      { label: 'Discuss This Project', url: '/contact' },
    ],
    gradient: 'from-[#2b2e30] via-[#191b1c] to-[#0c0d0e]',
    category: 'Studio',
  },
  {
    id: 'brain-link-ai',
    title: 'Brain Link AI (BLAI)',
    subtitle: 'AI, Web3 & Automation Solutions',
    description:
      'A company building AI chatbots, automation, full-stack applications, Web3 solutions, cloud, and OpenAI integrations to connect data, intelligence, and creativity.',
    problem:
      'Businesses wanted to combine AI, automation, and Web3 capabilities but lacked a partner spanning all three.',
    solution:
      'Founded Brain Link AI to deliver AI chatbots, automation, full-stack apps, Web3 development, cloud solutions, and OpenAI integrations.',
    technologies: ['React', 'Node.js', 'OpenAI', 'Solidity', 'Web3.js', 'Ethers.js', 'AWS'],
    features: [
      'AI Chatbots',
      'AI Automation',
      'Full-Stack Applications',
      'Web3 & Smart Contracts',
      'Cloud Solutions',
      'OpenAI Integrations',
    ],
    results: [
      'Combined AI, Web3, and automation under one brand',
      'OpenAI-powered integrations for business workflows',
      'Smart-contract and Web3 capabilities for clients',
    ],
    links: [{ label: 'Discuss This Project', url: '/contact' }],
    gradient: 'from-[#3a3629] via-[#23211a] to-[#101010]',
    category: 'AI Company',
  },
  {
    id: 'ai-chatbot-assistant',
    title: 'AI Chatbot Assistant',
    subtitle: 'GPT-Powered Business Chatbot',
    description:
      'A GPT-powered business chatbot that answers customer questions, qualifies leads, and supports customers around the clock.',
    problem:
      'Businesses needed an always-on assistant to answer FAQs and capture leads without growing their support team.',
    solution:
      'Built a GPT-powered chatbot trained on business knowledge, with lead capture and customer-support flows.',
    technologies: ['React', 'Node.js', 'OpenAI', 'LangChain', 'MongoDB'],
    features: [
      'GPT-Powered Conversations',
      'Custom Knowledge Base',
      'Lead Capture',
      'Customer Support Automation',
      '24/7 Availability',
      'Easy Website Embed',
    ],
    results: [
      'Always-on customer support',
      'Automated lead qualification',
      'Reduced repetitive support questions',
    ],
    links: [{ label: 'Discuss This Project', url: '/contact' }],
    gradient: 'from-[#2e2e2e] via-[#1c1c1c] to-[#0d0d0d]',
    category: 'AI Chatbot',
  },
  {
    id: 'pdf-chatbot',
    title: 'PDF Chatbot',
    subtitle: 'Chat With Your Documents',
    description:
      'An AI assistant that lets users chat with PDFs, asking questions and getting context-aware answers drawn from the document content using RAG.',
    problem:
      'People spent too long searching long PDFs for specific information.',
    solution:
      'Built a Retrieval-Augmented Generation (RAG) assistant that ingests PDFs and answers questions with context from the source.',
    technologies: ['Python', 'LangChain', 'OpenAI', 'RAG', 'Next.js'],
    features: [
      'Chat With Any PDF',
      'Retrieval-Augmented Generation',
      'Context-Aware Answers',
      'Multi-Document Support',
      'Fast Knowledge Extraction',
    ],
    results: [
      'Instant answers from long documents',
      'Less time spent searching files',
      'Reusable across knowledge bases',
    ],
    links: [{ label: 'Discuss This Project', url: '/contact' }],
    gradient: 'from-[#33302a] via-[#1e1c18] to-[#121110]',
    category: 'AI Tool',
  },
  {
    id: 'whatsapp-business-bot',
    title: 'WhatsApp Business Bot',
    subtitle: 'Automated WhatsApp Support',
    description:
      'An automated WhatsApp bot that handles customer support, answers questions, and helps manage conversations at scale.',
    problem:
      'Businesses needed to manage growing WhatsApp customer conversations without a larger team.',
    solution:
      'Built a WhatsApp automation bot for customer support and sales conversations with AI-assisted replies.',
    technologies: ['Node.js', 'OpenAI', 'MongoDB', 'Webhooks'],
    features: [
      'Automated Customer Support',
      'AI-Assisted Replies',
      'Conversation Management',
      'FAQ Automation',
      'Lead Capture',
    ],
    results: [
      'Automated common WhatsApp inquiries',
      'Faster customer responses',
      'Support that scales with demand',
    ],
    links: [{ label: 'Discuss This Project', url: '/contact' }],
    gradient: 'from-[#262626] to-[#0a0a0a]',
    category: 'Automation',
  },
  {
    id: 'ai-automation-dashboard',
    title: 'AI Automation Dashboard',
    subtitle: 'Business Workflow Automation',
    description:
      'A business workflow automation system with a dashboard to monitor and manage automated processes in one place.',
    problem:
      'Teams had scattered automations with no central place to monitor or manage them.',
    solution:
      'Built a dashboard to centralize, monitor, and manage business workflow automations.',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    features: [
      'Central Automation Dashboard',
      'Workflow Monitoring',
      'Process Management',
      'Status & Alerts',
      'Clean Analytics UI',
    ],
    results: [
      'Centralized automation management',
      'Clear visibility into workflows',
      'Easier process maintenance',
    ],
    links: [{ label: 'Discuss This Project', url: '/contact' }],
    gradient: 'from-[#3a3629] via-[#23211a] to-[#101010]',
    category: 'Dashboard',
  },
  {
    id: 'saas-platform',
    title: 'SaaS Platform',
    subtitle: 'Subscription-Based Web Application',
    description:
      'A subscription-based web application with authentication, billing, and a modern dashboard, built as a full-stack SaaS product.',
    problem:
      'A product idea needed a complete, scalable SaaS foundation with subscriptions and user management.',
    solution:
      'Architected and built a full-stack SaaS platform with authentication, subscription billing, and a dashboard.',
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
    features: [
      'User Authentication',
      'Subscription Billing',
      'Modern Dashboard',
      'Role-Based Access',
      'Scalable Architecture',
    ],
    results: [
      'Production-ready SaaS foundation',
      'Integrated subscription billing',
      'Scalable, maintainable codebase',
    ],
    links: [{ label: 'Discuss This Project', url: '/contact' }],
    gradient: 'from-[#2b2e30] via-[#191b1c] to-[#0c0d0e]',
    category: 'SaaS',
  },
];
