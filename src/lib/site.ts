/**
 * Single source of truth for site-wide constants.
 *
 * ONE canonical domain everywhere: robots.txt, sitemap.xml, canonicals,
 * Open Graph, and JSON-LD all derive from SITE_URL. It defaults to the
 * live Vercel deployment; when the custom domain (nimrahqureshi.com) is
 * connected, set VITE_SITE_URL in the environment and rebuild — nothing
 * else needs to change.
 */
export const SITE_URL: string =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') ||
  'https://nimrah-qureshi-portfolio.vercel.app';

export const SITE_NAME = 'Nimrah Qureshi';

/** One email address everywhere (footer, contact page, schema, backend). */
export const CONTACT_EMAIL = 'nimrahqureshi13@gmail.com';

/** One handle per platform — referenced by footer, contact page, and schema. */
export const SOCIAL_LINKS = {
  github: 'https://github.com/nimrahqureshi',
  linkedin: 'https://www.linkedin.com/in/nimrah-qureshi-5a372b2bb',
  upwork: 'https://www.upwork.com/freelancers/~010d340d7ed5f5c501',
  fiverr: 'https://www.fiverr.com/nimrah_013',
  freelancer: 'https://www.freelancer.pk/u/nimrah013',
  x: 'https://x.com/nimrah_013',
  instagram: 'https://www.instagram.com/nimrahqureshi13',
  pinterest: 'https://www.pinterest.com/nimrahqureshi13',
} as const;

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

/** Builds an absolute canonical URL from a path like "/about". */
export function canonical(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
