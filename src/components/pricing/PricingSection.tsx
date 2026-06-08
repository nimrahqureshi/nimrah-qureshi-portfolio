import { motion } from 'framer-motion';
import { Check, ArrowRight, Star, Zap } from 'lucide-react';
import SectionHeading from '@/components/effects/SectionHeading';
import GlassCard from '@/components/effects/GlassCard';
import { pricingPlans, addOns } from '@/data/pricing';

export default function PricingSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 neural-bg" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
                <div className="absolute -top-4 left-0 right-0 z-10 flex justify-center">
                  <div className="inline-flex items-center gap-1 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs font-medium">
                    <Star className="w-3 h-3 fill-white" />
                    Most Popular
                  </div>
                </div>
              )}

              <GlassCard className={`h-full pt-8 ${plan.highlighted ? 'border-purple-500/40 shadow-lg shadow-purple-500/10' : ''}`}>
                {plan.highlighted && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-purple-500/5 to-transparent pointer-events-none" />
                )}

                <div className="relative">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold gradient-text">{plan.price}</span>
                      <span className="text-sm text-muted">/{plan.duration}</span>
                    </div>
                    {plan.originalPrice && (
                      <span className="text-sm text-muted line-through">{plan.originalPrice}</span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => scrollTo('contact')}
                    className={`w-full py-3 rounded-xl font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white hover:shadow-lg hover:shadow-purple-500/25'
                        : 'bg-white/5 text-white hover:bg-white/10 border border-purple-500/20'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4" />
                  </button>
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
          <GlassCard>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-purple-400" />
              Add-on Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addOns.map((addon) => (
                <div key={addon.name} className="p-4 rounded-xl bg-white/5 border border-purple-500/10">
                  <div className="text-lg font-bold gradient-text mb-1">{addon.price}</div>
                  <div className="text-sm font-medium text-white mb-1">{addon.name}</div>
                  <div className="text-xs text-muted">{addon.description}</div>
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
          className="text-center mt-8"
        >
          <p className="text-sm text-muted mb-4">Accepted Payment Methods</p>
          <div className="flex justify-center gap-6">
            <div className="px-4 py-2 rounded-lg bg-white/5 text-sm text-muted border border-white/10">Stripe</div>
            <div className="px-4 py-2 rounded-lg bg-white/5 text-sm text-muted border border-white/10">PayPal</div>
            <div className="px-4 py-2 rounded-lg bg-white/5 text-sm text-muted border border-white/10">Bank Transfer</div>
            <div className="px-4 py-2 rounded-lg bg-white/5 text-sm text-muted border border-white/10">Crypto</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
