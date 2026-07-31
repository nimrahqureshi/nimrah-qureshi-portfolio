import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { api, ApiError } from '@/lib/api';
import { motion } from 'framer-motion';
import { Sparkles, Copy, Check, RefreshCw, FileText, MessageSquare, PenTool, Mail, Lightbulb, Bot } from 'lucide-react';
import SectionHeading from '@/components/effects/SectionHeading';
import GlassCard from '@/components/effects/GlassCard';

interface Tool {
  id: string;
  name: string;
  description: string;
  icon: any;
  gradient: string;
  placeholder: string;
  generate: (input: string) => string;
}

const tools: Tool[] = [
  {
    id: 'blog',
    name: 'AI Blog Generator',
    description: 'Generate SEO-optimized blog posts on any topic',
    icon: FileText,
    gradient: 'from-[#E1E0CC]/20 to-[#E1E0CC]/5',
    placeholder: 'Enter a blog topic (e.g., "Benefits of AI Chatbots for E-commerce")',
    generate: (topic) => `# ${topic}\n\n## Introduction\nIn today's rapidly evolving digital landscape, ${topic.toLowerCase()} has become a critical consideration for businesses looking to stay competitive.\n\n## Why This Matters\nThe adoption of AI-powered solutions is no longer optional—it's a necessity for businesses that want to thrive in the modern marketplace.\n\n## Key Benefits\n1. **Increased Efficiency**: Automate repetitive tasks and free up human resources\n2. **Cost Reduction**: Reduce operational costs by up to 60%\n3. **24/7 Availability**: Provide round-the-clock service to customers\n4. **Scalability**: Handle growing demand without proportional resource increases\n\n## Implementation Strategy\nSuccessful implementation requires careful planning, the right technology stack, and a clear understanding of your business objectives.\n\n## Conclusion\nEmbracing ${topic.toLowerCase()} is a strategic move that can transform your business operations and drive significant growth.\n\n---\n*Starter outline template — for a tailored, in-depth draft, contact Nimrah Qureshi.*`
  },
  {
    id: 'caption',
    name: 'AI Caption Generator',
    description: 'Create engaging social media captions',
    icon: MessageSquare,
    gradient: 'from-[#E1E0CC]/20 to-[#E1E0CC]/5',
    placeholder: 'Describe what your post is about...',
    generate: (desc) => `🔥 **${desc.split(' ').slice(0, 3).join(' ')} - The Future is Here!**\n\n✨ Ready to transform your business?\n\n🚀 ${desc}\n\n💡 Here's why this matters:\n• Stay ahead of the competition\n• Leverage cutting-edge technology\n• Drive real business results\n\n👇 Drop a comment or DM me to learn more!\n\n#AI #Innovation #BusinessGrowth #Technology #Future`
  },
  {
    id: 'prompt',
    name: 'AI Prompt Engineer',
    description: 'Craft effective prompts for AI models',
    icon: PenTool,
    gradient: 'from-[#E1E0CC]/20 to-[#E1E0CC]/5',
    placeholder: 'Describe what you want the AI to do...',
    generate: (desc) => `**Optimized Prompt for: ${desc}**\n\n---\n\n**Role:** You are an expert AI assistant specializing in ${desc.toLowerCase()}.\n\n**Context:** You are helping a professional who needs detailed, actionable information about this topic.\n\n**Task:** ${desc}\n\n**Requirements:**\n1. Provide comprehensive, well-structured information\n2. Include practical examples where relevant\n3. Cite best practices and industry standards\n4. Offer actionable next steps\n5. Highlight potential challenges and solutions\n\n**Output Format:** Use clear headings, bullet points, and concise paragraphs. Include a summary at the end.\n\n**Tone:** Professional, informative, and engaging.`
  },
  {
    id: 'email',
    name: 'AI Email Writer',
    description: 'Write professional emails for any occasion',
    icon: Mail,
    gradient: 'from-[#E1E0CC]/20 to-[#E1E0CC]/5',
    placeholder: 'Describe the email purpose and recipient...',
    generate: (desc) => `**Subject:** ${desc.split(' ').slice(0, 5).join(' ')}...\n\nDear [Recipient],\n\nI hope this message finds you well.\n\nI'm reaching out regarding ${desc.toLowerCase()}. I believe this presents an excellent opportunity for us to collaborate and achieve remarkable results.\n\n**Key Points:**\n• We have extensive experience in this area\n• Our solutions are tailored to your specific needs\n• We're committed to delivering exceptional value\n\nI would love to schedule a brief call to discuss this further. Please let me know what time works best for you.\n\nBest regards,\nNimrah Qureshi\nAI Engineer & Full-Stack Developer`
  },
  {
    id: 'idea',
    name: 'AI Idea Generator',
    description: 'Generate innovative business ideas',
    icon: Lightbulb,
    gradient: 'from-[#E1E0CC]/20 to-[#E1E0CC]/5',
    placeholder: 'Enter an industry or niche...',
    generate: (industry) => `**🚀 Innovative Ideas for ${industry}**\n\n---\n\n**Idea 1: AI-Powered ${industry} Assistant**\nAn intelligent assistant that automates routine tasks and provides actionable insights.\n\n**Idea 2: Smart ${industry} Analytics Platform**\nA comprehensive analytics solution leveraging machine learning for predictive insights.\n\n**Idea 3: Automated ${industry} Workflow System**\nEnd-to-end automation platform connecting all ${industry.toLowerCase()} operations.\n\n**Idea 4: ${industry} Customer Intelligence Bot**\nAn AI chatbot that understands customer needs and provides personalized recommendations.\n\n**Idea 5: ${industry} Market Prediction Tool**\nAdvanced AI algorithms that predict market trends and enable proactive decision-making.\n\n---\n**Want to bring these ideas to life?** Let's discuss your project!`
  },
  {
    id: 'content',
    name: 'AI Content Assistant',
    description: 'Get help with any content creation task',
    icon: Bot,
    gradient: 'from-[#E1E0CC]/20 to-[#E1E0CC]/5',
    placeholder: 'Describe the content you need help with...',
    generate: (desc) => `**📝 Content Brief: ${desc}**\n\n---\n\n**Target Audience:** Primary stakeholders and decision-makers interested in this topic.\n\n**Content Type:** Professional/Educational\n\n**Structure:**\n\n**1. Hook** - Start with a compelling statistic or question related to ${desc.toLowerCase()}\n\n**2. Problem Statement** - Identify the key challenges your audience faces\n\n**3. Solution Overview** - Present your approach in clear, benefit-driven language\n\n**4. Key Benefits:**\n• Time savings and efficiency gains\n• Cost reduction and ROI\n• Competitive advantage\n• Scalability and future-proofing\n\n**5. Implementation Roadmap**\n• Phase 1: Assessment and Planning\n• Phase 2: Development and Testing\n• Phase 3: Deployment and Optimization\n\n**6. Call to Action** - Encourage the reader to take the next step\n\n---\n**Need professional content?** I can help you create compelling, conversion-focused content!`
  }
];

