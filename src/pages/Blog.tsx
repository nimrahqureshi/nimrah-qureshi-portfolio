import SEOHead from '@/components/seo/SEOHead';
import PageShell from '@/components/layout/PageShell';
import BlogSection from '@/components/blog/BlogSection';

export default function Blog() {
  return (
    <PageShell>
      <SEOHead
        title="Blog | Nimrah Qureshi — AI Engineering & Automation"
        description="Articles on AI engineering, chatbots, RAG, LangChain, automation, and full-stack development by Nimrah Qureshi."
        url="https://nimrah-qureshi-portfolio.vercel.app/blog"
      />
      <BlogSection />
    </PageShell>
  );
}
