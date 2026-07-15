import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import SectionHeading from '@/components/effects/SectionHeading';
import GlassCard from '@/components/effects/GlassCard';
import { services, serviceHighlights } from '@/data/services';

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-32 bg-black overflow-hidden"
      style={{ overflowX: 'clip' }}
    >
      {/* PRISMA INSPIRED LUXURY BACKGROUND SYSTEM */}
      {/* Studio Noise & Texture Map Layer */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none" />

      {/* High-End Tech Grid Mask Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#E1E0CC05_1px,transparent_1px),linear-gradient(to_bottom,#E1E0CC05_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" 
      />

      {/* Ambient Premium Soft Light Radiance Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#E1E0CC]/5 rounded-full blur-[140px] animate-pulse pointer-events-none" style={{ animationDelay: '1.5s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-slate-800/40 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '4s' }} />

      {/* Micro-Flares and Cinematic Structural Anchors */}
      <div className="absolute top-24 right-24 w-1.5 h-1.5 bg-[#E1E0CC] rounded-full animate-float opacity-30" />
      <div className="absolute top-1/2 left-12 w-1 h-1 bg-gray-400 rounded-full animate-float opacity-40" style={{ animationDelay: '1.2s' }} />
      <div className="absolute bottom-36 left-36 w-2 h-2 bg-slate-600 rounded-full animate-float opacity-20" style={{ animationDelay: '2.2s' }} />
      <div className="absolute bottom-20 right-16 w-1.5 h-1.5 bg-gray-500 rounded-full animate-float opacity-30" style={{ animationDelay: '3s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Studio Section Title Badge Integration */}
        <div className="text-center mb-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#101010] border border-[#E1E0CC]/10 mb-2 backdrop-blur-md"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#E1E0CC]" />
            <span className="text-xs font-medium tracking-[0.2em] uppercase text-[#E1E0CC]/80">
              What I Offer
            </span>
          </motion.div>
        </div>

        <SectionHeading
          title="Services"
          subtitle="End-to-end AI, automation, and software development services designed to help businesses scale faster."
        />

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 mt-12">
          {services.map((service, i) => (
            <GlassCard
              key={service.id}
              delay={i * 0.1}
              className="relative overflow-hidden group bg-[#101010]/50 border border-neutral-900 hover:border-[#E1E0CC]/20 transition-all duration-300 rounded-2xl p-8 md:p-10"
            >
              {/* Internal card radiance glow overlay matching the premium theme */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#E1E0CC]/[0.01] to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#E1E0CC]/[0.01] to-[#E1E0CC]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon Container with Custom Accent Styling */}
                <div className="w-14 h-14 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 transition-all duration-300 group-hover:border-[#E1E0CC]/30">
                  <service.icon className="w-7 h-7 text-[#E1E0CC]" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-medium text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-normal tracking-wide">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#E1E0CC]/70 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-400 text-sm font-normal tracking-wide">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Interactive Link */}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-gray-300 hover:text-[#E1E0CC] transition-colors font-medium text-sm tracking-wide"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Highlights Module */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {serviceHighlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#101010]/30 border border-neutral-900 rounded-2xl p-6 text-center hover:border-[#E1E0CC]/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:border-[#E1E0CC]/20">
                <item.icon className="w-6 h-6 text-[#E1E0CC]/70" />
              </div>

              <div className="text-3xl font-normal tracking-tight text-[#E1E0CC] mb-1">
                {item.count}
              </div>

              <div className="text-xs uppercase tracking-widest text-gray-500 font-medium">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}