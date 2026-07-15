import SEOHead from '@/components/seo/SEOHead';
import PageShell from '@/components/layout/PageShell';
import PricingSection from '@/components/pricing/PricingSection';

export default function Pricing() {
  return (
    <PageShell>
      <SEOHead
        title="Pricing | Nimrah Qureshi"
        description="Transparent pricing for AI chatbot development, automation systems, and full-stack projects."
        path="/pricing"
      />
      <PricingSection />
    </PageShell>
  );
}
