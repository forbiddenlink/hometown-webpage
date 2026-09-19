# Visit Washington, PA

Portfolio-grade static website for Washington, PA (a hometown showcase): multi-page
editorial site with SEO foundations and vanilla-JS progressive enhancement. Built
with Vite. Deployed on Vercel (canonical URLs currently point at
`washington-pa-guide.vercel.app`, a placeholder to swap before real launch).

Repo: https://github.com/forbiddenlink/hometown-webpage

## Stack

- Vite (multi-page build), vanilla JS/CSS/HTML (no framework)
- Biome 2.5 for lint/format
- Vitest 4 + jsdom for tests
- pnpm (pnpm-lock.yaml, pinned `packageManager: pnpm@10.34.5`)

## Commands

- `pnpm dev` / `pnpm start` - dev server
- `pnpm build` - production build (multi-entry, see `vite.config.js`)
- `pnpm preview` - preview a production build
- `pnpm test` - vitest (watch)
- `pnpm test:run` - vitest run (single pass)
- `pnpm biome:check` - `biome check .`
- `pnpm biome:fix` - `biome check . --write`
- `pnpm biome:format` - `biome format . --write`

## Layout

Multi-page site, one HTML file per page, all built via `vite.config.js`
`rollupOptions.input`:

- `index.html` - home
- `weekend-itinerary.html` - 2-day itinerary
- `eat-drink.html` - food guide
- `about.html`, `contact.html`, `privacy-policy.html`
- `script.js` - shared vanilla-JS interactions (nav highlighting, attraction
  filters, scroll-reveal animations)
- `styles.css` - shared styles
- `__tests__/script.test.js` - vitest/jsdom tests for `script.js`
- `robots.txt`, `sitemap.xml` - static SEO files (contain the placeholder domain)

## Conventions

- Security headers (CSP, X-Frame-Options, etc.) are set in `vite.config.js` for
  both `server` and `preview`, not in a hosting config file
- No env vars are read by the app; `.env.local` only holds a Vercel-generated
  `VERCEL_OIDC_TOKEN`, unused by the code

## Gotchas

- README's local-dev section still shows an older package manager's syntax; this
  repo is pnpm-only (`pnpm-lock.yaml`, `packageManager` pin, no
  `package-lock.json`) - use the Commands section above instead.
- Canonical URLs, OG tags, `robots.txt`, and `sitemap.xml` all reference the
  placeholder `washington-pa-guide.vercel.app` domain; update before real launch.
