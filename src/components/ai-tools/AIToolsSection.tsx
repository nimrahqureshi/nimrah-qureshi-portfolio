import { useState } from 'react';
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
    gradient: 'from-purple-500 to-pink-500',
    placeholder: 'Enter a blog topic (e.g., "Benefits of AI Chatbots for E-commerce")',
    generate: (topic) => `# ${topic}\n\n## Introduction\nIn today's rapidly evolving digital landscape, ${topic.toLowerCase()} has become a critical consideration for businesses looking to stay competitive.\n\n## Why This Matters\nThe adoption of AI-powered solutions is no longer optional—it's a necessity for businesses that want to thrive in the modern marketplace.\n\n## Key Benefits\n1. **Increased Efficiency**: Automate repetitive tasks and free up human resources\n2. **Cost Reduction**: Reduce operational costs by up to 60%\n3. **24/7 Availability**: Provide round-the-clock service to customers\n4. **Scalability**: Handle growing demand without proportional resource increases\n\n## Implementation Strategy\nSuccessful implementation requires careful planning, the right technology stack, and a clear understanding of your business objectives.\n\n## Conclusion\nEmbracing ${topic.toLowerCase()} is a strategic move that can transform your business operations and drive significant growth.\n\n---\n*This article was AI-generated. For expert implementation, contact Nimrah Qureshi.*`
  },
  {
    id: 'caption',
    name: 'AI Caption Generator',
    description: 'Create engaging social media captions',
    icon: MessageSquare,
    gradient: 'from-cyan-400 to-blue-500',
    placeholder: 'Describe what your post is about...',
    generate: (desc) => `🔥 **${desc.split(' ').slice(0, 3).join(' ')} - The Future is Here!**\n\n✨ Ready to transform your business?\n\n🚀 ${desc}\n\n💡 Here's why this matters:\n• Stay ahead of the competition\n• Leverage cutting-edge technology\n• Drive real business results\n\n👇 Drop a comment or DM me to learn more!\n\n#AI #Innovation #BusinessGrowth #Technology #Future`
  },
  {
    id: 'prompt',
    name: 'AI Prompt Engineer',
    description: 'Craft effective prompts for AI models',
    icon: PenTool,
    gradient: 'from-green-500 to-emerald-500',
    placeholder: 'Describe what you want the AI to do...',
    generate: (desc) => `**Optimized Prompt for: ${desc}**\n\n---\n\n**Role:** You are an expert AI assistant specializing in ${desc.toLowerCase()}.\n\n**Context:** You are helping a professional who needs detailed, actionable information about this topic.\n\n**Task:** ${desc}\n\n**Requirements:**\n1. Provide comprehensive, well-structured information\n2. Include practical examples where relevant\n3. Cite best practices and industry standards\n4. Offer actionable next steps\n5. Highlight potential challenges and solutions\n\n**Output Format:** Use clear headings, bullet points, and concise paragraphs. Include a summary at the end.\n\n**Tone:** Professional, informative, and engaging.`
  },
  {
    id: 'email',
    name: 'AI Email Writer',
    description: 'Write professional emails for any occasion',
    icon: Mail,
    gradient: 'from-orange-500 to-red-500',
    placeholder: 'Describe the email purpose and recipient...',
    generate: (desc) => `**Subject:** ${desc.split(' ').slice(0, 5).join(' ')}...\n\nDear [Recipient],\n\nI hope this message finds you well.\n\nI'm reaching out regarding ${desc.toLowerCase()}. I believe this presents an excellent opportunity for us to collaborate and achieve remarkable results.\n\n**Key Points:**\n• We have extensive experience in this area\n• Our solutions are tailored to your specific needs\n• We're committed to delivering exceptional value\n\nI would love to schedule a brief call to discuss this further. Please let me know what time works best for you.\n\nBest regards,\nNimrah Qureshi\nAI Engineer & Full-Stack Developer`
  },
  {
    id: 'idea',
    name: 'AI Idea Generator',
    description: 'Generate innovative business ideas',
    icon: Lightbulb,
    gradient: 'from-yellow-500 to-orange-500',
    placeholder: 'Enter an industry or niche...',
    generate: (industry) => `**🚀 Innovative Ideas for ${industry}**\n\n---\n\n**Idea 1: AI-Powered ${industry} Assistant**\nAn intelligent assistant that automates routine tasks and provides actionable insights.\n\n**Idea 2: Smart ${industry} Analytics Platform**\nA comprehensive analytics solution leveraging machine learning for predictive insights.\n\n**Idea 3: Automated ${industry} Workflow System**\nEnd-to-end automation platform connecting all ${industry.toLowerCase()} operations.\n\n**Idea 4: ${industry} Customer Intelligence Bot**\nAn AI chatbot that understands customer needs and provides personalized recommendations.\n\n**Idea 5: ${industry} Market Prediction Tool**\nAdvanced AI algorithms that predict market trends and enable proactive decision-making.\n\n---\n**Want to bring these ideas to life?** Let's discuss your project!`
  },
  {
    id: 'content',
    name: 'AI Content Assistant',
    description: 'Get help with any content creation task',
    icon: Bot,
    gradient: 'from-pink-500 to-purple-500',
    placeholder: 'Describe the content you need help with...',
    generate: (desc) => `**📝 Content Brief: ${desc}**\n\n---\n\n**Target Audience:** Primary stakeholders and decision-makers interested in this topic.\n\n**Content Type:** Professional/Educational\n\n**Structure:**\n\n**1. Hook** - Start with a compelling statistic or question related to ${desc.toLowerCase()}\n\n**2. Problem Statement** - Identify the key challenges your audience faces\n\n**3. Solution Overview** - Present your approach in clear, benefit-driven language\n\n**4. Key Benefits:**\n• Time savings and efficiency gains\n• Cost reduction and ROI\n• Competitive advantage\n• Scalability and future-proofing\n\n**5. Implementation Roadmap**\n• Phase 1: Assessment and Planning\n• Phase 2: Development and Testing\n• Phase 3: Deployment and Optimization\n\n**6. Call to Action** - Encourage the reader to take the next step\n\n---\n**Need professional content?** I can help you create compelling, conversion-focused content!`
  }
];

