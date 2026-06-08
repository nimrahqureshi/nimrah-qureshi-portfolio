import SEOHead from '@/components/seo/SEOHead';
import LegalPage from '@/components/layout/LegalPage';

const H = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-semibold text-white pt-2">{children}</h2>
);

export default function Cookies() {
  return (
    <>
      <SEOHead
        title="Cookie Policy | Nimrah Qureshi"
        description="How this website uses cookies and similar technologies."
        url="https://nimrah-qureshi-portfolio.vercel.app/cookies"
      />
      <LegalPage title="Cookie Policy" updated="June 2026">
        <p>
          This Cookie Policy explains how this website uses cookies and similar
          technologies.
        </p>

        <H>What Are Cookies</H>
        <p>
          Cookies are small text files stored on your device that help websites function
          and remember your preferences.
        </p>

        <H>How We Use Cookies</H>
        <p>
          We may use essential cookies to keep the site working correctly and optional
          analytics cookies to understand how the site is used so we can improve it.
        </p>

        <H>Managing Cookies</H>
        <p>
          You can control or delete cookies through your browser settings. Disabling some
          cookies may affect how parts of the site work.
        </p>

        <H>Contact</H>
        <p>For questions about this policy, email brainlinkai13@gmail.com.</p>
      </LegalPage>
    </>
  );
}
