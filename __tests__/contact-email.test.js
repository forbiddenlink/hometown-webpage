import { describe, it, expect } from 'vitest'
import { readFileSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'

const root = resolve(__dirname, '..')
const files = [
  ...readdirSync(root).filter((f) => f.endsWith('.html')),
  ...readdirSync(resolve(root, 'public')).map((f) => `public/${f}`),
]

// washingtonpa-guide.com is not owned, so mail sent there goes nowhere.
describe('contact email', () => {
  it('finds files to scan', () => {
    expect(files.length).toBeGreaterThanOrEqual(6)
  })

  it.each(files)('%s does not reference washingtonpa-guide.com', (file) => {
    expect(readFileSync(resolve(root, file), 'utf8')).not.toMatch(/washingtonpa-guide\.com/i)
  })
})
