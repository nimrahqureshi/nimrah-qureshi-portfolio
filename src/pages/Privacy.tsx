import SEOHead from '@/components/seo/SEOHead';
import LegalPage from '@/components/layout/LegalPage';

const H = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-semibold text-white pt-2">{children}</h2>
);

export default function Privacy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Nimrah Qureshi"
        description="How Nimrah Qureshi collects, uses, and protects your personal information."
        url="https://nimrah-qureshi-portfolio.vercel.app/privacy"
      />
      <LegalPage title="Privacy Policy" updated="June 2026">
        <p>
          This Privacy Policy explains how information is collected and used when you
          visit this website or contact Nimrah Qureshi ("we", "us"). By using the site
          you agree to the practices described here.
        </p>

        <H>Information We Collect</H>
        <p>
          When you submit the contact form or subscribe to the newsletter, we collect
          the information you provide — such as your name, email address, phone number,
          company, and message. We may also collect basic, non-identifying analytics
          about how the site is used.
        </p>

        <H>How We Use Your Information</H>
        <p>
          We use your information to respond to your enquiries, discuss potential
          projects, send updates you have subscribed to, and improve the site. We do not
          sell your personal information.
        </p>

        <H>Data Storage</H>
        <p>
          Form submissions and subscriptions are stored securely in our database. We
          retain this information only as long as necessary for the purposes described
          above.
        </p>

        <H>Third-Party Services</H>
        <p>
          The site may use third-party services for hosting, email delivery, scheduling,
          and analytics. These providers process data only as needed to deliver their
          service.
        </p>

        <H>Your Rights</H>
        <p>
          You may request access to, correction of, or deletion of your personal
          information at any time by contacting us at brainlinkai13@gmail.com.
        </p>

        <H>Contact</H>
        <p>
          For any privacy-related questions, email brainlinkai13@gmail.com.
        </p>
      </LegalPage>
    </>
  );
}