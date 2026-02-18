import { defineConfig } from "vite";

const securityHeaders = {
  "Content-Security-Policy":
    "default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; script-src 'self' 'unsafe-inline'; connect-src 'self' http: https: ws:; frame-ancestors 'self'; base-uri 'self'; form-action 'self' mailto:;",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Frame-Options": "SAMEORIGIN",
  "X-Content-Type-Options": "nosniff"
};

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        itinerary: "weekend-itinerary.html",
        food: "eat-drink.html",
        about: "about.html",
        contact: "contact.html",
        privacy: "privacy-policy.html"
      }
    }
  },
  server: {
    headers: securityHeaders
  },
  preview: {
    headers: securityHeaders
  }
});
