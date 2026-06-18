import SEOHead from '@/components/seo/SEOHead';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import AboutSection from '@/components/about/AboutSection';
import ServicesSection from '@/components/services/ServicesSection';
import PortfolioSection from '@/components/portfolio/PortfolioSection';
import CaseStudiesSection from '@/components/case-studies/CaseStudiesSection';
import AIToolsSection from '@/components/ai-tools/AIToolsSection';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import BlogSection from '@/components/blog/BlogSection';
import PricingSection from '@/components/pricing/PricingSection';
import ContactSection from '@/components/contact/ContactSection';

export default function Home() {
  return (
    <>
      <SEOHead
        title="Nimrah Qureshi | AI Engineer & Full-Stack Developer"
        description="AI Engineer & Full-Stack Developer in Karachi. Building AI chatbots, AI agents, RAG apps, automation systems, and modern web applications with OpenAI, LangChain, React & Next.js."
        url="https://nimrah-qureshi-portfolio.vercel.app/"
      />
      <Hero />
      <Stats />
      <AIToolsSection />
      <TestimonialsSection />
      <BlogSection />
      <PricingSection />
      <ContactSection />
    </>
  );
}