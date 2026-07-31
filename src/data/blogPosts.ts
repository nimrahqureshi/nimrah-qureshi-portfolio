export interface PostSection {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  /** Structured article body rendered as semantic HTML (h2/p/ul). */
  sections: PostSection[];
  date: string; // ISO date
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
    title: 'How AI Chatbots Are Transforming Customer Support',
    excerpt:
      'What actually changes when a business puts a well-built AI chatbot in front of its customers — and where the human team still matters.',
    sections: [
      {
        paragraphs: [
          'Most support teams don\'t have a knowledge problem — they have a repetition problem. Order status, password resets, pricing questions, and "where is my invoice" make up the bulk of inbound volume, and every one of those tickets pulls a human away from the conversations that genuinely need judgment.',
          'A well-built AI chatbot changes the economics of that queue. It answers instantly, at any hour, in any language you configure, and it never gets tired of the same question. The businesses I work with typically see the majority of repetitive inquiries deflected within the first weeks of launch.',
        ],
      },
      {
        heading: 'What separates a good chatbot from a frustrating one',
        paragraphs: [
          'The difference is rarely the model — it\'s the grounding. A chatbot that answers from your real product documentation, order data, and policies (a RAG setup) behaves like a knowledgeable teammate. One that free-styles from a generic model behaves like a liability.',
        ],
        list: [
          'Ground every answer in your own content — docs, FAQs, past tickets.',
          'Design an escalation path: the bot should know when to hand off to a human, with full context attached.',
          'Log every conversation. The transcripts are a goldmine for product and content gaps.',
          'Set the tone deliberately. The bot speaks in your brand voice, not the model\'s default.',
        ],
      },
      {
        heading: 'Where humans still win',
        paragraphs: [
          'Refund disputes, angry customers, edge-case bugs, and anything with legal or safety weight should route to people — quickly and with the whole conversation history. The goal is not to remove the support team; it\'s to let them spend their day on the 15% of conversations that actually need them.',
          'If you\'re considering a support chatbot, start with your top ten ticket categories, wire the bot to real data for those, and measure deflection honestly. That first narrow version usually pays for itself before you ever expand it.',
        ],
      },
    ],
    date: '2026-06-18',
    readTime: '6 min read',
    category: 'AI',
    author: 'Nimrah Qureshi',
    tags: ['AI', 'Chatbots', 'Customer Support', 'Automation'],
    image: 'https://images.unsplash.com/photo-1531746790095-e5cb1578e70a?w=800&h=400&fit=crop',
    slug: 'ai-chatbots-transforming-customer-support',
  },
  {
    id: '2',
    title: 'Building Production-Ready AI Agents: Lessons from the Trenches',
    excerpt:
      'Demos are easy; dependable agents are not. The patterns that keep autonomous AI workflows reliable once real business data is on the line.',
    sections: [
      {
        paragraphs: [
          'An AI agent demo takes an afternoon. An agent you can trust with an actual business process — one that runs unattended, touches real systems, and fails safely — takes engineering discipline. The gap between the two is where most agent projects stall.',
        ],
      },
      {
        heading: 'The patterns that matter in production',
        list: [
          'Constrain the action space. An agent with ten well-defined tools outperforms one with fifty vague ones — and is far easier to audit.',
          'Make every step observable. Log the model\'s reasoning, tool calls, and outputs so failures are diagnosable, not mysterious.',
          'Add checkpoints for irreversible actions. Sending money, deleting records, or emailing customers should require an explicit confirmation gate.',
          'Design for retry and partial failure. External APIs go down; the agent should resume, not restart from zero.',
          'Evaluate continuously. A small suite of scripted scenarios run on every change catches regressions before customers do.',
        ],
      },
      {
        heading: 'Frameworks are the easy part',
        paragraphs: [
          'LangChain, LlamaIndex, and the native SDKs from OpenAI and Anthropic all get you to a working loop quickly. What they can\'t give you is the boring infrastructure around the loop: queues, timeouts, idempotency, structured logging, and a rollback story. That layer is where production agents live or die.',
          'My rule of thumb: if an agent will act on systems that matter, treat it like any other distributed system — because that\'s exactly what it is, with a probabilistic component in the middle.',
        ],
      },
    ],
    date: '2026-05-02',
    readTime: '8 min read',
    category: 'AI',
    author: 'Nimrah Qureshi',
    tags: ['AI Agents', 'LangChain', 'Automation', 'Engineering'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop',
    slug: 'building-production-ready-ai-agents',
  },
  {
    id: '3',
    title: 'The Practical Guide to WhatsApp Business Automation',
    excerpt:
      'WhatsApp is where your customers already are. How to automate sales and support conversations on it without getting your number blocked.',
    sections: [
      {
        paragraphs: [
          'In markets across Asia, the Middle East, Africa, and Latin America, WhatsApp isn\'t a channel — it\'s the channel. Customers expect to ask questions, place orders, and get support exactly where they message their friends. Automating that well is one of the highest-ROI projects a small business can run.',
        ],
      },
      {
        heading: 'What you can automate today',
        list: [
          'Instant replies to catalog, pricing, and availability questions.',
          'Order confirmations, shipping updates, and payment reminders.',
          'Lead qualification — collect the details before a human ever joins the chat.',
          'Appointment booking and reminder flows.',
          'Post-purchase follow-ups and review requests.',
        ],
      },
      {
        heading: 'The rules that keep you safe',
        paragraphs: [
          'The WhatsApp Business Platform has strict policies, and violating them gets numbers restricted fast. Use approved message templates for business-initiated messages, respect the 24-hour customer-service window for free-form replies, and always honor opt-outs immediately.',
          'Architecturally, the stack is straightforward: the WhatsApp Cloud API (or a provider like Twilio) for messaging, a webhook service for inbound events, and — if you want intelligent replies — an LLM grounded in your product data with a human-handoff path. Start with one flow, measure response times and conversion, then expand.',
        ],
      },
    ],
    date: '2026-03-21',
    readTime: '7 min read',
    category: 'Automation',
    author: 'Nimrah Qureshi',
    tags: ['WhatsApp', 'Automation', 'Business', 'Messaging'],
    image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=800&h=400&fit=crop',
    slug: 'practical-guide-whatsapp-business-automation',
  },
  {
    id: '4',
    title: 'From Zero to SaaS: A Realistic MVP Playbook',
    excerpt:
      'The unglamorous, effective path from idea to a paying-customer-ready SaaS — what to build, what to buy, and what to skip entirely.',
    sections: [
      {
        paragraphs: [
          'Most first-time SaaS builds fail the same way: months spent on settings pages, theming, and admin panels before a single customer has touched the core value. A realistic MVP inverts that — it ships the one workflow people would pay for, wrapped in just enough product to charge money safely.',
        ],
      },
      {
        heading: 'Build vs. buy, honestly',
        list: [
          'Buy: authentication (Clerk/Auth0/Supabase Auth), payments (Stripe), email (Resend/Postmark), analytics (PostHog).',
          'Build: the core workflow that is your actual product — nothing else deserves custom code at MVP stage.',
          'Skip: multi-tenancy theming, granular roles, and native mobile apps until revenue demands them.',
        ],
      },
      {
        heading: 'A stack that gets out of the way',
        paragraphs: [
          'React or Next.js on the front, Node/Express or serverless functions behind it, Postgres or MongoDB for data, Stripe for subscriptions. This combination is boring on purpose — every problem you hit has a documented answer, which is exactly what you want when speed matters.',
          'The milestone that matters isn\'t "feature complete." It\'s the first stranger entering a card number. Design the whole MVP backwards from that moment: landing page, one core workflow, checkout, and a way to hear from users. Everything else is iteration.',
        ],
      },
    ],
    date: '2026-02-09',
    readTime: '8 min read',
    category: 'Web Development',
    author: 'Nimrah Qureshi',
    tags: ['SaaS', 'MVP', 'Stripe', 'Full Stack'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    slug: 'zero-to-saas-realistic-mvp-playbook',
  },
  {
    id: '5',
    title: 'Why Every Business Needs an AI Strategy (Not Just AI Tools)',
    excerpt:
      'Buying AI subscriptions is easy. Getting compounding value from AI requires deciding where it fits your workflows — and where it doesn\'t.',
    sections: [
      {
        paragraphs: [
          'Plenty of companies now "use AI" the way they use a stapler: occasionally, individually, and with no measurable effect on the business. The teams pulling ahead are doing something different — they\'ve mapped their actual workflows and asked, process by process, where machine intelligence removes a bottleneck.',
        ],
      },
      {
        heading: 'A lightweight strategy that actually works',
        list: [
          'Inventory repetitive work: anything done more than ten times a week with clear rules is an automation candidate.',
          'Pick two or three pilots with measurable outcomes — response time, hours saved, conversion rate.',
          'Ground AI in your data. Generic answers create generic value; your documents, tickets, and CRM records are the moat.',
          'Keep humans on the judgment calls: pricing exceptions, sensitive communications, anything with legal weight.',
          'Review quarterly. Model capabilities shift fast; a workflow that wasn\'t automatable last year may be trivial now.',
        ],
      },
      {
        heading: 'The cost of waiting',
        paragraphs: [
          'The risk isn\'t that a competitor buys a fancier model — models are commodities. The risk is that they spend a year building AI-shaped operational muscle: clean data, integrated workflows, and a team that knows what to delegate to machines. That compounds, and it\'s hard to catch up on.',
        ],
      },
    ],
    date: '2025-12-14',
    readTime: '5 min read',
    category: 'Business',
    author: 'Nimrah Qureshi',
    tags: ['AI Strategy', 'Business', 'Innovation', 'Automation'],
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop',
    slug: 'why-every-business-needs-ai-strategy',
  },
  {
    id: '6',
    title: 'Modern React Performance: A Field Checklist',
    excerpt:
      'The handful of React and bundling habits that reliably keep real-world apps fast — beyond memoizing everything and hoping.',
    sections: [
      {
        paragraphs: [
          'React apps rarely get slow because of React. They get slow because of what we attach to them: unbounded bundles, unoptimized images, effects that run too often, and animations fighting the main thread. The fixes are mostly unglamorous — and they work.',
        ],
      },
      {
        heading: 'The checklist',
        list: [
          'Split by route. React.lazy + Suspense means first paint only downloads the code it needs.',
          'Separate vendor chunks (React, animation libraries) so they stay cached across deploys.',
          'Ship real WebP/AVIF images with width/height attributes — layout shift is a self-inflicted wound.',
          'Reserve eager loading and fetchpriority="high" for the single above-the-fold hero asset.',
          'Memoize where profiling shows re-render cost, not by reflex — useless memo is its own overhead.',
          'Respect prefers-reduced-motion, pause canvas/RAF loops when the tab is hidden, and animate transform/opacity only.',
        ],
      },
      {
        heading: 'Measure before and after',
        paragraphs: [
          'Lighthouse and the Core Web Vitals trio — LCP, CLS, INP — turn performance from vibes into a scoreboard. Fix the biggest asset first (it\'s almost always an image), re-measure, and repeat. Ten focused minutes on real bottlenecks beats a week of speculative micro-optimization.',
        ],
      },
    ],
    date: '2025-11-03',
    readTime: '6 min read',
    category: 'Web Development',
    author: 'Nimrah Qureshi',
    tags: ['React', 'Performance', 'Web Development', 'Core Web Vitals'],
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=400&fit=crop',
    slug: 'modern-react-performance-checklist',
  },
  {
    id: '7',
    title: 'The Future of Work: AI Automation and Human Collaboration',
    excerpt:
      'The realistic version of "AI changes work": machines absorb the repetitive layer while human judgment becomes the scarce, valuable input.',
    sections: [
      {
        paragraphs: [
          'Every automation wave has followed the same arc: the repetitive layer of a job gets absorbed by machines, and the humans who remain spend more time on judgment, relationships, and exceptions. AI is running that same arc across knowledge work — faster, and across more roles at once.',
        ],
      },
      {
        heading: 'What actually gets automated',
        paragraphs: [
          'Not "jobs" — tasks. Drafting the first version, summarizing the meeting, triaging the inbox, moving data between systems, answering the question that\'s been answered a thousand times. In most roles that\'s a large minority of the week, which is exactly why individuals who delegate it well suddenly look twice as productive.',
        ],
        list: [
          'Collaboration pattern that works: AI produces the draft, the human owns the decision and the relationship.',
          'Skills that appreciate: problem framing, reviewing AI output critically, domain judgment, and communication.',
          'Skills that depreciate: being fast at the repetitive layer itself.',
        ],
      },
      {
        heading: 'For teams and businesses',
        paragraphs: [
          'The organizations handling this well are explicit about it: they document which workflows are delegated to AI, train people to supervise rather than fear the tools, and reinvest the saved hours into work customers actually notice. The ones handling it badly ban the tools publicly while everyone uses them privately — losing both control and the learning curve.',
        ],
      },
    ],
    date: '2025-10-07',
    readTime: '6 min read',
    category: 'AI',
    author: 'Nimrah Qureshi',
    tags: ['Future of Work', 'AI', 'Automation', 'Collaboration'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=400&fit=crop',
    slug: 'future-of-work-ai-automation-human-collaboration',
  },
  {
    id: '8',
    title: 'Freelancing in AI Development: A Grounded Career Guide',
    excerpt:
      'What it realistically takes to build a sustainable freelance career in AI and full-stack development — positioning, proof, and pricing.',
    sections: [
      {
        paragraphs: [
          'Demand for AI development is real, but so is the noise. Thousands of profiles promise "AI expert" with nothing behind the label. The freelancers who build sustainable careers do three unfashionable things: specialize, show proof, and communicate like professionals.',
        ],
      },
      {
        heading: 'Positioning beats generalism',
        paragraphs: [
          '"I build AI things" competes with everyone. "I build WhatsApp support automation for e-commerce stores" competes with almost no one — and clients with that exact problem will pay a premium for someone who has clearly solved it before. Pick a niche you can genuinely deliver in, and let your portfolio speak that niche fluently.',
        ],
      },
      {
        heading: 'Proof, pricing, and pipeline',
        list: [
          'Proof: live demos and honest case studies beat any claim. One deployed project outweighs ten certifications in a client\'s eyes.',
          'Pricing: charge for outcomes and scope, not hours. Productized packages ("chatbot + knowledge base + handoff flow, delivered in 3 weeks") are easier to buy than open-ended rates.',
          'Pipeline: platforms like Upwork and Fiverr can start the flywheel, but repeat clients and referrals are the business. Over-communicate, ship on time, and document handovers — that alone puts you ahead of most of the market.',
        ],
      },
      {
        paragraphs: [
          'It compounds slowly, then quickly. The first months are grinding for reviews; a year of consistent delivery later, work starts finding you.',
        ],
      },
    ],
    date: '2025-09-12',
    readTime: '7 min read',
    category: 'Freelancing',
    author: 'Nimrah Qureshi',
    tags: ['Freelancing', 'Career', 'AI Development', 'Business'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop',
    slug: 'freelancing-ai-development-career-guide',
  },
];

export const blogCategories = [
  'All',
  'AI',
  'Automation',
  'Business',
  'Freelancing',
  'Web Development',
];

/** Human-readable date, e.g. "Jun 18, 2026". */
export function formatPostDate(iso: string): string {
  return new Date(iso + 'T00:00:00Z').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

/** Posts sharing the most tags/category with the given one (excluding itself). */
export function relatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = blogPosts.find((p) => p.slug === slug);
  if (!current) return [];
  return blogPosts
    .filter((p) => p.slug !== slug)
    .map((p) => ({
      p,
      score:
        p.tags.filter((t) => current.tags.includes(t)).length +
        (p.category === current.category ? 1 : 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ p }) => p);
}
