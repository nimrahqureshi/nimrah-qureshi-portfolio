# Production Overhaul — Change Report

Every issue below follows the required format: **Problem → Files → Change → Why → Build status.**
Final state: **TypeScript `tsc --noEmit` → 0 errors · `vite build` → 0 errors/warnings · backend `node --check` + runtime module load → OK · all routes smoke-tested via `vite preview` (200).**

Nothing was redesigned. No pages, components, animations, branding, colors, typography, or personal information were changed. Constraint conflicts (e.g. "remove placeholders" vs "don't remove components") were resolved by keeping components/pages and fixing their *content* — each case is noted.

---

## STEP 1–3 — PERFORMANCE, IMAGES & CORE WEB VITALS

### 1.1 Fake WebP files (renamed PNGs) + massively oversized images
**Problem.** All six `.webp` files in `/public/images` were PNG bytes with a `.webp` extension (verified via magic bytes: `\x89PNG`). Browsers still decoded them as PNG, so the `<Picture>` component's "optimized" path shipped a **3.3 MB hero image**, 2.8 MB contact image, ~2 MB about images. This alone destroyed LCP.
**Files.** `public/images/*.png`, `public/images/*.webp` (regenerated binaries).
**Change.** A Sharp pipeline re-encoded every image as **real WebP** and resized each to ~2× its largest CSS display size (the hero portrait renders ≤220 px wide, so shipping 1024 px was pure waste):

| Asset | Before | After (WebP) |
|---|---|---|
| home (hero) | 3.3 MB | **182 KB** @ 640×960 |
| contact | 2.8 MB | 213 KB @ 768×1152 |
| about / about-1 | 2.0 / 1.8 MB | 49 / 45 KB |
| upwork-profile | 1.9 MB | 123 KB |
| logo | 686 KB | 7 KB |

PNG fallbacks were also palette-compressed for the <1 % of legacy browsers that receive them.
**Why.** LCP is dominated by the hero asset; a 94 % reduction moves LCP from multi-second territory to comfortably under the 2.5 s target on ordinary connections. Total `dist/` shrank **from ~23 MB to 3.8 MB**.
**Build.** ✅ compiles; preview serves the new binaries.

### 1.2 Favicons were 1024×1024 megabyte files
**Problem.** `favicon-16x16.png` was a **1.32 MB, 1024-pixel** image (likewise 32×32, apple-touch, PWA icons) — downloaded on every first visit.
**Files.** `public/favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`, `icons/icon-{180,192,512}.png`.
**Change.** Regenerated each at its true size from the 1024 px master. `favicon-16x16.png` is now **302 bytes**.
**Why.** ~4 MB of icon payload removed from the critical first visit; manifest icon sizes now match their declared dimensions.
**Build.** ✅.

### 1.3 Social share image wrong size and 1 MB
**Problem.** `og-image.jpg` was a 1727×911 **PNG masquerading as JPG** at ~1 MB — wrong aspect for link previews and slow for crawlers.
**Files.** `public/og-image.jpg`.
**Change.** Re-encoded as a true mozjpeg **1200×630** (the OG standard) at 20 KB, cropped with attention-based framing.
**Why.** Correct, fast link previews on X/LinkedIn/WhatsApp; social cards are a major first-impression channel for a freelancer.
**Build.** ✅.

### 1.4 Layout shift from wrong `width`/`height` hints
**Problem.** After resizing, declared dimension attributes no longer matched intrinsic sizes; the hero declared **1024×1024 for a 2:3 image**, which reserves the wrong box and causes CLS when the image loads.
**Files.** `src/components/home/Hero.tsx`, `src/components/contact/ContactSection.tsx`, `src/components/about/AboutSection.tsx` (6 usages).
**Change (representative).**
```diff
- width={1024}      // hero
- height={1024}
+ width={640}
+ height={960}
```
All six `<Picture>` usages now carry their true intrinsic dimensions.
**Why.** Correct aspect-ratio boxes are reserved before download → CLS stays under the 0.05 target. `fetchPriority="high"` + eager loading remain reserved for the hero only; every other image is lazy with `decoding="async"` (already in the shared `Picture` component).
**Build.** ✅ `tsc` clean.

