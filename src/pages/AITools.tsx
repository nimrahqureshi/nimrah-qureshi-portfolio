import SEOHead from '@/components/seo/SEOHead';
import PageShell from '@/components/layout/PageShell';
import AIToolsSection from '@/components/ai-tools/AIToolsSection';

export default function AITools() {
  return (
    <PageShell>
      <SEOHead
        title="AI Tools | Nimrah Qureshi"
        description="Free AI tools: blog generator, caption generator, prompt generator, email writer, and idea generator."
        url="https://nimrah-qureshi-portfolio.vercel.app/ai-tools"
      />
      <AIToolsSection />
    </PageShell>
  );
}