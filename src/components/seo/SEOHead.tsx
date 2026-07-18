import { Helmet } from 'react-helmet-async';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE, canonical } from '@/lib/site';

interface Breadcrumb {
  name: string;
  path: string;
}

interface SEOHeadProps {
  title?: string;
  description?: string;
  image?: string;
  /** Route path, e.g. "/about". Preferred over `url`. */
  path?: string;
  /** Full URL override (legacy). If both given, `path` wins. */
  url?: string;
  type?: string;
  /** Set true on pages that should not be indexed (e.g. 404). */
  noindex?: boolean;
  /** Optional explicit breadcrumb trail; auto-derived from title otherwise. */
  breadcrumbs?: Breadcrumb[];
}

export default function SEOHead({
  title = 'Nimrah Qureshi | AI Engineer & Full-Stack Developer',
  description = 'Building AI Chatbots, AI Agents, Automation Systems & Modern Web Applications. Helping businesses automate workflows and scale with cutting-edge AI technology.',
  image = DEFAULT_OG_IMAGE,
  path,
  url,
  type = 'website',
  noindex = false,
  breadcrumbs,
}: SEOHeadProps) {
  // Resolve the canonical URL: prefer `path`, fall back to `url`, then site root.
  const pageUrl = path ? canonical(path) : url || SITE_URL;
  // Open Graph images must be absolute.
  const imageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  // Auto breadcrumb: Home → current page (label = title before the "|").
  const isHome = pageUrl.replace(/\/$/, '') === SITE_URL.replace(/\/$/, '');
  const trail: Breadcrumb[] =
    breadcrumbs ??
    (isHome
      ? [{ name: 'Home', path: '/' }]
      : [
          { name: 'Home', path: '/' },
          { name: title.split('|')[0].trim(), path: path || '/' },
        ]);

  // Enhanced & Stronger Person Schema for an Independent AI Specialist Portfolio
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Nimrah Qureshi',
    jobTitle: 'AI Engineer & Full-Stack Developer',
    description,
    url: SITE_URL,
    brand: {
      '@type': 'Brand',
      name: 'Nimrah Qureshi',
      url: SITE_URL
    },
    sameAs: [
      'https://github.com/nimrahqureshi',
      'https://www.linkedin.com/in/nimrah-qureshi-5a372b2bb',
      'https://www.fiverr.com/nimrah_013',
      'https://www.instagram.com/nimrahqureshi013',
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Karachi',
      addressCountry: 'PK',
    },
    email: 'nimrahqureshi013@gmail.com',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance AI Engineer & Full-Stack Developer (Self-Employed)',
      url: SITE_URL,
    },
    knowsAbout: [
      'Artificial Intelligence',
      'AI Chatbots',
      'AI Agents',
      'LangChain',
      'Retrieval Augmented Generation',
      'OpenAI API',
      'Full Stack Development',
      'Automation',
      'SaaS Development',
      'Web3 Development',
      'Large Language Models (LLMs)',
      'Agentic Workflows',
      'Next.js',
      'TypeScript'
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description:
      'Portfolio of Nimrah Qureshi — AI engineer and full-stack developer building chatbots, agents, automation, and modern web applications.',
    publisher: { '@type': 'Person', name: 'Nimrah Qureshi' },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: canonical(crumb.path),
    })),
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content={type} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={title} />

      {/* Additional SEO */}
      <meta
        name="keywords"
        content="AI Chatbot Developer, AI Engineer, Full Stack Developer, AI Agent Developer, Automation Specialist, OpenAI Developer, LangChain Developer, Next.js Developer, Nimrah Qureshi"
      />
      <meta name="author" content="Nimrah Qureshi" />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={pageUrl} />

      {/* Structured data */}
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
    </Helmet>
  );
}