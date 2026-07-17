import SEOHead from '@/components/seo/SEOHead';
import PageShell from '@/components/layout/PageShell';
import AboutSection from '@/components/about/AboutSection';

export default function About() {
  return (
    <PageShell>
      <SEOHead
        title="About Nimrah Qureshi | AI Engineer & Full-Stack Developer"
        description="Learn about Nimrah Qureshi, an AI Engineer and Full-Stack Developer from Karachi, founder of Neuraloft, specializing in AI chatbots, agents, and automation."
        path="/about"
      />
      <AboutSection />
    </PageShell>
  );
}
