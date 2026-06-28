import SEOHead from '@/components/seo/SEOHead';
import PageShell from '@/components/layout/PageShell';
import ServicesSection from '@/components/services/ServicesSection';

export default function Services() {
  return (
    <PageShell>
      <SEOHead
        title="Services | AI Chatbots, Agents & Automation — Nimrah Qureshi"
        description="AI chatbot development, AI agents, RAG applications, OpenAI & LangChain integrations, automation systems, and full-stack Next.js/React/Node.js development."
        url="https://nimrah-qureshi-portfolio.vercel.app/services"
      />
      <ServicesSection />
    </PageShell>
  );
}
