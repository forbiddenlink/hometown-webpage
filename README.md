# Visit Washington, PA

A portfolio-grade static website built with Vite, focused on modern frontend craft:
- editorial visual system and responsive layout
- semantic HTML and keyboard accessibility
- multi-page architecture (`home`, `2-day itinerary`, `food guide`, `about`, `contact`, `privacy`)
- technical SEO foundations (meta tags, OG/Twitter tags, canonical, schema, robots, sitemap)
- lightweight progressive enhancement with vanilla JavaScript interactions

## Local development

The repo does not pin a Node version; use a current LTS release with pnpm. No environment variables are read.

```bash
pnpm install
pnpm dev          # vite dev server (pnpm start is an alias)
```

## Project structure

```text
index.html, weekend-itinerary.html, eat-drink.html,
about.html, contact.html, privacy-policy.html   # one HTML file per page
styles.css, script.js                           # shared styles and vanilla JS
public/                                         # robots.txt, favicon.svg
__tests__/                                      # Vitest and Node tests
vite.config.js                                  # multi-page build and security headers
```

## Production build

```bash
pnpm build
pnpm preview
```

## Testing and lint

```bash
pnpm test        # vitest (watch)
pnpm test:run    # vitest run (single pass)
pnpm biome:check
```

## Deployment note

The site is not deployed yet, so canonicals, og:url and og:image are relative and `public/sitemap.xml` is removed
(sitemaps and `robots.txt` Sitemap lines need absolute URLs).
After the first real deploy, add absolute URLs for the production host in the HTML heads, restore
`public/sitemap.xml` and add a `Sitemap:` line to `public/robots.txt`.

## License

MIT. See [LICENSE](LICENSE).
