import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(__dirname, '..')
const pages = readdirSync(root).filter((f) => f.endsWith('.html'))

// The site is not deployed. The old placeholder host returns 404, so no page
// may advertise an absolute URL for itself until a real host exists.
describe('host-less metadata (site not deployed)', () => {
  it('finds the html pages', () => {
    expect(pages.length).toBeGreaterThanOrEqual(6)
  })

  it.each(pages)('%s does not reference the dead placeholder host', (page) => {
    const html = readFileSync(resolve(root, page), 'utf8')
    expect(html).not.toContain('washington-pa-guide.vercel.app')
  })

  it.each(pages)('%s canonical, og:url and images are relative', (page) => {
    const html = readFileSync(resolve(root, page), 'utf8')
    const refs = [
      ...html.matchAll(/<link rel="canonical" href="([^"]+)"/g),
      ...html.matchAll(/<meta property="og:(?:url|image)" content="([^"]+)"/g),
      ...html.matchAll(/<meta name="twitter:image" content="([^"]+)"/g),
    ].map((m) => m[1])
    expect(refs.length).toBeGreaterThan(0)
    for (const ref of refs) expect(ref.startsWith('/')).toBe(true)
  })

  it('robots.txt and sitemap do not point at the dead host', () => {
    const robots = readFileSync(resolve(root, 'public/robots.txt'), 'utf8')
    expect(robots).not.toContain('washington-pa-guide.vercel.app')
    expect(existsSync(resolve(root, 'public/sitemap.xml'))).toBe(false)
  })
})
