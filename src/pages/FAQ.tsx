import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import PageShell from '@/components/layout/PageShell';
import SectionHeading from '@/components/effects/SectionHeading';

const faqs = [
  {
    q: 'What services do you offer?',
    a: 'AI chatbots, AI agents, RAG applications, OpenAI and LangChain integrations, automation systems, and full-stack development with Next.js, React, and Node.js — including SaaS MVP development.',
  },
  {
    q: 'What kind of AI chatbots can you build?',
    a: 'Website chatbots, customer support bots, PDF and knowledge-base chatbots, RAG assistants, and WhatsApp business bots — all powered by GPT models and trained on your own content.',
  },
  {
    q: 'Do you work with startups and small businesses?',
    a: 'Yes. I focus on practical AI solutions for startups, creators, and businesses — from a first MVP to automation that removes repetitive work and helps you scale.',
  },
  {
    q: 'Which technologies do you use?',
    a: 'On the AI side: OpenAI, LangChain, RAG, and prompt engineering. On the stack: React, Next.js, TypeScript, Node.js, Express, MongoDB, and PostgreSQL. I also work with Web3 tools like Solidity and Ethers.js.',
  },
  {
    q: 'Do you work remotely?',
    a: 'Yes — I am based in Karachi, Pakistan, and available worldwide. Most projects are fully remote.',
  },
  {
    q: 'How do we get started?',
    a: 'Send a message through the contact form or WhatsApp with a short description of your project. We will discuss your goals, scope, and timeline, then move forward from there.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'It depends on scope. A focused chatbot or automation can take days to a couple of weeks; a full SaaS MVP takes longer. You will get a clear estimate before any work begins.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <PageShell>
      <SEOHead
        title="FAQ | Nimrah Qureshi"
        description="Frequently asked questions about working with Nimrah Qureshi on AI chatbots, automation, and full-stack development projects."
        url="https://nimrah-qureshi-portfolio.vercel.app/faq"
      />
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle="Answers to common questions about services, process, and working together."
          />

          <div className="mt-12 space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left p-5"
                  aria-expanded={open === i}
                >
                  <span className="font-medium text-white">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-purple-400 flex-shrink-0 transition-transform ${
                      open === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className="px-5 pb-5 text-muted leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}