### 1.5 Animation & JS main-thread audit
**Problem/Findings.** The heavy suspects were already well-engineered from a prior pass — the `NeuralNetwork` canvas honors `prefers-reduced-motion`, pauses on `visibilitychange`, and halves particle count on mobile; route-level `React.lazy` code-splitting and manual vendor chunks (`react`, `motion`) are configured in `vite.config.ts`; Framer Motion animations are transform/opacity-based with `viewport={{ once: true }}`. Two real issues remained:
1. **`Typewriter.tsx` leaked a nested timer** — the 2-second "pause" `setTimeout` was never cleared on unmount.
2. **The AI Tools page burned 1 s of artificial `setTimeout` delay** pretending to "generate" (also a trust issue — see Step 8).
**Files.** `src/components/home/Typewriter.tsx`, `src/components/ai-tools/AIToolsSection.tsx`.
**Change.** The pause timer is captured and cleared in the effect cleanup; the fake delay was removed entirely (generation is now either a real API call or an instant labeled template).
**Why.** No orphaned timers firing state updates after unmount; no fabricated latency.
**Build.** ✅. Bundle after build: route chunks 1–28 KB gz, vendor `react` 17 KB gz / `motion` 45 KB gz / main 88 KB gz — healthy for this feature set.

---

## STEP 4 — SEO

### 4.1 Two competing canonical domains
**Problem.** The site referenced **both** `nimrahqureshi.com` (index.html OG image + JSON-LD `url`) and `nimrah-qureshi-portfolio.vercel.app` (robots.txt, sitemap) — split canonical signals, and the OG image pointed at a domain that may not resolve.
**Files.** `src/lib/site.ts`, `index.html`, `scripts/generate-sitemap.js`, `public/sitemap.xml`, `public/robots.txt` (already correct).
**Change.** `SITE_URL` in `src/lib/site.ts` is now the **single source of truth**, defaulting to the live Vercel URL; canonicals, OG tags, JSON-LD, and the sitemap generator all derive from it. `index.html`'s static tags were aligned. When the custom domain goes live, set `VITE_SITE_URL` and rebuild — one variable flips everything.
**Why.** One consistent canonical domain prevents duplicate-content dilution and broken share images.
**Build.** ✅.

### 4.2 Sitemap missing the blog articles
**Problem.** `sitemap.xml` listed 13 routes; the 8 new article URLs (Step 10) didn't exist yet.
**Files.** `scripts/generate-sitemap.js`, `public/sitemap.xml`.
**Change.** The generator now emits `/blog/<slug>` for every article (21 URLs total) with fresh `lastmod`, on the canonical domain; regenerated.
**Why.** Articles are the site's long-tail SEO surface; unindexed articles earn nothing.
**Build.** ✅ (script run verified: "21 routes").

