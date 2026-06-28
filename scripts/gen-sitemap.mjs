// Generates public sitemap.xml at build time (postbuild).
// Keeps the sitemap in sync with the site's routes.
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DOMAIN = "https://zeelkumbhani.com";

// path -> changefreq / priority
const routes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  { path: "/industry-solutions", priority: "0.9", changefreq: "monthly" },
  { path: "/projects", priority: "0.8", changefreq: "monthly" },
  { path: "/activities", priority: "0.7", changefreq: "monthly" },
  { path: "/community", priority: "0.7", changefreq: "monthly" },
  { path: "/contact", priority: "0.8", changefreq: "yearly" },
  { path: "/book-consultation", priority: "0.8", changefreq: "yearly" },
];

const today = new Date().toISOString().split("T")[0];

const urls = routes
  .map(
    (r) =>
      `  <url>\n    <loc>${DOMAIN}${r.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority}</priority>\n  </url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

// Write to dist (post-build) and to public (so dev/source has it too)
const targets = [
  resolve(__dirname, "../dist/sitemap.xml"),
  resolve(__dirname, "../public/sitemap.xml"),
];

for (const target of targets) {
  try {
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, xml, "utf8");
    console.log(`[sitemap] wrote ${target}`);
  } catch (err) {
    console.warn(`[sitemap] skipped ${target}: ${err.message}`);
  }
}
