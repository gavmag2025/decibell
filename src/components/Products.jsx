import { useLayoutEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger, reduced } from '../lib/motion'
import { CATEGORIES, isPhone, money, products, specRows } from '../data/products'
import Buy from './Buy'
import { useCart } from '../lib/cart'
import Photo from './Photo'
import { productHref } from '../lib/route'

function Card({ p, onOpen }) {
  const { compare, toggleCompare } = useCart()
  const ref = useRef()
  const tilt = (e) => {
    if (reduced()) return
    const r = ref.current.getBoundingClientRect()
    gsap.to(ref.current, { rotateY: ((e.clientX - r.left) / r.width - 0.5) * 12, rotateX: ((e.clientY - r.top) / r.height - 0.5) * -12, duration: 0.4 })
  }
  const reset = () => gsap.to(ref.current, { rotateX: 0, rotateY: 0, duration: 0.6 })
  return (
    <article className="card" ref={ref} onPointerMove={tilt} onPointerLeave={reset} style={{ '--h': p.hue }}>
      {p.badge && <span className="badge">{p.badge}</span>}
      <a className="thumb" href={productHref(p.id)} aria-label={`View ${p.name}`}><Photo p={p} /></a>
      <h3><a href={productHref(p.id)}>{p.name}</a></h3>
      <p className="mono spec">{p.chip} · {p.ram} · {p.storage}</p>
      <p className="price">{p.price == null ? <span className="muted">{money(p.price)}</span> : money(p.price)}</p>
      <div className="row">
        <Buy p={p} small />
        <a className="btn sm ghost" href={productHref(p.id)}>Details</a>
        {!isPhone(p) && <label className="cmp"><input type="checkbox" checked={compare.includes(p.id)} onChange={() => toggleCompare(p.id)} /> Compare</label>}
      </div>
    </article>
  )
}

export default function Products() {
  const [cat, setCat] = useState('All')
  const [sort, setSort] = useState('feat')
  const [open, setOpen] = useState(null)
  const root = useRef()
  let list = products.filter((p) => cat === 'All' || p.cat === cat)
  if (sort === 'lo') list = [...list].sort((a, b) => a.price - b.price)
  if (sort === 'hi') list = [...list].sort((a, b) => b.price - a.price)
  useLayoutEffect(() => {
    if (reduced()) return
    const ctx = gsap.context(() => {
      gsap.fromTo('.card', { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: '.pgrid', start: 'top 85%' } })
    }, root)
    ScrollTrigger.refresh()
    return () => ctx.revert()
  }, [cat, sort])
  return (
    <section className="sec" id="products" ref={root}>
      <p className="eyebrow">The store</p>
      <h2>Pick your power.</h2>
      <div className="filters" role="toolbar" aria-label="Filter products">
        {CATEGORIES.map((c) => <button key={c} className={'chip ' + (c === cat ? 'on' : '')} aria-pressed={c === cat} onClick={() => setCat(c)}>{c}</button>)}
        <select aria-label="Sort" value={sort} onChange={(e) => setSort(e.target.value)}><option value="feat">Featured</option><option value="lo">Price: low to high</option><option value="hi">Price: high to low</option></select>
      </div>
      <div className="pgrid">{list.map((p) => <Card key={p.id} p={p} onOpen={setOpen} />)}</div>
      {open && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={open.name} onClick={() => setOpen(null)}>
          <div className="mbox" onClick={(e) => e.stopPropagation()}>
            <button className="x" onClick={() => setOpen(null)} aria-label="Close">×</button>
            <Photo p={open} />
            <div>
              <p className="eyebrow">{open.cat}</p><h3>{open.name}</h3><p>{open.tag}</p>
              <ul>{open.feats.map((f) => <li key={f}>{f}</li>)}</ul>
              <table><tbody>{specRows(open).slice(0, 6).map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}</tbody></table>
              <p className="price big">{money(open.price)}</p>
              <Buy p={open} onDone={() => setOpen(null)} />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