### 4.3 Structured-data coverage
**Problem.** Person + Breadcrumb schema existed site-wide (in `SEOHead`), and FAQPage schema on `/faq` — but there was **no Service schema and no Article schema** (Step 4's list).
**Files.** `src/pages/Services.tsx` (new `ItemList` of `Service` objects with provider/areaServed), `src/pages/BlogPost.tsx` (new `BlogPosting` schema per article with author/date/keywords).
**Why.** Service and Article rich results are the two schema types most relevant to a freelancer's queries ("AI chatbot development", article titles).
**Build.** ✅. Per-page unique titles/descriptions were audited across all 13 pages — no duplicates (each page passes distinct `SEOHead` props). `/404` correctly ships `noindex`.

### 4.4 A "500 page" for an SPA
**Problem.** The checklist asks for a 500 page; an SPA's equivalent is a render-crash fallback, which didn't exist — an uncaught error meant a blank black viewport.
**Files.** **New** `src/components/layout/ErrorBoundary.tsx`, `src/main.tsx`.
**Change.** App-level error boundary wrapping the tree; on crash it renders a branded recovery screen (site palette, Inter, reload CTA) and logs the component stack.
**Why.** A crash now degrades into a professional screen instead of nothing.
**Build.** ✅.

---

## STEP 5 — TRUST & CREDIBILITY

### 5.1 One email, one Fiverr handle — everywhere
**Problem.** Three different Fiverr URLs were in use (`fiverr.com/nimrahqureshi13` in Footer + index.html, `fiverr.com/sellers/nimrah_013` on Contact, `fiverr.com/nimrah_013` in schema + resume) and the resume used a **different email** (`nimrahqureshi013@gmail.com`) than the rest of the site (`nimrahqureshi13@gmail.com`).
**Files.** `src/lib/site.ts` (new `CONTACT_EMAIL` + `SOCIAL_LINKS` constants), `src/components/layout/Footer.tsx`, `src/components/contact/ContactSection.tsx`, `index.html`, `public/resume.pdf`.
**Change.** Standardized on the **majority values**: `nimrahqureshi13@gmail.com` and `https://www.fiverr.com/nimrah_013` in all 8 locations.
**Why.** A recruiter who emails the resume address must reach you; a client clicking Fiverr must land on the right profile. ⚠️ **ACTION FOR YOU:** these were majority-vote choices — please confirm both are correct (see "Verify before deploy" at the end).
**Build.** ✅.

### 5.2 Placeholder testimonials could render
**Problem.** `data/testimonials.ts` contains "Your Client Name / Client Title" sample entries flagged `isSample: true`. The section component would render them verbatim if ever mounted.
**Files.** `src/components/testimonials/TestimonialsSection.tsx` (component kept, per your rules).
**Change.** The component now filters `isSample` entries and **returns `null` when no real testimonials exist** — the section self-activates the moment a genuine entry is added to the data file.
**Why.** "Your Client Name" on a live portfolio is instantly disqualifying. (Note: the section is currently not mounted on any page, so this is defense-in-depth for when it is.)
**Build.** ✅.

### 5.3 Fictional client case studies presented as real
**Problem.** The three case studies named invented clients ("ShopFlow", "MediCare Plus") with fabricated dollar figures ("$1.2M annual savings") presented as delivered work. One question from a serious client — "can I speak to MediCare Plus?" — would collapse credibility, and fabricated healthcare results are a genuine professional risk. This is template content per your own Step 5.
**Files.** `src/data/caseStudies.ts`, `src/components/case-studies/CaseStudiesSection.tsx` (page and component fully preserved).
**Change.** Reframed honestly: clients relabeled `Concept study · mid-size e-commerce platform` etc., a new `isConcept: true` field, the "Proven Performance" badge → "Engagement Blueprints", and a visible disclaimer under the heading: *"illustrative concept studies … modeled target metrics rather than client-reported results. Client references are available on request."*
**Why.** The page still demonstrates exactly how you scope and deliver engagements — its real sales value — without a single falsifiable claim. Replace these with real case studies as soon as you have permission to publish one.
**Build.** ✅.

### 5.4 Chatbot claims contradicted the site
**Problem.** The chatbot asserted "50+ projects" and "100% Client Satisfaction Score" while the homepage stats say **10+ projects** — internally inconsistent and unverifiable against your public platform profiles.
**Files.** `src/data/chatKnowledge.ts`.
**Change.** Claims aligned with the site's own numbers (10+ projects, founder of two AI brands); the "testimonials are being organized" filler was replaced with a clean pointer to Projects + references-on-request.
**Why.** Any client can check your Upwork/Fiverr profile in one click; only claims that survive that check belong in the bot.
**Build.** ✅.

### 5.5 Broken/placeholder links & dead references
**Problem.** The Contact page's Facebook icon linked to bare `https://facebook.com`; project data referenced seven image files (`/images/neuraloft.jpg` …) that **don't exist**; project link buttons pointed at a dead in-page anchor (`#contact`).
**Files.** `src/components/contact/ContactSection.tsx`, `src/data/projects.ts`.
**Change.** Facebook link removed (add it back with your real profile URL when ready). Dead `image` fields deleted from the `Project` interface + all entries (the UI uses gradients, so nothing visual changes). Link labels changed to `Discuss This Project → /contact` (the existing `ProjectLink` helper client-side-routes internal paths). **Brain Link AI gained a real `Live Demo` link** to `https://blai-portfolio.vercel.app` — ⚠️ found via search and matching your branding exactly, but **please confirm it's yours**.
**Why.** Every link on the page now goes somewhere real. Live-demo/GitHub slots for the remaining projects are wired and render automatically — just add URLs to `links` in `src/data/projects.ts` as your repos go public (I did not invent URLs I couldn't verify).
**Build.** ✅.

### 5.6 Resume rebuilt
**Problem.** `resume.pdf` was a thin stub with the wrong email and inconsistent handles.
**Files.** `public/resume.pdf` (regenerated).
**Change.** A clean one-page A4 resume in the site's palette, built **strictly from facts already published on the site** (profile, skills, ventures, the five product projects, certifications) with the standardized email/handles and the portfolio URL.
**Why.** "Download Resume" is a primary recruiter CTA; it now delivers a professional, consistent document. Extend it with education/dates as you see fit — I added nothing unverifiable.
**Build.** ✅ (1 page, text-verified).

---

## STEP 6 — CONTACT FORM

### 6.1 The form was guaranteed to fail in production (two independent bugs)
**Problem A.** The API client fell back to `http://localhost:5000/api` **in production** — every visitor's browser tried to call their own machine (mixed-content-blocked from https anyway).
**Problem B.** Even with a URL configured, the form sent the free-text *Subject* field as `projectType`, whose Mongoose schema was a **strict enum** (`'ai-chatbot' | 'automation' | …`). Any normal subject ("Need a chatbot for my store") failed enum validation → **500 on every submission**.
**Files.** `src/lib/api.ts`, `src/components/contact/ContactSection.tsx`, `backend/models/Lead.js`, `backend/routes/contact.js`.
**Change.**
```ts
// api.ts — no localhost in production, ever:
const API_BASE_URL = configured || (import.meta.env.DEV ? 'http://localhost:5000/api' : '');
// If unset in prod, requests throw a friendly ApiError:
// "…not configured yet. Please email me directly at nimrahqureshi13@gmail.com."
```
The form now sends `subject` as `subject`; the `Lead` model gained a `subject` field and `projectType` became a validated free string. Client-side validation added for the required subject (the form is `noValidate`, so JS must enforce it); server-side validation mirrors every client rule.
**Why.** The single most important conversion path on the site now works, and when the backend is *not* deployed it degrades to a clear "email me directly" message instead of a silent failure.
**Build.** ✅.

### 6.2 Hardening the endpoint
**Problem.** No server-side validation, no HTML escaping (user input interpolated raw into notification-email HTML), no spam defense, 10 MB body limit on a contact API, full DB document echoed back to the client.
**Files.** `backend/routes/contact.js`, `backend/middleware/validate.js` (new), `backend/middleware/limiters.js` (new), `backend/server.js`.
**Change.** Length-capped + type-checked fields (`clampStr`/`isEmail`/`asPlainString`), `escapeHTML()` on everything entering email HTML, a honeypot field (bots get fake success), a **write limiter (8 req/15 min/IP)** on contact/subscribe, body limit **50 KB**, proper status codes (400 with meaningful messages, 201 on success), and the response now returns only `{ message, lead: { _id } }`.
**Why.** Stops email-HTML injection, blunts spam floods, and keeps internal data internal.
**Build.** ✅ `node --check` + runtime import OK.

---

## STEP 7 — BACKEND SECURITY

### 7.1 Private data was public
**Problem.** `GET /api/leads` and `GET /api/subscribers` returned **every visitor's name, email, and project brief to anyone on the internet**. All blog/project/testimonial write endpoints were also unauthenticated.
**Files.** **New** `backend/middleware/auth.js`; `backend/routes/{leads,subscribers,blog,projects,testimonials}.js`.
**Change.** A `requireAdmin` middleware (Bearer `ADMIN_API_KEY`, **timing-safe compare**, fail-closed 503 when unset) now guards every private read and every mutation. Public surface is exactly: contact/lead POST, subscribe/unsubscribe, published-content reads, AI endpoints, health. This is the documented interim until the Clerk dashboard ships (the unrouted `AdminDashboard.tsx` is annotated accordingly and remains tree-shaken out of the bundle).
**Why.** Leaking a lead list is a privacy breach and, for a portfolio, a portfolio-ending one.
**Build.** ✅.

### 7.2 Helmet imported but never used; CORS allowed a literal `undefined` slot; stack traces conditionally leakable
**Files.** `backend/server.js`.
**Change.** `app.use(helmet())` actually applied; `allowedOrigins` now `.filter(Boolean)` with an explicit origin callback; `trust proxy` set so rate limits key on real client IPs behind Vercel; the error handler logs server-side and returns only `{ message: 'Internal server error' }` for 500s — never a stack, in any environment.
**Why.** Secure headers, correct origin policy, accurate rate limiting, zero information leakage.
**Build.** ✅.

### 7.3 NoSQL injection & mass assignment
**Files.** `backend/server.js` (`express-mongo-sanitize` added, dependency added), all write routes.
**Change.** Mongo operators (`$`, `.`) stripped from all input; every create/update uses an **explicit field allowlist** (e.g. lead updates accept only `status/projectType/budget/company`) instead of spreading `req.body`.
**Why.** Closes operator-injection and prevents attackers from setting fields like `status` or timestamps on creation.
**Build.** ✅.

### 7.4 Stripe: client-controlled amounts + broken webhook
**Problem.** `create-payment-intent` accepted `amount` **from the client** (anyone could pay $1 for the $14,999 plan), and the webhook was mounted *after* `express.json()`, so the raw body was consumed and **signature verification failed on every event**.
**Files.** `backend/routes/payments.js`, `backend/server.js`.
**Change.** Prices live server-side in `PLAN_PRICES_USD_CENTS`, keyed by `planId` and mirroring all four tiers in `src/data/pricing.ts` (starter 2999 / business 7999 / professional 14999 / enterprise = quote-only). The webhook handler is exported separately and mounted with `express.raw()` **before** the JSON parser.
**Why.** Payment amount integrity + a webhook that actually verifies.
**Build.** ✅.

### 7.5 Serverless correctness
**Problem.** `connectDB()` called `process.exit(1)` on failure (kills the Vercel function), opened a new connection pool per cold start, and `server.js` never called `app.listen` — so **local dev couldn't run the API at all**.
**Files.** `backend/config/db.js`, `backend/server.js`.
**Change.** Cached global connection promise (standard serverless-Mongoose pattern) awaited lazily per request; errors propagate to the error handler instead of exiting; `if (!process.env.VERCEL) app.listen(PORT)` restores local dev while staying export-based on Vercel. A stray junk file (`backend/nothing`) was deleted and `backend/.env.example` was created documenting every variable.
**Build.** ✅ runtime-verified (`SERVER MODULE LOADS OK`).

---

## STEP 8 — REAL AI (no fakes)

### 8.1 The "AI" chatbot and "AI-powered" tools were keyword matchers and string templates with fabricated latency
**Problem.** The chatbot did keyword lookup behind a random 0.9–1.7 s fake "typing" delay; the AI Tools page ran string templates behind a 1 s fake delay, claimed "Powered by cutting-edge AI," and its blog template even appended *"This article was AI-generated."* All of that is simulated AI — exactly what your rules prohibit.
**Files.** **New** `backend/routes/ai.js`; `src/lib/api.ts`; `src/components/chatbot/AIChatbot.tsx`; `src/components/ai-tools/AIToolsSection.tsx`.
**Change.**
- **Backend `/api/ai`** — a real LLM proxy supporting **OpenAI, Anthropic (Claude), Gemini, Groq, and OpenRouter** via `AI_PROVIDER` + `AI_API_KEY` (+ optional `AI_MODEL`), with sensible per-provider defaults, a grounded system prompt built only from your published facts (explicitly instructed to *never invent clients or metrics*), bounded conversation windows, input caps, its own rate limit (10/min), and `GET /api/ai/status` for capability probing. No key configured → honest `503 { configured: false }`.
- **Chatbot** — probes status on first open; when live, sends the real conversation history to `/ai/chat` and shows the true response time; header reads *"Online • Live AI responses"* with an *"AI answers can be imperfect"* footer. When not configured (or on failure) it **falls back to the instant FAQ knowledge base, labeled** *"Online • Instant answers"* / *"Nimrah's assistant"* — no fake delay, no AI claim.
- **AI Tools** — calls `/ai/generate` when live; otherwise produces instant templates under an explicit **"Structured template preview"** caption, a *"Generate Template"* button label, and an honest subtitle. The false "AI-generated" footer line was removed from the template text.
**Why.** With one env var pair you have genuinely real AI across the site; with zero configuration, nothing anywhere claims to be AI. Loading states and graceful error handling are implemented in both surfaces.
**Build.** ✅.

---

## STEPS 9 & 10 — PROJECTS & BLOG

### 9.1 Projects
**Problem.** No search; filter buttons lacked toggle semantics; link/data issues covered in 5.5. (Cards already had a full detail modal with problem/architecture/features — kept intact.)
**Files.** `src/components/portfolio/PortfolioSection.tsx`, `src/data/projects.ts`.
**Change.** A search input (matches title/subtitle/description/tech stack) combined with the category filter, an accessible empty state (`role="status"`), and `aria-pressed` on category toggles. Live Demo / GitHub buttons render automatically for any project whose `links` array contains them.
**Why.** Faster evaluation for recruiters scanning for a specific stack.
**Build.** ✅.

### 10.1 Blog: stale stubs → a real content system
**Problem.** Cards were dead ends — every `content` field was a one-line stub with no article route; titles/dates were frozen in early 2024 ("Next.js 14", "in 2024"); dates rendered as raw ISO strings; two listed categories had zero posts.
**Files.** `src/data/blogPosts.ts` (rewritten), **new** `src/pages/BlogPost.tsx`, `src/App.tsx`, `src/components/blog/BlogSection.tsx`.
**Change.**
- **Data:** all 8 articles rewritten with evergreen titles, 2025–2026 dates, and **full structured bodies** (`sections: {heading, paragraphs, list}` — rendered as semantic `h2/p/ul`, no markdown parser dependency), plus `formatPostDate()` and a tag-overlap `relatedPosts()` helper. Empty categories pruned from the filter list.
- **Route:** `/blog/:slug` (lazy, same Suspense pattern as siblings) rendering the article with reading time, tags, cover image, **share buttons** (X / LinkedIn / copy-link), a contact CTA, **3 related articles**, `BlogPosting` JSON-LD, unique canonical/OG per article, and a `noindex` not-found state for bad slugs.
- **List:** every card is now a real `<Link>` (with `aria-label`), search input filters title/excerpt/tags alongside categories, dates display as "Jun 18, 2026".
**Why.** The blog goes from decorative to functional: 8 indexable long-form URLs (all in the sitemap), internal linking via related posts, and shareable articles — the standard freelancer SEO engine.
**Build.** ✅ (route smoke-tested: `/blog/modern-react-performance-checklist` → 200).

---

## STEP 11 — ACCESSIBILITY

**Findings & changes.** The prior pass already delivered strong foundations (skip-link, focus-visible styles, modal focus trapping via `useModalBehavior`, `aria-live` chat log, labeled icon links, reduced-motion support). Added in this pass: `aria-pressed` on all filter toggle groups (projects + blog), `sr-only` labels on both new search inputs, `role="status"` empty states, `aria-label`s on article card links and share buttons, semantic `<article>/<time>/<h2>` structure in BlogPost, and correct heading order on the new page (single h1 → h2 sections). Color contrast was untouched (branding rule) — body text on black already passes AA.
**Build.** ✅.

---

## STEP 12 — CLEANUP

**Problems & changes.**
1. **7 unused frontend dependencies** (`@clerk/clerk-react`, `@stripe/react-stripe-js`, `@stripe/stripe-js`, `axios`, `embla-carousel-react`, `react-hook-form`, `recharts` — verified 0 imports each) removed from `package.json`; **3 unused backend deps** (`bcryptjs`, `jsonwebtoken`, `multer`) removed, `express-mongo-sanitize` added.
2. **Typo files renamed** with imports updated: `data/chathknowledge.ts → chatKnowledge.ts`, `components/effects/WordsPulUp.tsx → WordsPullUp.tsx` (unimported; zero-risk rename).
3. **Junk file** `backend/nothing` deleted; dead `image` fields removed from project/case-study data (5.5); stale env keys (Clerk/Stripe publishable) removed from the frontend `.env.example`, which now documents `VITE_API_URL` (required in prod) and `VITE_SITE_URL`.
4. Duplicate-asset audit: none found beyond the fake-webp pairs, now real.
**Build.** ✅ `npm install` clean, `tsc` 0 errors, `vite build` 0 warnings. (Note: the repo has no ESLint config; TypeScript strict + build are the enforced gates. Happy to add a flat-config ESLint setup as a follow-up if you want that gate too.)

---

## STEP 13 — FINAL VALIDATION (evidence)

| Check | Result |
|---|---|
| `npx tsc --noEmit` | **0 errors** |
| `npm run build` (production) | **✓ built, 0 warnings** |
| Backend syntax (`node --check`, all files) | **OK** |
| Backend runtime module load (`VERCEL=1` import) | **OK** |
| Route smoke test via `vite preview` (`/`, `/blog`, `/blog/:slug`, `/projects`, `/case-studies`, `/contact`, unknown path → SPA 404) | **all 200** |
| `localhost` references in production code path | **none** (dev-only fallback in `api.ts`) |
| Canonical domain occurrences | **1 domain everywhere** (sitemap 21 URLs verified) |
| Placeholder content rendered | **none** (samples filtered, concepts labeled) |
| Simulated AI | **none** (real provider or labeled templates) |
| dist size | **3.8 MB** (from ~23 MB) |

Security headers were also added at the platform layer (`vercel.json`): `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` — alongside the existing immutable asset caching.

---

## ⚠️ VERIFY BEFORE DEPLOY (5 minutes)

1. **Email** standardized to `nimrahqureshi13@gmail.com` and **Fiverr** to `fiverr.com/nimrah_013` (majority vote across your own files) — confirm both, and if either is wrong, `src/lib/site.ts` + `public/resume.pdf` + `backend/.env.example` are the places to flip.
2. **BLAI live demo** `https://blai-portfolio.vercel.app` — confirm this deployment is yours (remove the link in `src/data/projects.ts` if not).
3. **Env vars to set in Vercel:** frontend → `VITE_API_URL`; backend → `MONGODB_URI`, `FRONTEND_URL`, `ADMIN_API_KEY` (any long random string), `RESEND_API_KEY`, and `AI_PROVIDER`+`AI_API_KEY` to switch on live AI. Both `.env.example` files document everything.
4. **Facebook** link removed as a placeholder — add your real profile URL to `ContactSection.tsx` when ready; add real GitHub/live URLs to the other projects in `src/data/projects.ts` as they go public.
5. Replace the labeled **concept case studies** with real ones as soon as a client agrees to be referenced — the page structure is ready for it.
