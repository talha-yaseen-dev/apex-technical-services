# Apex Technical Services — website prototype

A front-end prototype for a UAE glass, aluminium, fit-out, MEP and building-
maintenance contractor, built with **Next.js 14** (App Router, static export)
and **Tailwind CSS**, with a full **English + Arabic (RTL)** bilingual build.

> **This is a design/build prototype for a portfolio, not a real business.**
> "Apex Technical Services" is a fictional brand, and every contact detail in
> the site — company name, phone number, WhatsApp, email and address — is a
> placeholder. Nothing here identifies a real company or person.

## Highlights

- **Bilingual** English (`/`) and Arabic (`/ar`) routes with proper RTL layout.
- **Static export** (`output: 'export'`) — deployable to any static host.
- **SEO-ready** — per-page metadata, JSON-LD (`LocalBusiness`, `Service`,
  `FAQ`, `Breadcrumb`), sitemap and robots.
- **Content-driven** — services, divisions, projects and copy live in
  `content/`, so the whole site is edited from data, not markup.
- Responsive, accessible, light-themed UI with a small design-token system.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3100/apex-technical-services
```

## Build

```bash
npm run build    # static site emitted to ./out
```

## Deployment

Published to GitHub Pages under the `/apex-technical-services` project path, so
`next.config.mjs` sets a matching `basePath`. To deploy at a domain root
instead, build with `BASE_PATH= npm run build`.

## Tech

Next.js 14 · TypeScript · Tailwind CSS · static export
