import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeading from '@/components/effects/SectionHeading';
import GlassCard from '@/components/effects/GlassCard';
import { testimonials } from '@/data/testimonials';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = testimonials[activeIndex];

  const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 neural-bg" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading 
          title="Testimonials"
          subtitle="What clients say about working with me and the results we've achieved together."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-purple-400/30 mb-4" />

                <p className="text-sm text-muted leading-relaxed mb-6 flex-1">
                  "{t.content}"
                </p>

                <div className="text-xs text-purple-400 font-medium mb-4">
                  {t.highlight}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-purple-500/10">
                  {t.image ? (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-white text-sm font-semibold">
                      {t.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <div className="text-sm font-medium text-white">{t.name}</div>
                    <div className="text-xs text-muted">{t.role}, {t.company}</div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Featured Testimonial Carousel */}
        <GlassCard className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-muted hover:text-white hover:bg-white/10 transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === activeIndex ? 'bg-purple-400 w-6' : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-muted hover:text-white hover:bg-white/10 transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: current.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <Quote className="w-10 h-10 text-purple-400/30 mx-auto mb-4" />
              <p className="text-lg text-muted leading-relaxed mb-6 italic">
                "{current.content}"
              </p>
              <div className="text-sm text-purple-400 font-medium mb-4">
                {current.highlight}
              </div>
              <div className="flex items-center justify-center gap-3">
                {current.image ? (
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-white font-semibold">
                    {current.name.charAt(0)}
                  </div>
                )}
                <div className="text-left">
                  <div className="font-medium text-white">{current.name}</div>
                  <div className="text-sm text-muted">{current.role}, {current.company}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
