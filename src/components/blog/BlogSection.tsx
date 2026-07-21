import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag, Sparkles } from 'lucide-react';
import { WordsPullUpMultiStyle } from "@/components/effects/WordsPullUpMultiStyle";
import GlassCard from '@/components/effects/GlassCard';
import { blogPosts, blogCategories } from '@/data/blogPosts';

export default function BlogSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(4);

  const filtered = activeCategory === 'All'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory);

  const displayed = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <section 
      id="blog" 
      className="relative min-h-screen py-24 bg-black overflow-hidden"
      style={{ overflowX: 'clip' }}
    >
      {/* PRISMA INSPIRED LUXURY BACKGROUND SYSTEM (Matched with About Section) */}
      {/* Studio Noise & Texture Map Layer */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

      {/* High-End Tech Grid Mask Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#E1E0CC05_1px,transparent_1px),linear-gradient(to_bottom,#E1E0CC05_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" 
      />
      
      {/* Ambient Premium Soft Light Radiance Orbs */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#E1E0CC]/5 rounded-full blur-[140px] animate-pulse pointer-events-none" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-slate-800/40 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '2.5s' }} />
      
      {/* Micro-Flares and Cinematic Structural Anchors */}
      <div className="absolute top-36 right-24 w-1.5 h-1.5 bg-[#E1E0CC] rounded-full animate-float opacity-30" style={{ animationDelay: '0.5s' }} />
      <div className="absolute top-16 left-12 w-1 h-1 bg-gray-400 rounded-full animate-float opacity-40" style={{ animationDelay: '1.2s' }} />
      <div className="absolute bottom-36 left-36 w-2 h-2 bg-slate-600 rounded-full animate-float opacity-20" style={{ animationDelay: '2.2s' }} />
      <div className="absolute bottom-16 right-16 w-1.5 h-1.5 bg-gray-500 rounded-full animate-float opacity-30" style={{ animationDelay: '1.7s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Studio Section Title Badge */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#101010] border border-[#E1E0CC]/10 mb-4 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E1E0CC]" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#E1E0CC]/80">
              Publications
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-medium tracking-tight text-white uppercase mb-6"
          >
            Blog
          </motion.h2>

          {/* Descriptive Animated Subtitle */}
          <div className="text-sm sm:text-base md:text-lg font-light leading-relaxed tracking-normal max-w-2xl mx-auto text-gray-400">
            <WordsPullUpMultiStyle
              segments={[
                { 
                  text: "Insights, tutorials, and thoughts on AI, development, automation, and building a tech career.", 
                  className: "font-normal text-gray-400 text-center" 
                },
              ]}
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center">
  <div className="h-px w-20 rounded-full bg-gradient-to-r from-transparent via-[#E1E0CC] to-transparent" />
</div>

        {/* Categories (Minimalist Warm Tint Active States) */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-16 relative z-20">
          {blogCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setVisibleCount(4); }}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#E1E0CC] text-black shadow-sm'
                  : 'bg-[#101010] text-gray-400 border border-neutral-900 hover:text-[#E1E0CC] hover:bg-white/[0.02] hover:border-[#E1E0CC]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid (Earthy Contrast Dark Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {displayed.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ scale: 0.96, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <GlassCard className="h-full bg-[#101010] border border-neutral-900 hover:border-[#E1E0CC]/20 p-5 sm:p-6 rounded-2xl md:rounded-[1.5rem] flex flex-col justify-between group cursor-pointer transition-all duration-300">
                <div>
                  {/* Image Canvas Container */}
                  <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden mb-6 bg-[#212121]">
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        // Broken/offline image fallback
                        e.currentTarget.style.display = 'none';
                      }}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500 ease-out"
                    />
                    {/* Floating Category Label */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-md text-[11px] font-medium tracking-wide bg-black/70 text-[#E1E0CC] backdrop-blur-md border border-[#E1E0CC]/10">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Metadata Row */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-gray-600" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-gray-600" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title & Excerpt */}
                  <h3 className="text-lg sm:text-xl font-medium text-[#E1E0CC] mb-3 group-hover:text-white transition-colors duration-200 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>

                {/* Tags & Action Row */}
                <div>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="flex items-center gap-1 px-2.5 py-1 rounded text-[11px] bg-[#1c1c1c] text-gray-400 border border-neutral-900">
                        <Tag className="w-3 h-3 text-gray-600" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-2 text-[#E1E0CC]/80 group-hover:text-[#E1E0CC] font-medium transition-colors text-sm pt-4 border-t border-neutral-900 w-full">
                    Read More 
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Load More Option (Minimalist Framed Button) */}
        {hasMore && (
          <div className="text-center mt-16">
            <button
              onClick={() => setVisibleCount(prev => prev + 4)}
              className="px-8 py-3 bg-[#101010] border border-neutral-900 text-[#E1E0CC] hover:text-white hover:bg-white/[0.02] hover:border-[#E1E0CC]/20 rounded-xl text-sm font-medium tracking-wide transition-all duration-300"
            >
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
}