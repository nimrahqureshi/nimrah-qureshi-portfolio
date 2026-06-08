import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import PageShell from '@/components/layout/PageShell';

interface LegalPageProps {
  title: string;
  updated: string;
  children: ReactNode;
}

/**
 * Shared layout for Privacy / Terms / Cookies pages.
 * Provides consistent heading, spacing, and readable prose width.
 */
export default function LegalPage({ title, updated, children }: LegalPageProps) {
  return (
    <PageShell>
      <section className="relative py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-2">{title}</h1>
            <p className="text-sm text-muted mb-10">Last updated: {updated}</p>
            <div className="legal-prose space-y-6 text-muted leading-relaxed">
              {children}
            </div>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}
