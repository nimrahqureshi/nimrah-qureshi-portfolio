import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const queryEntries = [
  { q: "Do you construct fully custom autonomous AI agents?", a: "Yes. All agent systems are developed using custom prompt patterns, structural memory vectors, and function calling hooks targeted directly to your enterprise database arrays." },
  { q: "Can you perform direct integrations with OpenAI or custom LLMs?", a: "Absolutely. I configure type-safe API gateways connecting OpenAI, Anthropic, or specialized local model infrastructure nodes with low latency configurations." },
  { q: "Do you work directly with early-stage startups?", a: "Yes. I coordinate architecture paths for fast-moving startups, developing minimum-viable-products (MVPs) built to scale gracefully into major systems." },
  { q: "What primary software stacks form your core system layout?", a: "I write core code using React, Next.js, TypeScript, Node.js, Express, NestJS, and interact with relational/non-relational systems like PostgreSQL and MongoDB." }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen pt-24 pb-16 overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-white">System FAQ Registry</h1>
          <p className="text-gray-400 text-sm">Instant answers regarding project delivery, tech stacks, and algorithmic operations.</p>
        </div>

        <div className="space-y-3">
          {queryEntries.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="bg-[#1E2023] border border-white/5 rounded-2xl overflow-hidden transition-colors">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 flex items-center justify-between text-left text-white font-medium text-sm sm:text-base gap-4"
                >
                  <span className="flex items-center gap-2.5"><HelpCircle className="w-4 h-4 text-purple-400 shrink-0" /> {item.q}</span>
                  <ChevronDown className={`w-4 h-4 text-gray-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-purple-400' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-400 border-t border-white/[0.02] leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
