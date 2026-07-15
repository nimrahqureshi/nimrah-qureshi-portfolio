import SEOHead from '@/components/seo/SEOHead';
import PageShell from '@/components/layout/PageShell';
import CaseStudiesSection from '@/components/case-studies/CaseStudiesSection';

export default function CaseStudies() {
  return (
    <PageShell>
      <SEOHead
        title="Case Studies | Nimrah Qureshi"
        description="In-depth case studies of AI chatbot, automation, and full-stack projects delivered by Nimrah Qureshi."
        path="/case-studies"
      />
      <CaseStudiesSection />
    </PageShell>
  );
}
