# Accio Freight — Marketing Website

Official marketing website for **Accio Freight**, a freight forwarding and
customs brokerage agency offering ocean, air, and ground transportation plus
customs clearance services.

🌐 Live site: [acciofreight.com](https://acciofreight.com)

## Overview

A static, multilingual (ES/EN) one-page site covering the company's services,
process, and contact form, plus a standalone legal/terms page. Built with
plain HTML, CSS, and vanilla JavaScript — no build step, no framework,
no dependencies.

## Tech stack

- **HTML5** — semantic markup, `data-i18n` attributes for translation
- **CSS3** — responsive layout with fluid typography (`clamp()`), no
  preprocessor or framework
- **Vanilla JavaScript** — language toggle (ES/EN), theme toggle
  (light/dark), mobile navigation, contact form handling

## Project structure

```
.
├── index.html              # Home page
├── legal.html               # Terms & legal documents page
├── css/
│   ├── index.css             # Main stylesheet
│   ├── legal.css             # Legal page stylesheet
│   └── index-noscript.css    # Fallback styles for no-JS
├── js/
│   ├── index.js               # Home page interactivity
│   ├── legal.js                # Legal page interactivity
│   ├── site.js                  # Shared site behavior (nav, toggles)
│   ├── i18n-data-index.js        # ES/EN copy for the home page
│   └── i18n-data-legal.js         # ES/EN copy for the legal page
├── assets/
│   ├── brand/                # Logos
│   ├── icons/                 # Service/feature icons
│   └── images/                 # Hero, service, and section photography
├── CNAME                   # Custom domain for GitHub Pages
├── robots.txt / sitemap.xml  # SEO
└── .github/workflows/        # GitHub Pages deployment workflow
```

## Deployment

The site is deployed automatically via **GitHub Pages** on every push to
`main` (see `.github/workflows/static.yml`). The custom domain
(`acciofreight.com`) is configured through the `CNAME` file and points to
GitHub Pages via DNS records managed in Namecheap.

No build step is required — the repository is served as-is.

## License

This repository is public **only** because GitHub Pages requires it for
free static hosting on a custom domain. It is **not** open source.

All content is proprietary — see [`LICENSE`](./LICENSE). No part of this
code or its assets may be copied, reused, or redistributed without written
permission from Accio Freight SAC.
