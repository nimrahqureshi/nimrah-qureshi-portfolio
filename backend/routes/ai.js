import express from 'express';
import rateLimit from 'express-rate-limit';

/**
 * Real LLM proxy. The provider is chosen via env so the site owner can use
 * OpenAI, Anthropic (Claude), Google Gemini, Groq, or OpenRouter with one key:
 *
 *   AI_PROVIDER = openai | anthropic | gemini | groq | openrouter
 *   AI_API_KEY  = <provider api key>
 *   AI_MODEL    = optional model override
 *
 * If no key is configured the endpoints return 503 with { configured: false }
 * and the frontend falls back to its built-in FAQ knowledge base — clearly
 * labeled as such. Responses are never hardcoded or simulated as AI.
 */
const router = express.Router();

const aiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Too many AI requests — please slow down a little.' },
});

const DEFAULT_MODELS = {
  openai: 'gpt-4o-mini',
  anthropic: 'claude-haiku-4-5-20251001',
  gemini: 'gemini-2.0-flash',
  groq: 'llama-3.3-70b-versatile',
  openrouter: 'openai/gpt-4o-mini',
};

const SITE_CONTEXT = `You are the website assistant for Nimrah Qureshi, an AI Engineer & Full-Stack Developer based in Karachi, Pakistan, available worldwide (remote).
Facts you may rely on:
- Services: AI chatbot development, AI agents & automation, business workflow automation, full-stack development (React, Next.js, Node.js, Express, MongoDB, PostgreSQL), RAG applications, OpenAI & LangChain integrations, SaaS MVPs.
- Founder of two AI brands: Neuraloft and Brain Link AI (BLAI).
- Certifications: Certified AI, Metaverse & Web3.0 Developer (GIAIC); Certified Agentic & Robotic AI Engineer (PIAIC).
- Pricing starts at $2,999 (Starter), $7,999 (Business), custom Enterprise quotes.
- Contact: the contact form on the site, or nimrahqureshi13@gmail.com.
Be concise, friendly, and honest. If asked something outside this scope, say so and point the visitor to the contact form. Never invent client names, metrics, or testimonials.`;

function providerConfig() {
  const provider = (process.env.AI_PROVIDER || '').toLowerCase();
  const apiKey = process.env.AI_API_KEY;
  if (!provider || !apiKey || !DEFAULT_MODELS[provider]) return null;
  return { provider, apiKey, model: process.env.AI_MODEL || DEFAULT_MODELS[provider] };
}

async function completeChat({ provider, apiKey, model }, messages, maxTokens = 500) {
  const system = SITE_CONTEXT;

  if (provider === 'anthropic') {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': apiKey, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model, max_tokens: maxTokens, system, messages }),
    });
    const data = await r.json();
    if (!r.ok) throw new Error(data?.error?.message || `Anthropic error ${r.status}`);
    return (data.content || []).filter(b => b.type === 'text').map(b => b.text).join('\n');
  }

  if (provider === 'gemini') {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
    const contents = messages.map(m => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] }));
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ contents, systemInstruction: { parts: [{ text: system }] }, generationConfig: { maxOutputTokens: maxTokens } }),
    });
    const data = await r.json();
    if (!r.ok) throw new Error(data?.error?.message || `Gemini error ${r.status}`);
    return data.candidates?.[0]?.content?.parts?.map(p => p.text).join('') || '';
  }

  // OpenAI-compatible chat completions: openai, groq, openrouter
  const bases = {
    openai: 'https://api.openai.com/v1',
    groq: 'https://api.groq.com/openai/v1',
    openrouter: 'https://openrouter.ai/api/v1',
  };
  const r = await fetch(`${bases[provider]}/chat/completions`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({ model, max_tokens: maxTokens, messages: [{ role: 'system', content: system }, ...messages] }),
  });
  const data = await r.json();
  if (!r.ok) throw new Error(data?.error?.message || `${provider} error ${r.status}`);
  return data.choices?.[0]?.message?.content || '';
}

const sanitizeMessages = (raw) => {
  if (!Array.isArray(raw)) return null;
  const msgs = raw
    .filter(m => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
    .slice(-12) // keep the conversation window bounded
    .map(m => ({ role: m.role, content: m.content.slice(0, 2000) }));
  return msgs.length && msgs[msgs.length - 1].role === 'user' ? msgs : null;
};

// GET /api/ai/status — lets the frontend know whether live AI is available.
router.get('/status', (_req, res) => {
  res.json({ configured: Boolean(providerConfig()) });
});

// POST /api/ai/chat — { messages: [{role, content}, ...] }
router.post('/chat', aiLimiter, async (req, res, next) => {
  try {
    const cfg = providerConfig();
    if (!cfg) return res.status(503).json({ configured: false, message: 'Live AI is not configured.' });
    const messages = sanitizeMessages(req.body.messages);
    if (!messages) return res.status(400).json({ message: 'messages must end with a user message.' });
    const reply = await completeChat(cfg, messages, 500);
    res.json({ reply });
  } catch (err) { next(err); }
});

// POST /api/ai/generate — { tool, input } for the AI Tools page.
const TOOL_PROMPTS = {
  'article-outline': (input) => `Write a well-structured article outline with a short intro paragraph about: ${input}. Use markdown headings.`,
  'social-post': (input) => `Write an engaging LinkedIn-style social media post (with tasteful emojis and 4-5 hashtags) about: ${input}.`,
  'prompt-optimizer': (input) => `Rewrite the following into a high-quality, structured prompt for a large language model (role, context, task, constraints, output format): ${input}.`,
  'email-draft': (input) => `Draft a concise, professional outreach email about: ${input}. Include a subject line.`,
  'idea-generator': (input) => `Generate 5 concrete, practical AI product/automation ideas for this industry or niche, each with a one-line value proposition: ${input}.`,
  'content-brief': (input) => `Create a content brief (audience, angle, structure, key points, CTA) for: ${input}.`,
};

router.post('/generate', aiLimiter, async (req, res, next) => {
  try {
    const cfg = providerConfig();
    if (!cfg) return res.status(503).json({ configured: false, message: 'Live AI is not configured.' });
    const tool = typeof req.body.tool === 'string' ? req.body.tool : '';
    const input = typeof req.body.input === 'string' ? req.body.input.trim().slice(0, 1500) : '';
    const makePrompt = TOOL_PROMPTS[tool];
    if (!makePrompt || !input) return res.status(400).json({ message: 'A known tool and non-empty input are required.' });
    const output = await completeChat(cfg, [{ role: 'user', content: makePrompt(input) }], 900);
    res.json({ output });
  } catch (err) { next(err); }
});

export default router;
