/**
 * Single source of truth for site-wide constants.
 *
 * The canonical domain is read from VITE_SITE_URL (see .env.example) and
 * falls back to the production domain used by robots.txt, sitemap.xml,
 * and the Person schema in index.html — keeping every canonical URL,
 * Open Graph tag, and JSON-LD block consistent.
 */
export const SITE_URL: string =
  (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') ||
  'https://nimrahqureshi.com';

export const SITE_NAME = 'Nimrah Qureshi';

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;

/** Builds an absolute canonical URL from a path like "/about". */
export function canonical(path: string): string {
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
