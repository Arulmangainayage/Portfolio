# Arul Mangai Nayage S — Portfolio

A fully responsive, editorial-style portfolio for an AI & Data Engineer. Built with **Vite + React + Tailwind CSS**, ready to deploy as a static site.

The design follows the `UI/DESIGN.md` system (warm ivory canvas, deep olive actions, dusty rose accents, Playfair Display / Manrope / Space Grotesk typography). The original static mockup lives in `UI/` as a reference and is not part of the build.

---

## Features

- Responsive layout from 320px up — no horizontal scroll
- Floating pill navigation with scroll-spy highlighting and a scroll progress bar
- Accessible mobile drawer (Escape to close, scroll lock, `aria-expanded`)
- Scroll-triggered reveal animations that respect `prefers-reduced-motion`
- Paused-on-hover technology marquee
- Working contact form:
  - client-side validation with inline errors and focus management
  - Posts to **Formspree** when configured
  - Falls back to a pre-filled `mailto:` when not configured
  - Spam honeypot, sending state, success and error states
- Copy-email button
- Live Bengaluru (IST) clock in the footer
- Styled résumé view at `#resume` with a print / Save as PDF action and a print-friendly layout
- Semantic HTML, skip link, focus-visible styles, labelled form fields
- SEO metadata, Open Graph / Twitter cards, JSON-LD `Person` schema, favicon
- Netlify build config with cache and security headers

---

## Getting started

Requires **Node.js 18+** (Node 22 recommended).

```bash
npm install
npm run dev
```

The dev server runs at http://localhost:5173.

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Preview the production build locally |

---

## Before you deploy — checklist

1. **Social links** — in `src/data/content.js`, replace `profile.github` and `profile.linkedin` with your real URLs.
2. **Domain** — in `index.html`, replace every `https://example.com` (canonical, `og:url`, `og:image`, `twitter:image`) with your deployed domain.
3. **Portrait** — replace `public/portrait.png` with your own image (same filename, roughly square portrait).
4. **Résumé** — the built-in résumé lives at `#resume` and is assembled from the same content in `src/data/content.js`. To use an external PDF instead, put your CV at `public/resume.pdf` and set `profile.resumeUrl = "/resume.pdf"`; every résumé link will point there.
5. **Contact form** — see below. It works without setup via `mailto:`, but Formspree gives real inbox delivery.

---

## Contact form

The form reads `VITE_FORM_ENDPOINT` at build time.

### Option A — Formspree (recommended)

1. Create a form at [formspree.io](https://formspree.io) (free tier available).
2. Copy the endpoint, e.g. `https://formspree.io/f/abcdwxyz`.
3. Create a `.env` file in the project root:

   ```bash
   VITE_FORM_ENDPOINT=https://formspree.io/f/abcdwxyz
   ```

4. For Netlify: **Site configuration → Environment variables → Add variable** with key `VITE_FORM_ENDPOINT`, then redeploy. Vite bakes env vars in at build time, so changing it requires a new build.

### Option B — No service

Leave `VITE_FORM_ENDPOINT` empty. The form still validates, then opens the visitor's email client with the subject and message pre-filled, addressed to `arulmangainayages@gmail.com`.

> Using a different form provider? Add its origin to `connect-src` in the `Content-Security-Policy` in `netlify.toml`, otherwise the browser will block the request.

---

## Deploy to Netlify

### Option 1 — Git (recommended)

1. Push this folder to GitHub/GitLab.
2. In Netlify: **Add new site → Import an existing project**, pick the repo.
3. Netlify reads `netlify.toml`, so the defaults are already correct:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add `VITE_FORM_ENDPOINT` under environment variables (if using Formspree).
5. Deploy.

### Option 2 — Drag and drop

```bash
npm run build
```

Drag the generated `dist/` folder onto [app.netlify.com/drop](https://app.netlify.com/drop). Build locally first if you need the form endpoint baked in.

The site is a single page, so no SPA redirect rules are required.

---

## Editing content

Almost all copy lives in **`src/data/content.js`** — profile, navigation, hero, about, capabilities, projects, experience, skills, education, recognition, and contact copy. Components read from it, so you rarely need to touch JSX.

Other common edits:

| What | Where |
| --- | --- |
| Page title / meta / OG tags | `index.html` |
| Colors, fonts, spacing, radii | `tailwind.config.js` |
| Global CSS, reveals, marquee, skip link | `src/index.css` |
| Portrait | `public/portrait.png` |
| Favicon | `public/favicon.svg` |
| Netlify headers / caching | `netlify.toml` |

---

## Project structure

```
.
├── public/
│   ├── favicon.svg
│   └── portrait.png
├── src/
│   ├── components/
│   │   ├── About.jsx           # About + system schematic
│   │   ├── Capabilities.jsx    # "What I do" cards
│   │   ├── Contact.jsx         # Validated form + form states
│   │   ├── Education.jsx
│   │   ├── Experience.jsx      # Timeline
│   │   ├── Footer.jsx          # Live IST clock
│   │   ├── Hero.jsx
│   │   ├── Icons.jsx           # Inline SVG icons
│   │   ├── Marquee.jsx
│   │   ├── Navbar.jsx          # Scroll-spy + mobile drawer
│   │   ├── ProjectVisual.jsx   # The four terminal mockups
│   │   ├── Projects.jsx
│   │   ├── Recognition.jsx
│   │   ├── Reveal.jsx          # IntersectionObserver wrapper
│   │   ├── Resume.jsx          # Print-ready résumé view at #resume
│   │   ├── ScrollProgress.jsx
│   │   ├── SectionHeading.jsx
│   │   └── Skills.jsx
│   ├── data/content.js         # ← all site copy
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── UI/                         # Original design reference (not built)
├── index.html
├── netlify.toml
├── tailwind.config.js
└── vite.config.js
```

---

## Notes

- Fonts load from Google Fonts, so the first paint depends on that request. The CSP only allows `fonts.googleapis.com` and `fonts.gstatic.com`.
- Animations are disabled automatically for visitors who set **reduce motion** in their OS.
- The contact form has no backend of its own — that is intentional, so the site can be hosted as static files anywhere.
