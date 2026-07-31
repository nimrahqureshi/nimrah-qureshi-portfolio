export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  problem: string;
  solution: string;
  technologies: string[];
  implementation: string;
  results: string[];
  businessImpact: string;
  timeline: string;
  gradient: string;
  /** All current entries are illustrative concept engagements, not client work. */
  isConcept: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'ecommerce-ai-support',
    title: 'AI-Powered Customer Support for E-commerce Giant',
    client: 'Concept study · mid-size e-commerce platform',
    isConcept: true,
    industry: 'E-commerce',
    problem: 'ShopFlow was receiving 10,000+ customer support tickets daily, with average response times of 48 hours. Their support team was overwhelmed, and customer satisfaction was dropping rapidly.',
    solution: 'Designed and deployed an AI chatbot system that handles 85% of inquiries automatically, with intelligent escalation to human agents for complex issues.',
    technologies: ['OpenAI GPT-4', 'LangChain', 'Next.js', 'Node.js', 'MongoDB', 'Redis', 'AWS'],
    implementation: 'The implementation involved training the AI on 50,000+ historical support tickets, building a smart routing system, and integrating with their existing CRM and order management systems.',
    results: [
      '85% of tickets resolved automatically',
      'Response time reduced from 48 hours to 30 seconds',
      'Customer satisfaction improved from 3.2 to 4.7',
      'Support team productivity increased by 300%'
    ],
    businessImpact: '$1.2M annual savings in support costs, 40% increase in customer retention, and the ability to scale support without proportional hiring.',
    timeline: '8 weeks from kickoff to full deployment',
    gradient: 'from-[#3a3629] via-[#23211a] to-[#101010]',
  },
  {
    id: 'saas-automation',
    title: 'End-to-End Automation for SaaS Platform',
    client: 'Concept study · B2B SaaS company',
    isConcept: true,
    industry: 'Technology / SaaS',
    problem: 'DataSync Pro was manually processing onboarding, invoicing, and customer communications for 5,000+ clients, leading to errors, delays, and missed revenue opportunities.',
    solution: 'Built a comprehensive automation system connecting their CRM, billing, email, and support tools into a unified workflow.',
    technologies: ['Node.js', 'TypeScript', 'HubSpot API', 'Stripe', 'SendGrid', 'MongoDB', 'Docker'],
    implementation: 'Created automated workflows for client onboarding, subscription management, invoice generation, and email sequences. Integrated with Slack for team notifications and built a monitoring dashboard.',
    results: [
      '99% reduction in manual data entry',
      'Onboarding time reduced from 5 days to 2 hours',
      'Invoice errors decreased by 98%',
      'Employee satisfaction improved by 60%'
    ],
    businessImpact: '$800K annual cost savings, 3x increase in onboarding capacity, and 95% reduction in billing errors.',
    timeline: '12 weeks for full implementation',
    gradient: 'from-[#2b2e30] via-[#191b1c] to-[#0c0d0e]',
  },
  {
    id: 'healthcare-ai',
    title: 'AI Document Processing for Healthcare Provider',
    client: 'Concept study · healthcare document workflow',
    isConcept: true,
    industry: 'Healthcare',
    problem: 'MediCare Plus was processing 50,000+ medical documents monthly manually, leading to 15% error rates and delayed patient care decisions.',
    solution: 'Developed an AI-powered document processing system that extracts, validates, and routes medical information with 99.5% accuracy.',
    technologies: ['Python', 'LangChain', 'OpenAI', 'Pinecone', 'FastAPI', 'PostgreSQL', 'Docker'],
    implementation: 'Built a document ingestion pipeline with OCR, trained custom AI models on medical terminology, and created a validation workflow with human-in-the-loop for edge cases.',
    results: [
      '99.5% document processing accuracy',
      'Processing time reduced from 4 days to 4 minutes',
      '15% error rate reduced to 0.5%',
      '$2M annual savings in operational costs'
    ],
    businessImpact: 'Faster patient care decisions, regulatory compliance achieved, and the ability to handle 3x the document volume without additional staff.',
    timeline: '16 weeks from design to production',
    gradient: 'from-[#33302a] via-[#1e1c18] to-[#121110]',
  }
];
