import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home as HomeIcon, ArrowLeft } from 'lucide-react';
import SEOHead from '@/components/seo/SEOHead';
import PageShell from '@/components/layout/PageShell';

export default function NotFound() {
  return (
    <PageShell>
      <SEOHead
        title="404 — Page Not Found | Nimrah Qureshi"
        description="The page you are looking for could not be found."
        path="/404"
        noindex
      />
      <section className="relative min-h-[70vh] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-[#F2EFD9] via-[#E1E0CC] to-[#C8B68A] bg-clip-text text-transparent">
            404
          </div>
          <h1 className="mt-4 text-2xl md:text-3xl font-bold text-white">
            Page not found
          </h1>
          <p className="mt-3 text-muted max-w-md mx-auto">
            The page you are looking for doesn't exist or may have been moved.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E1E0CC] text-black rounded-xl font-medium hover:bg-[#D6D4BC] hover:shadow-lg hover:shadow-[#E1E0CC]/10 transition-all"
            >
              <HomeIcon className="w-4 h-4" />
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 glass-card rounded-xl font-medium text-white hover:text-[#E1E0CC] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Contact
            </Link>
          </div>
        </motion.div>
      </section>
    </PageShell>
  );
}