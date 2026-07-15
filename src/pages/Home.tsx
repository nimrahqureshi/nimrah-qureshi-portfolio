import SEOHead from '@/components/seo/SEOHead';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';

export default function Home() {
  return (
    <>
      <SEOHead
        title="Nimrah Qureshi | AI Engineer & Full-Stack Developer"
        description="AI Engineer & Full-Stack Developer in Karachi. Building AI chatbots, AI agents, RAG apps, automation systems, and modern web applications with OpenAI, LangChain, React & Next.js."
        path="/"
      />
      <Hero />
      <Stats />
    </>
  );
}
