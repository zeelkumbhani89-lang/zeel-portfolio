# Zeel Kumbhani — Cybersecurity Consultant Portfolio

A premium, production-ready personal portfolio website for **Zeel Kumbhani**, Cybersecurity Consultant and Founder & CEO of **CyberNexora**. Built with a modern, fully-animated, 3D-enhanced stack and optimised for performance, SEO and accessibility.

> Personal brand = **Zeel Kumbhani**. CyberNexora appears only as the company/brand.

---

## ✨ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 + Vite 5 |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 3 (custom cyber design tokens) |
| Routing | React Router 6 (lazy-loaded routes) |
| Animation | Framer Motion + GSAP |
| 3D | Three.js via React Three Fiber + drei |
| SEO | react-helmet-async, Schema.org JSON-LD, Open Graph, sitemap, robots |
| Icons | lucide-react |

---

## 📂 Project Structure

```
zeel-portfolio/
├── public/
│   ├── images/                 # Portrait, speaking, GPBO, shield, logo
│   ├── robots.txt
│   ├── sitemap.xml             # Auto-regenerated on build
│   ├── site.webmanifest
│   └── _redirects              # Cloudflare SPA fallback
├── scripts/
│   └── gen-sitemap.mjs         # Postbuild sitemap generator
├── src/
│   ├── components/
│   │   ├── layout/             # Navbar, Footer, Layout, ScrollToTop
│   │   ├── sections/           # Hero, Home sections & previews
│   │   ├── three/              # HeroScene (R3F 3D scene)
│   │   ├── ui/                 # Loader, CustomCursor, primitives, PageHeader
│   │   └── Seo.tsx
│   ├── data/                   # services, industries, projects, about
│   ├── hooks/                  # useCountUp
│   ├── lib/                    # site config, utils
│   ├── pages/                  # 8 pages + ProjectDetail + NotFound
│   ├── App.tsx                 # Routes + providers
│   ├── main.tsx
│   └── index.css               # Design tokens + utilities
├── index.html                  # SEO meta + OG tags
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## 🚀 Getting Started

Requires **Node.js 18+** and npm.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev

# 3. Production build (outputs to /dist, regenerates sitemap)
npm run build

# 4. Preview the production build locally
npm run preview
```

---

## 🌐 Deploy to Cloudflare Pages

1. Push this project to a GitHub/GitLab repository.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Build settings:
   - **Framework preset:** `Vite`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** `18` or higher (set `NODE_VERSION` env var if needed)
4. Deploy. The included `public/_redirects` (`/* /index.html 200`) handles client-side routing so every route works on refresh/direct-link.

The same `dist/` folder also deploys cleanly to Netlify, Vercel (static), or any static host.

---

## ✏️ Editing Content

All content is centralised and data-driven — no need to touch component markup:

| What to edit | File |
|--------------|------|
| Name, role, email, phone, socials, domain | `src/lib/site.ts` |
| Services list | `src/data/services.ts` |
| Industry solutions | `src/data/industries.ts` |
| Projects / case studies | `src/data/projects.ts` |
| Bio, stats, certifications, timeline, activities, memberships | `src/data/about.ts` |
| Navigation links | `src/lib/site.ts` (`navLinks`) |
| Colours / theme tokens | `src/index.css` + `tailwind.config.js` |
| Images | `public/images/` |

### Updating the domain for SEO
The canonical domain is set in three places — update all if you change it:
- `src/lib/site.ts` → `domain`
- `index.html` → canonical/OG tags
- `scripts/gen-sitemap.mjs` → `DOMAIN`
- `public/robots.txt` → `Sitemap:` line

---

## 📄 Pages

1. **Home** — Loader, 3D hero, About Zeel, animated stats, why-choose-me, and previews of services / industries / projects / activities, plus CTA.
2. **Services** — Full cybersecurity service catalogue.
3. **Industry Solutions** — 14 industries with risks, business impact, relevant compliance and how Zeel helps.
4. **Projects** — Ethical case studies with detail pages.
5. **Activities & Seminars** — Sessions, workshops, timeline and gallery.
6. **Community & Certifications** — Genuine certifications, memberships, community participation.
7. **Contact** — Contact form (mailto) + social links.
8. **Book Consultation** — Booking form (mailto) with clear CTA.

---

## 🔒 Notes

- **Forms** use a `mailto:` fallback (no backend required). To wire a real backend, replace the submit handler in `src/pages/Contact.tsx` and `src/pages/BookConsultation.tsx` with a POST to your form service (Formspree, Web3Forms, Cloudflare Workers, etc.).
- All content is **factual** — certifications, experience and projects reflect real, verifiable work. No fabricated clients, rankings or achievements. Compliance references are informational, not legal advice.
- The 3D hero respects `prefers-reduced-motion` and lazy-loads to protect Core Web Vitals.

---

© Zeel Kumbhani / CyberNexora. All rights reserved.