export default function AIToolsSection() {
  const [activeTool, setActiveTool] = useState(tools[0]);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!input.trim()) return;
    setIsGenerating(true);
    
    setTimeout(() => {
      setOutput(activeTool.generate(input));
      setIsGenerating(false);
    }, 1000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-tools" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 neural-bg" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading 
          title="AI Tools"
          subtitle="Free AI-powered tools to help you generate content, ideas, and more. Powered by cutting-edge AI."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Tool Selection */}
          <div className="space-y-3">
            {tools.map((tool) => (
              <button
                key={tool.id}
                onClick={() => { setActiveTool(tool); setOutput(''); setInput(''); }}
                className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                  activeTool.id === tool.id
                    ? 'glass-card border-purple-500/40'
                    : 'glass hover:border-purple-500/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${tool.gradient} flex items-center justify-center`}>
                    <tool.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{tool.name}</div>
                    <div className="text-xs text-muted">{tool.description}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Tool Interface */}
          <div className="lg:col-span-2">
            <GlassCard>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${activeTool.gradient} flex items-center justify-center`}>
                  <activeTool.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{activeTool.name}</h3>
                  <p className="text-sm text-muted">{activeTool.description}</p>
                </div>
              </div>

              {/* Input */}
              <div className="mb-4">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={activeTool.placeholder}
                  rows={3}
                  className="w-full bg-white/5 border border-purple-500/20 rounded-xl px-4 py-3 text-sm text-white placeholder-muted focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
                />
              </div>

              <button
                onClick={handleGenerate}
                disabled={!input.trim() || isGenerating}
                className="w-full py-3 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2 mb-4"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Generate with AI
                  </>
                )}
              </button>

              {/* Output */}
              {output && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="relative"
                >
                  <div className="bg-white/5 border border-purple-500/20 rounded-xl p-4">
                    <pre className="text-sm text-muted whitespace-pre-wrap font-sans">{output}</pre>
                  </div>
                  <button
                    onClick={handleCopy}
                    className="absolute top-3 right-3 px-3 py-1.5 rounded-lg bg-white/5 text-xs text-muted hover:text-white hover:bg-white/10 transition-all flex items-center gap-1"
                  >
                    {copied ? (
                      <><Check className="w-3.5 h-3.5 text-green-400" /> Copied</>
                    ) : (
                      <><Copy className="w-3.5 h-3.5" /> Copy</>
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
