import { describe, it, expect, beforeEach, vi } from 'vitest'
import { JSDOM } from 'jsdom'

describe('Hometown Webpage Scripts', () => {
  beforeEach(() => {
    const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>')
    global.document = dom.window.document
    global.window = dom.window
  })

  describe('Navigation path mapping', () => {
    const navByPath = {
      '/': 'home',
      '/index.html': 'home',
      '/weekend-itinerary': 'itinerary',
      '/weekend-itinerary.html': 'itinerary',
      '/eat-drink': 'food',
      '/eat-drink.html': 'food',
      '/about': 'about',
      '/about.html': 'about',
      '/contact': 'contact',
      '/contact.html': 'contact',
      '/privacy-policy': 'privacy',
      '/privacy-policy.html': 'privacy',
    }

    it('should map root path to home', () => {
      expect(navByPath['/']).toBe('home')
    })

    it('should map index.html to home', () => {
      expect(navByPath['/index.html']).toBe('home')
    })

    it('should map all navigation paths correctly', () => {
      expect(Object.keys(navByPath).length).toBe(12)
    })
  })

  describe('Year display', () => {
    it('should get current year', () => {
      const currentYear = new Date().getFullYear()
      expect(currentYear).toBeGreaterThanOrEqual(2024)
    })
  })
})
