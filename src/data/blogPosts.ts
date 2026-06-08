export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  tags: string[];
  image: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How AI Chatbots Are Revolutionizing Customer Support in 2024',
    excerpt: 'Discover how businesses are using AI chatbots to provide 24/7 support, reduce costs, and improve customer satisfaction.',
    content: `The customer support landscape has undergone a dramatic transformation with the advent of AI-powered chatbots...`,
    date: '2024-03-15',
    readTime: '8 min read',
    category: 'AI',
    author: 'Nimrah Qureshi',
    tags: ['AI', 'Chatbots', 'Customer Support', 'Automation'],
    image: 'https://images.unsplash.com/photo-1531746790095-e5cb1578e70a?w=800&h=400&fit=crop',
    slug: 'ai-chatbots-revolutionizing-customer-support'
  },
  {
    id: '2',
    title: 'Building Production-Ready AI Agents with LangChain',
    excerpt: 'A comprehensive guide to building and deploying AI agents that can handle complex business tasks autonomously.',
    content: `LangChain has emerged as the go-to framework for building AI agents...`,
    date: '2024-03-10',
    readTime: '12 min read',
    category: 'AI',
    author: 'Nimrah Qureshi',
    tags: ['AI Agents', 'LangChain', 'Python', 'Automation'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    slug: 'building-production-ready-ai-agents-langchain'
  },
  {
    id: '3',
    title: 'The Complete Guide to WhatsApp Business Automation',
    excerpt: 'Learn how to automate your WhatsApp Business communications for sales, support, and marketing.',
    content: `WhatsApp has become an essential channel for business communication...`,
    date: '2024-03-05',
    readTime: '10 min read',
    category: 'Automation',
    author: 'Nimrah Qureshi',
    tags: ['WhatsApp', 'Automation', 'Business', 'Marketing'],
    image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&h=400&fit=crop',
    slug: 'complete-guide-whatsapp-business-automation'
  },
  {
    id: '4',
    title: 'From Zero to SaaS: Building a Subscription Platform in 2024',
    excerpt: 'A step-by-step guide to building a SaaS platform with Next.js, Stripe, and modern best practices.',
    content: `Building a SaaS platform from scratch can be daunting...`,
    date: '2024-02-28',
    readTime: '15 min read',
    category: 'Web Development',
    author: 'Nimrah Qureshi',
    tags: ['SaaS', 'Next.js', 'Stripe', 'Full Stack'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    slug: 'zero-to-saas-building-subscription-platform'
  },
  {
    id: '5',
    title: 'Why Every Business Needs an AI Strategy in 2024',
    excerpt: 'Explore why AI adoption is no longer optional and how to build a winning AI strategy for your business.',
    content: `The AI revolution is not coming—it's already here...`,
    date: '2024-02-20',
    readTime: '6 min read',
    category: 'Business',
    author: 'Nimrah Qureshi',
    tags: ['AI Strategy', 'Business', 'Innovation', 'Technology'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop',
    slug: 'why-every-business-needs-ai-strategy'
  },
  {
    id: '6',
    title: 'Mastering Next.js 14: Tips and Best Practices',
    excerpt: 'Essential tips and best practices for building high-performance applications with Next.js 14.',
    content: `Next.js 14 brings powerful new features...`,
    date: '2024-02-15',
    readTime: '9 min read',
    category: 'Web Development',
    author: 'Nimrah Qureshi',
    tags: ['Next.js', 'React', 'Web Development', 'Performance'],
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop',
    slug: 'mastering-nextjs-14-tips-best-practices'
  },
  {
    id: '7',
    title: 'The Future of Work: AI Automation and Human Collaboration',
    excerpt: 'How AI automation is reshaping the workplace and creating new opportunities for human-AI collaboration.',
    content: `The future of work isn't about AI replacing humans...`,
    date: '2024-02-10',
    readTime: '7 min read',
    category: 'AI',
    author: 'Nimrah Qureshi',
    tags: ['Future of Work', 'AI', 'Automation', 'Collaboration'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop',
    slug: 'future-of-work-ai-automation-human-collaboration'
  },
  {
    id: '8',
    title: 'Freelancing in 2024: How to Build a 6-Figure AI Development Career',
    excerpt: 'Practical advice on building a successful freelance career in AI development and landing high-value clients.',
    content: `The demand for AI development skills has never been higher...`,
    date: '2024-02-05',
    readTime: '11 min read',
    category: 'Freelancing',
    author: 'Nimrah Qureshi',
    tags: ['Freelancing', 'Career', 'AI Development', 'Business'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop',
    slug: 'freelancing-2024-six-figure-ai-career'
  }
];

export const blogCategories = [
  'All',
  'AI',
  'Chatbots',
  'Automation',
  'Programming',
  'Business',
  'Freelancing',
  'Web Development'
];
