# Decibell Store (concept redesign)

A modern mini PC storefront concept for Decibell (South Africa), built with **React 19**, **GSAP + ScrollTrigger** and **Lenis** smooth scrolling on Vite.

> Demo only. Products, prices and specs are placeholders and this is not the official Decibell site.

Features: animated hero, pinned scroll-driven tech story, filterable/sortable product grid with 3D tilt cards, product detail modal, compare tool, persistent cart drawer with WhatsApp checkout, FAQ and contact form. Respects `prefers-reduced-motion`.

```bash
npm install
npm run dev      # local dev
npm run build    # production build in dist/
```

Before going live: set the real WhatsApp number in `src/components/Cart.jsx` and real catalogue data in `src/data/products.js`.
