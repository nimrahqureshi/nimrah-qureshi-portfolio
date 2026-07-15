// Regenerates public/sitemap.xml from the route list below.
// Run manually (node scripts/generate-sitemap.js) or wire into a deploy step.
// ESM because package.json declares "type": "module".
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const BASE_URL = process.env.VITE_SITE_URL?.replace(/\/$/, "") || "https://nimrahqureshi.com";

// Every indexable route in src/App.tsx (404 intentionally excluded).
const routes = [
  { path: "/",             priority: "1.0", changefreq: "weekly" },
  { path: "/about",        priority: "0.8", changefreq: "monthly" },
  { path: "/services",     priority: "0.9", changefreq: "monthly" },
  { path: "/projects",     priority: "0.9", changefreq: "weekly" },
  { path: "/case-studies", priority: "0.8", changefreq: "monthly" },
  { path: "/ai-tools",     priority: "0.7", changefreq: "monthly" },
  { path: "/blog",         priority: "0.7", changefreq: "weekly" },
  { path: "/pricing",      priority: "0.8", changefreq: "monthly" },
  { path: "/faq",          priority: "0.6", changefreq: "monthly" },
  { path: "/contact",      priority: "0.9", changefreq: "monthly" },
  { path: "/privacy",      priority: "0.3", changefreq: "yearly" },
  { path: "/terms",        priority: "0.3", changefreq: "yearly" },
  { path: "/cookies",      priority: "0.3", changefreq: "yearly" },
];

const today = new Date().toISOString().split("T")[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${BASE_URL}${r.path === "/" ? "/" : r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.resolve(__dirname, "../public/sitemap.xml");
writeFileSync(outPath, xml);
console.log(`sitemap.xml written with ${routes.length} routes -> ${outPath}`);
