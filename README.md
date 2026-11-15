# Visit Washington, PA

A portfolio-grade static website built with Vite, focused on modern frontend craft:
- editorial visual system and responsive layout
- semantic HTML and keyboard accessibility
- multi-page architecture (`home`, `2-day itinerary`, `food guide`, `about`, `contact`, `privacy`)
- technical SEO foundations (meta tags, OG/Twitter tags, canonical, schema, robots, sitemap)
- lightweight progressive enhancement with vanilla JavaScript interactions

## Local development

```bash
pnpm install
pnpm dev
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