// UI tool id → backend /api/ai/generate tool key.
const TOOL_API_KEYS: Record<string, string> = {
  blog: 'article-outline',
  caption: 'social-post',
  prompt: 'prompt-optimizer',
  email: 'email-draft',
  idea: 'idea-generator',
  content: 'content-brief',
};

export default function AIToolsSection() {
  const [activeTool, setActiveTool] = useState(tools[0]);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  // null = probing, true = a real LLM is configured server-side,
  // false = template mode (clearly labeled — nothing is presented as AI).
  const [liveAI, setLiveAI] = useState<boolean | null>(null);
  const [outputMode, setOutputMode] = useState<'live' | 'template'>('template');

  useEffect(() => {
    let cancelled = false;
    api.aiStatus()
      .then((r) => { if (!cancelled) setLiveAI(r.configured); })
      .catch(() => { if (!cancelled) setLiveAI(false); });
    return () => { cancelled = true; };
  }, []);

  const handleGenerate = async () => {
    if (!input.trim() || isGenerating) return;
    setIsGenerating(true);
    try {
      if (liveAI) {
        const res = await api.aiGenerate(TOOL_API_KEYS[activeTool.id] ?? activeTool.id, input.trim());
        setOutput(res.output);
        setOutputMode('live');
      } else {
        // Instant structured template — labeled as such below the output.
        setOutput(activeTool.generate(input));
        setOutputMode('template');
      }
    } catch (err) {
      if (err instanceof ApiError && err.status === 503) {
        // Provider not configured on this deployment — fall back honestly.
        setLiveAI(false);
        setOutput(activeTool.generate(input));
        setOutputMode('template');
      } else {
        toast.error(err instanceof ApiError ? err.message : 'Generation failed — please try again.');
      }
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(output);
      } else {
        // Legacy fallback for browsers/contexts without the async Clipboard API
        const textarea = document.createElement('textarea');
        textarea.value = output;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error('Could not copy — please select the text manually.');
    }
  };

  return (
    <section 
      id="ai-tools" 
      className="relative min-h-screen bg-black py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-10 overflow-hidden"
      style={{ overflowX: 'clip' }}
    >
      {/* PRISMA INSPIRED LUXURY BACKGROUND SYSTEM */}
      {/* Studio Noise & Texture Map Layer */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
      
      {/* High-End Tech Grid Mask Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#E1E0CC05_1px,transparent_1px),linear-gradient(to_bottom,#E1E0CC05_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" 
      />

      {/* Ambient Premium Soft Light Radiance Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#E1E0CC]/5 rounded-full blur-[140px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-slate-800/40 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '2.5s' }} />

      {/* Micro-Flares and Cinematic Structural Anchors */}
      <div className="absolute top-24 right-12 w-1.5 h-1.5 bg-[#E1E0CC] rounded-full animate-float opacity-30" />
      <div className="absolute top-48 left-24 w-1 h-1 bg-gray-400 rounded-full animate-float opacity-40" style={{ animationDelay: '1.2s' }} />
      <div className="absolute bottom-36 right-20 w-2 h-2 bg-slate-600 rounded-full animate-float opacity-20" style={{ animationDelay: '2.2s' }} />
      <div className="absolute bottom-24 left-16 w-1.5 h-1.5 bg-gray-500 rounded-full animate-float opacity-30" style={{ animationDelay: '3.5s' }} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading 
          title="AI Tools"
          subtitle={liveAI
            ? 'Free AI tools — outlines, posts, prompts, emails, and ideas, generated live by a large language model.'
            : 'Free generator tools with instant structured templates. Live AI generation is available when an LLM provider is enabled on the backend.'}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 sm:mt-16">
          {/* Tool Selection List */}
          <div className="space-y-3">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => { setActiveTool(tool); setOutput(''); setInput(''); }}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 border backdrop-blur-md ${
                  activeTool.id === tool.id
                    ? 'bg-[#101010] border-[#E1E0CC]/30 shadow-lg shadow-[#E1E0CC]/5'
                    : 'bg-[#101010]/40 border-white/5 hover:border-[#E1E0CC]/20 hover:bg-[#121212]/60'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${tool.gradient} border border-[#E1E0CC]/10 flex items-center justify-center shadow-inner`}>
                    <tool.icon className="w-5 h-5 text-[#E1E0CC]" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-[#E1E0CC]">{tool.name}</div>
                    <div className="text-xs text-gray-400 mt-0.5">{tool.description}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Dynamic Interactive Interface Box */}
          <div className="lg:col-span-2">
            <GlassCard className="bg-[#101010]/60 border-[#E1E0CC]/10 p-6 sm:p-8 rounded-2xl md:rounded-[2rem]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${activeTool.gradient} border border-[#E1E0CC]/10 flex items-center justify-center shadow-lg`}>
                    <activeTool.icon className="w-6 h-6 text-[#E1E0CC]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#E1E0CC]">{activeTool.name}</h3>
                    <p className="text-sm text-gray-400">{activeTool.description}</p>
                  </div>
                </div>
              </div>

              {/* Text Input Block */}
              <div className="mb-5">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={activeTool.placeholder}
                  rows={4}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-[#E1E0CC] placeholder-gray-500 focus:outline-none focus:border-[#E1E0CC]/40 focus:ring-1 focus:ring-[#E1E0CC]/10 transition-all duration-200 resize-none"
                />
              </div>

              {/* Primary Interactive Trigger CTA */}
              <button
                onClick={handleGenerate}
                disabled={!input.trim() || isGenerating}
                style={{ backgroundColor: !input.trim() || isGenerating ? '#202020' : '#E1E0CC' }}
                className={`w-full py-3.5 rounded-xl font-medium text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 mb-6 ${
                  !input.trim() || isGenerating 
                    ? 'text-gray-500 cursor-not-allowed border border-white/5' 
                    : 'text-black hover:opacity-90 hover:shadow-xl hover:shadow-[#E1E0CC]/5 active:scale-[0.99]'
                }`}
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-gray-500" />
                    <span>Generating Content...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>{liveAI ? 'Generate with AI' : 'Generate Template'}</span>
                  </>
                )}
              </button>

              {/* Render Output Workspace Area */}
              {output && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="relative mt-4"
                >
                  <div className="bg-black/50 border border-[#E1E0CC]/10 rounded-xl p-5 shadow-inner">
                    <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-3">
                      {outputMode === 'live' ? 'Generated by live AI' : 'Structured template preview'}
                    </p>
                    <pre className="text-sm text-gray-300 whitespace-pre-wrap font-sans leading-relaxed selection:bg-[#E1E0CC]/20">{output}</pre>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-[#101010] border border-neutral-800 text-xs text-gray-400 hover:text-[#E1E0CC] hover:bg-neutral-900 transition-all flex items-center gap-1.5"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Block</span>
                      </>
                    )}
                  </button>
                </motion.div>
              )}
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}