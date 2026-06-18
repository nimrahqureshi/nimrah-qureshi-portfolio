import SEOHead from '@/components/seo/SEOHead';
import PageShell from '@/components/layout/PageShell';
import PortfolioSection from '@/components/portfolio/PortfolioSection';

export default function Projects() {
  return (
    <PageShell>
      <SEOHead
        title="Projects | Nimrah Qureshi — AI & Full-Stack Portfolio"
        description="Explore projects by Nimrah Qureshi: Neuraloft, Brain Link AI, AI Chatbot Assistant, PDF Chatbot, WhatsApp Business Bot, AI Automation Dashboard, and a SaaS platform."
        url="https://nimrah-qureshi-portfolio.vercel.app/projects"
      />
      <PortfolioSection />
    </PageShell>
  );
}