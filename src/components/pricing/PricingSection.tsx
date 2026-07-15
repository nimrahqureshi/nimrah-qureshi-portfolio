import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, Star, Zap } from 'lucide-react';
import SectionHeading from '@/components/effects/SectionHeading';
import GlassCard from '@/components/effects/GlassCard';
import { pricingPlans, addOns } from '@/data/pricing';

export default function PricingSection() {
  return (
    <section 
      id="pricing" 
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
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#E1E0CC]/5 rounded-full blur-[140px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-slate-800/40 rounded-full blur-[120px] animate-pulse pointer-events-none" style={{ animationDelay: '2.5s' }} />
      
      {/* Micro-Flares and Cinematic Structural Anchors */}
      <div className="absolute top-24 right-12 w-1.5 h-1.5 bg-[#E1E0CC] rounded-full animate-float opacity-30" />
      <div className="absolute top-48 left-24 w-1 h-1 bg-gray-400 rounded-full animate-float opacity-40" style={{ animationDelay: '1.2s' }} />
      <div className="absolute bottom-36 right-20 w-2 h-2 bg-slate-600 rounded-full animate-float opacity-20" style={{ animationDelay: '2.2s' }} />
      <div className="absolute bottom-24 left-16 w-1.5 h-1.5 bg-gray-500 rounded-full animate-float opacity-30" style={{ animationDelay: '3.5s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Pricing"
          subtitle="Transparent pricing for AI and development services. Choose the plan that fits your needs."
        />

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-0 right-0 z-20 flex justify-center">
                  <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-[#101010] border border-[#E1E0CC]/20 text-[#E1E0CC] text-xs font-medium shadow-[0_4px_20px_rgba(0,0,0,0.5)] uppercase tracking-wider">
                    <Star className="w-3 h-3 fill-[#E1E0CC] text-[#E1E0CC]" />
                    Most Popular
                  </div>
                </div>
              )}

              <GlassCard 
                className={`h-full pt-8 backdrop-blur-md bg-[#101010]/60 transition-all duration-300 ${
                  plan.highlighted 
                    ? 'border-[#E1E0CC]/30 shadow-lg shadow-[#E1E0CC]/5' 
                    : 'border-white/5 hover:border-[#E1E0CC]/20'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#E1E0CC]/5 to-transparent pointer-events-none" />
                )}

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-[#E1E0CC] mb-2">{plan.name}</h3>
                  <p className="text-sm text-gray-400 mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#E1E0CC] to-neutral-400">{plan.price}</span>
                      <span className="text-sm text-gray-500">/{plan.duration}</span>
                    </div>
                    {plan.originalPrice && (
                      <span className="text-sm text-gray-500 line-through block mt-1">{plan.originalPrice}</span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#E1E0CC] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    style={{ backgroundColor: plan.popular ? '#E1E0CC' : '#101010' }}
                    className={`w-full py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group text-xs uppercase tracking-wider ${
                      plan.popular
                        ? 'text-black hover:opacity-90'
                        : 'text-[#E1E0CC]/80 border border-neutral-800 hover:bg-neutral-900 hover:text-[#E1E0CC] hover:border-neutral-700'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className={`w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 ${plan.popular ? 'text-black' : 'text-[#E1E0CC]'}`} />
                  </Link>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Add-ons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <GlassCard className="backdrop-blur-md bg-[#101010]/40 border-white/5 p-6 sm:p-8 rounded-2xl md:rounded-[2rem]">
            <h3 className="text-xl font-bold text-[#E1E0CC] mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#E1E0CC]" />
              Add-on Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon) => (
                <div key={addon.name} className="p-4 rounded-xl bg-black/40 border border-[#E1E0CC]/10 backdrop-blur-sm transition-all duration-300 hover:border-[#E1E0CC]/20">
                  <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#E1E0CC] to-neutral-400 mb-1">{addon.price}</div>
                  <div className="text-sm font-medium text-white mb-1">{addon.name}</div>
                  <div className="text-xs text-gray-400">{addon.description}</div>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-xs tracking-widest uppercase text-gray-500 mb-4">Accepted Payment Methods</p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-4 py-2 rounded-lg bg-[#101010] text-xs font-medium text-gray-400 border border-neutral-800 backdrop-blur-sm">Stripe</div>
            <div className="px-4 py-2 rounded-lg bg-[#101010] text-xs font-medium text-gray-400 border border-neutral-800 backdrop-blur-sm">PayPal</div>
            <div className="px-4 py-2 rounded-lg bg-[#101010] text-xs font-medium text-gray-400 border border-neutral-800 backdrop-blur-sm">Bank Transfer</div>
            <div className="px-4 py-2 rounded-lg bg-[#101010] text-xs font-medium text-gray-400 border border-neutral-800 backdrop-blur-sm">Crypto</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}