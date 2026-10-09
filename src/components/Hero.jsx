import { useLayoutEffect, useRef } from 'react'
import { gsap, reduced, scrollToEl } from '../lib/motion'
const IMG = import.meta.env.BASE_URL + 'img/am02-pro.webp'
const chips = [['Ryzen 7 5875U', '8 cores'], ['16GB · 1TB', 'Memory + SSD'], ['USB-C + DP', 'Dual display'], ['Windows 11 Pro', 'Pre-installed']]
export default function Hero() {
  const root = useRef()
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (reduced()) return
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
      tl.from('.hero .ln span', { yPercent: 110, duration: 1.1, stagger: 0.12 })
        .from('.hero .sub, .hero .cta, .hero .stats', { y: 24, opacity: 0, duration: 0.8, stagger: 0.1 }, '-=0.6')
        .from('.hero .rig', { scale: 0.7, rotateY: -35, opacity: 0, duration: 1.6 }, 0.1)
        .from('.hero .hchip', { scale: 0.4, opacity: 0, stagger: 0.15, duration: 0.8, ease: 'back.out(2)' }, 0.9)
      gsap.to('.hero .float', { y: -18, duration: 2.8, repeat: -1, yoyo: true, ease: 'sine.inOut' })
      gsap.to('.hero .shine', { backgroundPosition: '-120% 0', duration: 2.6, repeat: -1, repeatDelay: 1.2, ease: 'power2.inOut' })
      gsap.to('.hero .ring', { rotation: 360, duration: 24, repeat: -1, ease: 'none' })
      gsap.to('.hero .pulse', { scale: 1.6, opacity: 0, duration: 2.4, repeat: -1, stagger: 0.8, ease: 'power1.out' })
      gsap.to('.hero .hchip', { y: (i) => (i % 2 ? 10 : -10), duration: 2.2, repeat: -1, yoyo: true, ease: 'sine.inOut', stagger: 0.3 })
      gsap.to('.hero .rig', { yPercent: 14, scale: 1.12, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } })
      gsap.to('.hero .copy', { yPercent: -20, opacity: 0, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom 30%', scrub: true } })
      const rx = gsap.quickTo('.hero .tilt', 'rotateX', { duration: 0.8 }), ry = gsap.quickTo('.hero .tilt', 'rotateY', { duration: 0.8 })
      const gx = gsap.quickTo('.hero .grid', 'x', { duration: 1 }), gy = gsap.quickTo('.hero .grid', 'y', { duration: 1 })
      const mv = (e) => { const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5; ry(x * 24); rx(y * -18); gx(x * -30); gy(y * -30) }
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
        <p className="sub">Windows 11 Pro mini PCs from Ryzen 7 and Core i9 down to value Intel N150. Free shipping and a 1-year warranty across South Africa.</p>
        <div className="cta"><button className="btn" onClick={() => scrollToEl('#products')}>Shop mini PCs</button><button className="btn ghost" onClick={() => scrollToEl('#tech')}>See the tech</button></div>
        <ul className="stats"><li><b>1-yr</b> warranty</li><li><b>Free</b> shipping</li><li><b>Win 11</b> Pro included</li></ul>
      </div>
      <div className="stage">
        <div className="rig" style={{ perspective: 1100 }}>
          <div className="ring r1" /><div className="ring r2" /><i className="pulse" /><i className="pulse" /><i className="pulse" />
          <div className="tilt"><div className="float">
            <div className="prod"><img src={IMG} alt="Decibell AM02 Pro mini PC" fetchpriority="high" /><span className="shine" style={{ WebkitMaskImage: `url(${IMG})`, maskImage: `url(${IMG})` }} /></div>
          </div></div>
          {chips.map(([a, b], i) => <div key={a} className={'hchip c' + i}><b>{a}</b><span>{b}</span></div>)}
        </div>
      </div>
    </section>
  )
}
