import { Helmet } from 'react-helmet-async';
import SEOHead from '@/components/seo/SEOHead';
import { services } from '@/data/services';
import { SITE_URL } from '@/lib/site';
import PageShell from '@/components/layout/PageShell';
import ServicesSection from '@/components/services/ServicesSection';


const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: services.map((s, i) => ({
    '@type': 'Service',
    position: i + 1,
    name: s.title,
    description: s.description,
    provider: { '@type': 'Person', name: 'Nimrah Qureshi', url: SITE_URL },
    areaServed: 'Worldwide',
    serviceType: s.title,
  })),
};

export default function Services() {
  return (
    <PageShell>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(servicesSchema)}</script>
      </Helmet>
      <SEOHead
        title="Services | AI Chatbots, Agents & Automation — Nimrah Qureshi"
        description="AI chatbot development, AI agents, RAG applications, OpenAI & LangChain integrations, automation systems, and full-stack Next.js/React/Node.js development."
        path="/services"
      />
      <ServicesSection />
    </PageShell>
  );
}
