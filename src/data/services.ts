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
    gradient: 'from-purple-500 to-cyan-400'
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
    gradient: 'from-cyan-400 to-blue-500'
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
    gradient: 'from-pink-500 to-purple-500'
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
    gradient: 'from-orange-500 to-pink-500'
  }
];

export const serviceHighlights = [
  {
    icon: Bot,
    count: '10+',
    label: 'Projects Completed',
    gradient: 'from-purple-500 to-cyan-400'
  },
  {
    icon: Brain,
    count: '2',
    label: 'AI Brands Founded',
    gradient: 'from-cyan-400 to-blue-500'
  },
  {
    icon: Workflow,
    count: 'AI + Web3',
    label: 'Specializations',
    gradient: 'from-pink-500 to-purple-500'
  },
  {
    icon: BarChart3,
    count: 'Worldwide',
    label: 'Available Remotely',
    gradient: 'from-orange-500 to-pink-500'
  }
];
