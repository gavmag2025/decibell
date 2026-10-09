import { useLayoutEffect, useRef } from 'react'
import { gsap, reduced } from '../lib/motion'
const IMG = import.meta.env.BASE_URL + 'img/gk3.webp'
const steps = [
  ['Processors', 'Ryzen 7, Core i9, Core i3, N150', 'Pick the chip that fits the job: Ryzen 7 5875U and Core i9-11900H for heavy work, Core i3-1215U and Intel N-series for everyday use.'],
  ['Connectivity', 'Dual HDMI, DisplayPort and USB-C', 'Most models drive two displays and offer up to six USB-A ports. The GK3 and S1 add dual LAN for routers and POS setups.'],
  ['Storage and memory', 'Up to 16GB RAM and 1TB SSD', 'Fast SSDs and 8 to 16GB memory as standard, with configurations to suit your workload.'],
  ['Footprint', 'About 12 to 13 cm square', 'Under 5 cm tall. Tuck it behind a monitor, in a shop counter or in a server cupboard.'],
]
const hot = [[63, 70], [11, 40], [47, 14], [93, 76]]
export default function Tech() {
  const root = useRef()
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (reduced()) return
      const items = gsap.utils.toArray('.tstep'), dots = gsap.utils.toArray('.hot')
      gsap.set(items.slice(1), { opacity: 0.18 }); gsap.set(dots, { scale: 0.4, opacity: 0.35 }); gsap.set(dots[0], { scale: 1, opacity: 1 })
      gsap.to('.tech .pulse2', { scale: 2.4, opacity: 0, duration: 2, repeat: -1, ease: 'power1.out' })
      const tl = gsap.timeline({ scrollTrigger: { trigger: root.current, start: 'top top', end: '+=' + items.length * 70 + '%', scrub: 0.6, pin: true } })
      items.forEach((el, i) => {
        if (i) { tl.to(items[i - 1], { opacity: 0.18, duration: 1 }, i * 4 - 1).to(el, { opacity: 1, x: 10, duration: 1 }, i * 4 - 1)
          tl.to(dots[i - 1], { scale: 0.4, opacity: 0.35, duration: 1 }, i * 4 - 1).to(dots[i], { scale: 1, opacity: 1, duration: 1 }, i * 4 - 1) }
        tl.to('.tech .tphoto', { rotate: (i % 2 ? -1 : 1) * 5, scale: 1 + i * 0.05, duration: 3 }, i * 4)
      })
      tl.to('.tech .bar-fill', { scaleX: 1, duration: items.length * 4, ease: 'none' }, 0)
    }, root)
    return () => ctx.revert()
  }, [])
  return (
    <section className="tech" id="tech" ref={root}>
      <div className="tcol">
        <p className="eyebrow">Inside the range</p>
        <h2>Built for how you work.</h2>
        {steps.map(([k, h, p], i) => <div className="tstep" key={k}><span className="mono">0{i + 1} / {k}</span><h3>{h}</h3><p>{p}</p></div>)}
        <div className="bar-track"><div className="bar-fill" /></div>
      </div>
      <div className="stage"><div className="tphoto"><img src={IMG} alt="Decibell GK3 mini PCs" loading="lazy" />
        {hot.map(([x, y], i) => <span key={i} className="hot" style={{ left: x + '%', top: y + '%' }}>{i === 0 && <i className="pulse2" />}<b>{i + 1}</b></span>)}</div></div>
    </section>
  )
}
