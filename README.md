# Decibell Store (concept redesign)

A modern mini PC storefront concept for Decibell (South Africa), built with **React 19**, **GSAP + ScrollTrigger** and **Lenis** smooth scrolling on Vite.

> Concept redesign, not the official Decibell site. Specs come from Decibell's official spec sheets on decibell.co.za. Prices are indicative South African retail prices incl. VAT (pcinternational.co.za, pricecheck.co.za, Oct 2026) and change often, so confirm before selling. The phones have no public price and show "Price on request".

Photos are Decibell's own product images (from decibell.co.za), stored in `public/img`. Product pages live at `#/product/<id>`.

Features: animated hero, pinned scroll-driven tech story, filterable/sortable product grid with 3D tilt cards, product detail modal, compare tool, persistent cart drawer with WhatsApp checkout, FAQ and contact form. Respects `prefers-reduced-motion`.

```bash
npm install
npm run dev      # local dev
npm run build    # production build in dist/
```

Before going live: set the real WhatsApp number in `src/components/Cart.jsx` and confirm final prices in `src/data/products.js`.
