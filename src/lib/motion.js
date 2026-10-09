import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
gsap.registerPlugin(ScrollTrigger)
export const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
let lenis
export function initSmoothScroll() {
  if (reduced()) return null
  lenis = new Lenis({ lerp: 0.09, smoothWheel: true })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((t) => lenis.raf(t * 1000))
  gsap.ticker.lagSmoothing(0)
  return lenis
}
export const scrollToTop = () => (lenis ? lenis.scrollTo(0, { immediate: true }) : window.scrollTo(0, 0))
export const scrollToEl = (sel) => { const el = document.querySelector(sel); if (!el) return; lenis ? lenis.scrollTo(el, { offset: -70 }) : el.scrollIntoView() }
export { gsap, ScrollTrigger }
