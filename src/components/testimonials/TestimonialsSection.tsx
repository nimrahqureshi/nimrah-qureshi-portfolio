import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/effects/SectionHeading';
import GlassCard from '@/components/effects/GlassCard';
import { testimonials as allTestimonials } from '@/data/testimonials';

// Placeholder entries (isSample) are never rendered; the section disappears
// entirely until at least one real testimonial exists.
const testimonials = allTestimonials.filter((t) => !t.isSample);

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = testimonials[activeIndex];

  if (testimonials.length === 0) return null;

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative bg-black py-20 sm:py-28 md:py-36 px-4 sm:px-6 md:px-10 overflow-hidden">
      {/* Premium Visual Arts Background Architecture Synchronized From Case Studies */}
      {/* 1. Fine Noise Layout Overlay */}
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none z-0" />
      
      {/* 2. Sophisticated Warm Ambient Light Vectors (No Loud Videos) */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#E1E0CC]/[0.02] blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-[#212121]/60 blur-[110px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionHeading 
          title="Testimonials"
          subtitle="What clients say about working with me and the results we've achieved together."
        />

        {/* Grid Container styled with clean spacing updates */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <GlassCard className="bg-[#101010] rounded-2xl p-4 sm:p-5 md:p-6 h-full flex flex-col justify-between border border-white/[0.03] hover:border-white/[0.08] shadow-2xl group transition-all duration-300">
                <div>
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-[#E1E0CC]/30 mb-4 group-hover:text-[#E1E0CC]/50 transition-colors duration-300" />

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                    "{t.content}"
                  </p>
                </div>

                <div>
                  <div className="text-xs text-[#C8B68A] font-medium mb-4 tracking-wide uppercase">
                    {t.highlight}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-white/[0.03]">
                    {t.image ? (
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-10 h-10 rounded-full object-cover ring-1 ring-white/10"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E1E0CC] to-[#C8B68A] flex items-center justify-center text-black text-sm font-semibold">
                        {t.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <div className="text-sm font-medium text-[#E1E0CC] group-hover:text-white transition-colors duration-200">{t.name}</div>
                      <div className="text-xs text-gray-500">{t.role}, {t.company}</div>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Featured Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <GlassCard className="bg-[#101010] border border-white/[0.02] hover:border-white/[0.05] rounded-2xl md:rounded-[2rem] py-10 sm:py-14 md:py-16 px-6 sm:px-10 md:px-16 shadow-2xl transition-all duration-300">
            <div className="relative">
              {/* Carousel Controls */}
              <div className="flex items-center justify-between mb-8">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#E1E0CC] hover:bg-white/10 transition-all border border-white/[0.05]"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeIndex ? 'bg-[#E1E0CC] w-6' : 'bg-white/10 w-1.5'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#E1E0CC] hover:bg-white/10 transition-all border border-white/[0.05]"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Active Slide Wrapper */}
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-center max-w-2xl mx-auto"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                
                <Quote className="w-10 h-10 text-[#E1E0CC]/20 mx-auto mb-6" />
                
                <p className="text-base sm:text-lg md:text-xl text-[#E1E0CC] font-normal leading-relaxed mb-8 italic font-serif">
                  "{current.content}"
                </p>
                
                <div className="text-xs sm:text-sm text-[#C8B68A] font-medium mb-6 tracking-wide uppercase">
                  {current.highlight}
                </div>
                
                <div className="flex items-center justify-center gap-3 pt-6 border-t border-white/[0.05] w-fit mx-auto">
                  {current.image ? (
                    <img
                      src={current.image}
                      alt={current.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-[#E1E0CC]/20"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E1E0CC] to-[#C8B68A] flex items-center justify-center text-black font-semibold shadow-lg">
                      {current.name.charAt(0)}
                    </div>
                  )}
                  <div className="text-left">
                    <div className="font-medium text-[#E1E0CC] text-sm sm:text-base">{current.name}</div>
                    <div className="text-xs sm:text-sm text-gray-500">{current.role}, {current.company}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}