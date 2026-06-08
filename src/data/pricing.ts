export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  duration: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
  popular?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for small businesses getting started with AI automation.',
    price: '$2,999',
    duration: 'one-time',
    features: [
      'AI Chatbot (1 Channel)',
      'Basic Workflow Automation',
      'Up to 1,000 conversations/month',
      'Email Support',
      '1 Revision Round',
      'Basic Analytics Dashboard',
      'Documentation & Handover'
    ],
    cta: 'Get Started'
  },
  {
    id: 'business',
    name: 'Business',
    description: 'Ideal for growing businesses needing comprehensive AI solutions.',
    price: '$7,999',
    originalPrice: '$9,999',
    duration: 'one-time',
    features: [
      'AI Chatbot (3 Channels)',
      'Advanced AI Agents (2)',
      'Full Workflow Automation',
      'Up to 10,000 conversations/month',
      'Priority Email & Chat Support',
      'Custom Integrations (3)',
      'Advanced Analytics',
      '3 Revision Rounds',
      'Knowledge Base Training',
      'Performance Optimization'
    ],
    highlighted: true,
    popular: true,
    cta: 'Most Popular'
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'For enterprises requiring custom AI solutions at scale.',
    price: '$14,999',
    duration: 'one-time',
    features: [
      'AI Chatbot (Unlimited Channels)',
      'Unlimited AI Agents',
      'Enterprise Workflow Automation',
      'Unlimited conversations',
      '24/7 Priority Support',
      'Unlimited Custom Integrations',
      'White-label Solution',
      'Custom UI/UX Design',
      'Unlimited Revisions',
      'Team Training Sessions',
      'Monthly Performance Reviews',
      'SLA Guarantee',
      'Source Code Ownership'
    ],
    cta: 'Contact Me'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Custom solutions for large organizations with specific needs.',
    price: 'Custom',
    duration: 'custom',
    features: [
      'Everything in Professional',
      'Dedicated AI Team',
      'Custom AI Model Training',
      'On-premise Deployment Option',
      'Enterprise Security Audit',
      'Multi-language Support',
      'Advanced RAG Systems',
      'Custom Dashboard Development',
      'API Development & Documentation',
      'Staff Augmentation',
      'Quarterly Strategy Sessions',
      '99.99% Uptime SLA',
      'Dedicated Project Manager'
    ],
    cta: 'Let\'s Talk'
  }
];

export const addOns = [
  {
    name: 'Monthly Maintenance',
    price: '$299/mo',
    description: 'Ongoing support, updates, and performance monitoring'
  },
  {
    name: 'Additional AI Agent',
    price: '$999',
    description: 'Add another AI agent to your system'
  },
  {
    name: 'API Integration',
    price: '$499',
    description: 'Connect additional third-party services'
  },
  {
    name: 'Team Training',
    price: '$799',
    description: 'Full-day training session for your team'
  }
];
