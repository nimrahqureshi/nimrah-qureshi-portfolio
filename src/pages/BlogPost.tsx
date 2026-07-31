import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Calendar, Clock, Link2, Tag } from 'lucide-react';
import { FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import toast from 'react-hot-toast';
import SEOHead from '@/components/seo/SEOHead';
import PageShell from '@/components/layout/PageShell';
import GlassCard from '@/components/effects/GlassCard';
import { blogPosts, formatPostDate, relatedPosts } from '@/data/blogPosts';
import { SITE_URL } from '@/lib/site';

export default function BlogPost() {
  const { slug = '' } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <PageShell>
        <SEOHead
          title="Article Not Found | Nimrah Qureshi"
          description="This article could not be found."
          path={`/blog/${slug}`}
          noindex
        />
        <section className="min-h-[60vh] flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-medium text-white mb-4">Article not found</h1>
            <p className="text-gray-400 mb-8">This post may have been moved or renamed.</p>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#E1E0CC] text-black rounded-full text-sm font-medium uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </section>
      </PageShell>
    );
  }

  const url = `${SITE_URL}/blog/${post.slug}`;
  const related = relatedPosts(post.slug);

  const share = {
    x: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success('Link copied!');
    } catch {
      toast.error('Could not copy the link.');
    }
  };

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Person', name: post.author, url: SITE_URL },
    publisher: { '@type': 'Person', name: post.author },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    keywords: post.tags.join(', '),
  };

  return (
    <PageShell>
      <SEOHead
        title={`${post.title} | Nimrah Qureshi`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={post.image}
        type="article"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      </Helmet>

      <article className="relative bg-black py-24 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ overflowX: 'clip' }}>
        {/* Ambient background, matching the site's studio system */}
        <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#E1E0CC]/5 rounded-full blur-[140px] animate-pulse pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#E1E0CC] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" /> All articles
            </Link>

            {/* Header */}
            <span className="inline-block px-3 py-1 rounded-md text-[11px] font-medium tracking-wide bg-[#101010] text-[#E1E0CC] border border-[#E1E0CC]/10 mb-5">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight mb-5">
              {post.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-400 font-light leading-relaxed mb-6">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-gray-500 pb-8 border-b border-neutral-900">
              <span className="text-gray-400">{post.author}</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-gray-600" />
                <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-gray-600" />
                {post.readTime}
              </span>
            </div>

            {/* Cover image */}
            <div className="relative h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden my-10 bg-[#101010]">
              <img
                src={post.image}
                alt={post.title}
                width={800}
                height={400}
                loading="eager"
                decoding="async"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                className="w-full h-full object-cover opacity-90"
              />
            </div>

            {/* Body */}
            <div className="space-y-8">
              {post.sections.map((section, i) => (
                <section key={i}>
                  {section.heading && (
                    <h2 className="text-xl sm:text-2xl font-medium text-[#E1E0CC] mb-4 tracking-tight">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs?.map((para, j) => (
                    <p key={j} className="text-[15px] sm:text-base text-gray-300 font-light leading-relaxed mb-4">
                      {para}
                    </p>
                  ))}
                  {section.list && (
                    <ul className="space-y-3 my-4">
                      {section.list.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-[15px] sm:text-base text-gray-300 font-light leading-relaxed">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#E1E0CC]/70 flex-shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-10">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 px-2.5 py-1 rounded text-[11px] bg-[#1c1c1c] text-gray-400 border border-neutral-900"
                >
                  <Tag className="w-3 h-3 text-gray-600" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Share */}
            <div className="flex flex-wrap items-center gap-3 mt-8 pt-8 border-t border-neutral-900">
              <span className="text-xs uppercase tracking-widest text-gray-500 mr-1">Share</span>
              <a
                href={share.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on X"
                className="w-9 h-9 rounded-xl bg-[#101010] border border-neutral-900 flex items-center justify-center text-gray-400 hover:text-[#E1E0CC] hover:border-[#E1E0CC]/20 transition-all"
              >
                <FaXTwitter className="w-4 h-4" />
              </a>
              <a
                href={share.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on LinkedIn"
                className="w-9 h-9 rounded-xl bg-[#101010] border border-neutral-900 flex items-center justify-center text-gray-400 hover:text-[#E1E0CC] hover:border-[#E1E0CC]/20 transition-all"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
              <button
                onClick={copyLink}
                aria-label="Copy article link"
                className="w-9 h-9 rounded-xl bg-[#101010] border border-neutral-900 flex items-center justify-center text-gray-400 hover:text-[#E1E0CC] hover:border-[#E1E0CC]/20 transition-all"
              >
                <Link2 className="w-4 h-4" />
              </button>
            </div>

            {/* CTA */}
            <GlassCard className="mt-12 bg-[#101010] border border-neutral-900 rounded-2xl p-6 sm:p-8 text-center">
              <h2 className="text-lg sm:text-xl font-medium text-[#E1E0CC] mb-2">
                Building something like this?
              </h2>
              <p className="text-sm text-gray-400 mb-6 max-w-md mx-auto">
                I help businesses ship AI chatbots, automation systems, and full-stack products. Let's talk about yours.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#E1E0CC] text-black rounded-full text-xs font-medium uppercase tracking-wider hover:opacity-90 transition-opacity"
              >
                Start a conversation <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </GlassCard>

            {/* Related posts */}
            {related.length > 0 && (
              <div className="mt-16">
                <h2 className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-6">Related articles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      to={`/blog/${r.slug}`}
                      className="group block bg-[#101010] border border-neutral-900 hover:border-[#E1E0CC]/20 rounded-xl p-4 transition-all duration-300"
                    >
                      <span className="text-[10px] uppercase tracking-wider text-[#C8B68A]">{r.category}</span>
                      <h3 className="text-sm font-medium text-[#E1E0CC] group-hover:text-white mt-1.5 leading-snug line-clamp-2 transition-colors">
                        {r.title}
                      </h3>
                      <span className="text-[11px] text-gray-500 mt-2 block">{r.readTime}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </article>
    </PageShell>
  );
}
