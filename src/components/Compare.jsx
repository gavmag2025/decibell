import { useLayoutEffect, useRef } from 'react'
import { gsap, reduced } from '../lib/motion'
import { money, products } from '../data/products'
import { useCart } from '../lib/cart'
const bars = [['cpu', 'CPU power'], ['gpu', 'Graphics'], ['cool', 'Cooling'], ['quiet', 'Quietness']]
export default function Compare() {
  const { compare, toggleCompare } = useCart()
  const sel = compare.length ? compare.map((id) => products.find((p) => p.id === id)) : products.slice(0, 3)
  const root = useRef()
  useLayoutEffect(() => {
    if (reduced()) return
    const ctx = gsap.context(() => gsap.from('.fill', { scaleX: 0, transformOrigin: 'left', duration: 1.2, stagger: 0.05, ease: 'power3.out', scrollTrigger: { trigger: root.current, start: 'top 75%' } }), root)
    return () => ctx.revert()
  }, [compare])
  return (
    <section className="sec" id="compare" ref={root}>
      <p className="eyebrow">Side by side</p><h2>Compare models.</h2>
      <p className="muted">{compare.length ? 'Showing your selection.' : 'Tick "Compare" on up to three products above to build your own.'}</p>
      <div className="cmpgrid">
        {sel.map((p) => (
          <div className="cmpcol" key={p.id} style={{ '--h': p.hue }}>
            <h3>{p.name}</h3><p className="price">{money(p.price)}</p>
            {bars.map(([k, l]) => <div key={k} className="meter"><span>{l}<b>{p.perf[k]}</b></span><div className="track"><div className="fill" style={{ width: p.perf[k] + '%' }} /></div></div>)}
            <p className="mono spec">{p.chip}<br />{p.ram} · {p.storage}</p>
            {compare.includes(p.id) && <button className="btn sm ghost" onClick={() => toggleCompare(p.id)}>Remove</button>}
          </div>
        ))}
      </div>
    </section>
  )
}
