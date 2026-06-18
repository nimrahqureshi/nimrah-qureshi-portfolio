import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import SectionHeading from '@/components/effects/SectionHeading';
import GlassCard from '@/components/effects/GlassCard';
import { services, serviceHighlights } from '@/data/services';

export default function ServicesSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="services"
      className="relative py-32 bg-black overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 neural-bg opacity-80" />

      {/* Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/[0.02] blur-[180px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/[0.01] blur-[140px] rounded-full" />

      {/* Noise Layer */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Services"
          subtitle="End-to-end AI, automation, and software development services designed to help businesses scale faster."
        />

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {services.map((service, i) => (
            <GlassCard
              key={service.id}
              delay={i * 0.1}
              className="relative overflow-hidden group bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.02] to-white/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-zinc-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-zinc-300 flex-shrink-0 mt-0.5" />

                      <span className="text-zinc-400 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  onClick={() => scrollTo('contact')}
                  className="inline-flex items-center gap-2 text-white hover:text-zinc-300 transition-colors font-medium"
                >
                  Get Started

                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {serviceHighlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center hover:border-white/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>

              <div className="text-3xl font-bold gradient-text mb-1">
                {item.count}
              </div>

              <div className="text-xs uppercase tracking-wider text-zinc-500">
                {item.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}