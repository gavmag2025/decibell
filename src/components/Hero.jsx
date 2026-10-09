import { useLayoutEffect, useRef } from 'react'
import { gsap, reduced, scrollToEl } from '../lib/motion'
import MiniPC from './MiniPC'
export default function Hero() {
  const root = useRef()
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (reduced()) return
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.from('.hero .ln span', { yPercent: 110, duration: 1.1, stagger: 0.12 })
        .from('.hero .sub, .hero .cta', { y: 24, opacity: 0, duration: 0.8, stagger: 0.1 }, '-=0.6')
        .from('.hero .pc', { scale: 0.6, rotate: -8, opacity: 0, duration: 1.4 }, 0.2)
      gsap.to('.hero .pc', { y: -16, duration: 2.6, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to('.hero .pc-fan', { rotation: 360, svgOrigin: '210 120', duration: 3, repeat: -1, ease: 'none' })
      gsap.to('.hero .pc-led', { opacity: 0.35, duration: 1.2, repeat: -1, yoyo: true })
      gsap.to('.hero .pc', { yPercent: 18, scale: 1.15, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } })
      gsap.to('.hero .copy', { yPercent: -25, opacity: 0, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom 30%', scrub: true } })
      const mv = (e) => gsap.to('.hero .grid', { x: (e.clientX / innerWidth - 0.5) * -30, y: (e.clientY / innerHeight - 0.5) * -30, duration: 1 })
      window.addEventListener('pointermove', mv)
      return () => window.removeEventListener('pointermove', mv)
    }, root)
    return () => ctx.revert()
  }, [])
  return (
    <section className="hero" id="top" ref={root}>
      <div className="grid" aria-hidden />
      <div className="copy">
        <p className="eyebrow">UNPACK · CONNECT · DOMINATE</p>
        <h1><span className="ln"><span>Small box.</span></span><span className="ln"><span className="grad">Absurd power.</span></span></h1>
        <p className="sub">Mini PCs engineered in South Africa's favourite price brackets. From silent office boxes to 8-core gaming monsters, all in the palm of your hand.</p>
        <div className="cta"><button className="btn" onClick={() => scrollToEl('#products')}>Shop mini PCs</button><button className="btn ghost" onClick={() => scrollToEl('#tech')}>See the tech</button></div>
        <ul className="stats"><li><b>1-yr</b> warranty</li><li><b>Free</b> shipping</li><li><b>4K×4</b> displays</li></ul>
      </div>
      <div className="stage"><MiniPC className="pc" hue={190} id="hero" /></div>
    </section>
  )
}
