import SEOHead from '@/components/seo/SEOHead';
import LegalPage from '@/components/layout/LegalPage';

const H = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-semibold text-white pt-2">{children}</h2>
);

export default function Terms() {
  return (
    <>
      <SEOHead
        title="Terms of Service | Nimrah Qureshi"
        description="The terms that govern your use of this website and services."
        url="https://nimrah-qureshi-portfolio.vercel.app/terms"
      />
      <LegalPage title="Terms of Service" updated="June 2026">
        <p>
          These Terms govern your use of this website. By accessing or using the site,
          you agree to these Terms.
        </p>

        <H>Use of the Site</H>
        <p>
          You may use this site for lawful purposes only. You agree not to misuse the
          site, attempt to disrupt it, or use it in any way that could harm others.
        </p>

        <H>Intellectual Property</H>
        <p>
          The content, design, and code on this site are owned by Nimrah Qureshi unless
          otherwise stated. You may not copy or reuse it without permission.
        </p>

        <H>Services</H>
        <p>
          Any services discussed on this site are subject to a separate agreement.
          Information on the site does not constitute a binding offer or guarantee of
          specific results.
        </p>

        <H>Limitation of Liability</H>
        <p>
          The site is provided "as is" without warranties of any kind. We are not liable
          for any damages arising from your use of the site.
        </p>

        <H>Changes</H>
        <p>
          We may update these Terms from time to time. Continued use of the site after
          changes means you accept the updated Terms.
        </p>

        <H>Contact</H>
        <p>For questions about these Terms, email brainlinkai13@gmail.com.</p>
      </LegalPage>
    </>
  );
}
