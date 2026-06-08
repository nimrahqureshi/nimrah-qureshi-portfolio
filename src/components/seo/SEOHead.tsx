import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export default function SEOHead({
  title = "Nimrah Qureshi | AI Engineer & Full-Stack Developer",
  description = "Building AI Chatbots, AI Agents, Automation Systems & Modern Web Applications. Helping businesses automate workflows and scale with cutting-edge AI technology.",
  image = "/og-image.jpg",
  url = "https://nimrahqureshi.com",
  type = "website",
}: SEOHeadProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="keywords" content="AI Chatbot Developer, AI Engineer, Full Stack Developer, AI Agent Developer, Automation Specialist, OpenAI Developer, LangChain Developer, Next.js Developer" />
      <meta name="author" content="Nimrah Qureshi" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Nimrah Qureshi",
          "jobTitle": "AI Engineer & Full-Stack Developer",
          "description": description,
          "url": url,
          "sameAs": [
            "https://github.com/nimrahqureshi",
            "https://www.linkedin.com/in/nimrah-qureshi-5a372b2bb",
            "https://www.fiverr.com/nimrah_013",
            "https://www.instagram.com/nimrahqureshi013"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Karachi",
            "addressCountry": "PK"
          },
          "email": "brainlinkai13@gmail.com",
          "knowsAbout": [
            "Artificial Intelligence",
            "AI Chatbots",
            "AI Agents",
            "LangChain",
            "Retrieval Augmented Generation",
            "OpenAI API",
            "Full Stack Development",
            "Automation",
            "SaaS Development",
            "Web3 Development"
          ]
        })}
      </script>
    </Helmet>
  );
}
