import { useLayoutEffect, useRef } from 'react'
import { gsap, reduced } from '../lib/motion'
import MiniPC from './MiniPC'
const steps = [
  ['Cooling', 'Vapour chamber + dual fans', 'Sustained boost clocks without the jet-engine noise. Tuned to stay under 35 dB at idle.'],
  ['Performance', 'Zen 4 and Intel 12th gen', 'Up to 8 cores / 16 threads. Gaming, rendering and 40 browser tabs, all at once.'],
  ['Connectivity', 'USB4, HDMI 2.1, 2.5G LAN', 'Drive four displays up to 8K, add an eGPU, and never wait on a file copy.'],
  ['Footprint', 'Fits behind your monitor', 'VESA mount in the box. Reclaim your desk and cut power use by up to 80%.'],
]
export default function Tech() {
  const root = useRef()
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (reduced()) return
      const items = gsap.utils.toArray('.tstep')
      gsap.set(items.slice(1), { opacity: 0.18 })
      const tl = gsap.timeline({ scrollTrigger: { trigger: root.current, start: 'top top', end: '+=' + items.length * 70 + '%', scrub: 0.6, pin: true } })
      tl.to('.tech .pc', { rotate: 8, scale: 1.1, duration: 4, ease: 'none' }, 0)
      items.forEach((el, i) => {
        if (i) tl.to(items[i - 1], { opacity: 0.18, duration: 1 }, i * 4 - 1).to(el, { opacity: 1, x: 10, duration: 1 }, i * 4 - 1)
        tl.to('.tech .pc', { rotate: (i % 2 ? -1 : 1) * 10, scale: 1 + i * 0.07, duration: 3 }, i * 4)
      })
      tl.to('.tech .bar-fill', { scaleX: 1, duration: items.length * 4, ease: 'none' }, 0)
    }, root)
    return () => ctx.revert()
  }, [])
  return (
    <section className="tech" id="tech" ref={root}>
      <div className="tcol">
        <p className="eyebrow">Inside the box</p>
        <h2>Engineered, not just assembled.</h2>
        {steps.map(([k, h, p], i) => <div className="tstep" key={k}><span className="mono">0{i + 1} / {k}</span><h3>{h}</h3><p>{p}</p></div>)}
        <div className="bar-track"><div className="bar-fill" /></div>
      </div>
      <div className="stage"><MiniPC className="pc" hue={265} id="tech" /></div>
    </section>
  )
}
