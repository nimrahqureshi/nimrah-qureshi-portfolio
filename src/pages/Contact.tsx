import SEOHead from '@/components/seo/SEOHead';
import PageShell from '@/components/layout/PageShell';
import ContactSection from '@/components/contact/ContactSection';

export default function Contact() {
  return (
    <PageShell>
      <SEOHead
        title="Contact | Nimrah Qureshi"
        description="Get in touch with Nimrah Qureshi to discuss your AI chatbot, automation, or full-stack project. Available worldwide, remote-friendly."
        path="/contact"
      />
      <ContactSection />
    </PageShell>
  );
}
