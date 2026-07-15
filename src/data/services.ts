import { Bot, Brain, Zap, Code2, MessageSquare, Workflow, BarChart3 } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  features: string[];
  gradient: string;
  price?: string;
}

export const services: Service[] = [
  {
    id: 'ai-chatbots',
    title: 'AI Chatbot Development',
    description: 'Intelligent conversational AI agents that engage, qualify, and convert your website visitors 24/7.',
    icon: MessageSquare,
    features: [
      'Website Chatbots with GPT-4',
      'WhatsApp Business Integration',
      'Customer Support Automation',
      'Lead Generation Bots',
      'Multilingual Support',
      'Custom Knowledge Base Training'
    ],
    gradient: 'from-[#3a3629] via-[#23211a] to-[#101010]'
  },
  {
    id: 'ai-agents',
    title: 'AI Agents & Automation',
    description: 'Autonomous AI agents that handle complex tasks, research, and business workflows without human intervention.',
    icon: Brain,
    features: [
      'Autonomous Task Agents',
      'Research & Analysis Agents',
      'Business Process Assistants',
      'AI Workflow Orchestration',
      'Data Extraction & Processing',
      'Multi-Agent Collaboration Systems'
    ],
    gradient: 'from-[#2b2e30] via-[#191b1c] to-[#0c0d0e]'
  },
  {
    id: 'automation',
    title: 'Business Automation',
    description: 'End-to-end workflow automation connecting your tools, data, and processes into seamless operations.',
    icon: Zap,
    features: [
      'CRM Automation (HubSpot, Salesforce)',
      'Email Marketing Automation',
      'Lead Management Systems',
      'Invoice & Billing Automation',
      'Social Media Scheduling',
      'Custom Workflow Design'
    ],
    gradient: 'from-[#2e2e2e] via-[#1c1c1c] to-[#0d0d0d]'
  },
  {
    id: 'fullstack',
    title: 'Full Stack Development',
    description: 'Scalable, production-ready web applications built with modern frameworks and best practices.',
    icon: Code2,
    features: [
      'Next.js & React Applications',
      'Node.js & Express Backends',
      'MongoDB & PostgreSQL Databases',
      'SaaS MVP Development',
      'Subscription & Payment Systems',
      'Admin Dashboards & Analytics'
    ],
    gradient: 'from-[#33302a] via-[#1e1c18] to-[#121110]'
  }
];

export const serviceHighlights = [
  {
    icon: Bot,
    count: '10+',
    label: 'Projects Completed',
    gradient: 'from-[#3a3629] via-[#23211a] to-[#101010]'
  },
  {
    icon: Brain,
    count: '2',
    label: 'AI Brands Founded',
    gradient: 'from-[#2b2e30] via-[#191b1c] to-[#0c0d0e]'
  },
  {
    icon: Workflow,
    count: 'AI + Web3',
    label: 'Specializations',
    gradient: 'from-[#2e2e2e] via-[#1c1c1c] to-[#0d0d0d]'
  },
  {
    icon: BarChart3,
    count: 'Worldwide',
    label: 'Available Remotely',
    gradient: 'from-[#33302a] via-[#1e1c18] to-[#121110]'
  }
];
