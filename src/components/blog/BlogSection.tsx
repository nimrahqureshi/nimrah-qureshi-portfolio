import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
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
    <section id="blog" className="relative min-h-screen bg-black py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* Visual Arts Aesthetic Elements */}
      {/* 1. Fine Noise Overlay */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none z-0" />
      
      {/* 2. Premium Ambient Backdrop Shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#E1E0CC]/[0.03] blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-10 w-[350px] h-[350px] bg-[#212121]/50 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Studio-Grade Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 max-w-3xl mx-auto">
          {/* Small Label tag */}
          <p className="text-[#E1E0CC]/60 text-[10px] sm:text-xs tracking-widest uppercase mb-3 font-medium">
            Publications
          </p>
          
          {/* Main Bold Section Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Blog
          </h2>

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

        {/* Categories (Minimalist Warm Tint Active States) */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-16 relative z-20">
          {blogCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setVisibleCount(4); }}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#E1E0CC] text-black shadow-sm'
                  : 'bg-[#212121] text-gray-400 hover:text-[#E1E0CC] hover:bg-[#2a2a2a]'
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
              <GlassCard className="h-full bg-[#101010] border border-white/[0.03] hover:border-white/[0.08] p-5 sm:p-6 rounded-2xl md:rounded-[1.5rem] flex flex-col justify-between group cursor-pointer transition-all duration-300">
                <div>
                  {/* Image Canvas Container */}
                  <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden mb-6 bg-[#212121]">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500 ease-out"
                    />
                    {/* Floating Category Label */}
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-md text-[11px] font-medium tracking-wide bg-black/70 text-[#E1E0CC] backdrop-blur-md border border-white/[0.05]">
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
                      <span key={tag} className="flex items-center gap-1 px-2.5 py-1 rounded text-[11px] bg-[#1c1c1c] text-gray-400 border border-white/[0.02]">
                        <Tag className="w-3 h-3 text-gray-600" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="inline-flex items-center gap-2 text-[#E1E0CC]/80 group-hover:text-[#E1E0CC] font-medium transition-colors text-sm pt-2 border-t border-white/[0.03] w-full">
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
              className="px-8 py-3 bg-[#101010] border border-white/[0.05] text-[#E1E0CC] hover:text-white hover:bg-[#161616] hover:border-white/[0.1] rounded-xl text-sm font-medium tracking-wide transition-all duration-300"
            >
              Load More Articles
            </button>
          </div>
        )}
      </div>
    </section>
  );
}