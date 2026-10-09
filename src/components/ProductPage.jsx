import { useLayoutEffect, useRef, useState } from 'react'
import { gsap, reduced, scrollToTop } from '../lib/motion'
import { isPhone, meters, money, products, specRows } from '../data/products'
import Buy from './Buy'
import { productHref } from '../lib/route'
import { useCart } from '../lib/cart'
import Photo from './Photo'
export default function ProductPage({ id }) {
  const p = products.find((x) => x.id === id)
  const [view, setView] = useState(0)
  const root = useRef()
  useLayoutEffect(() => {
    scrollToTop(); setView(0)
    if (!p || reduced()) return
    const ctx = gsap.context(() => {
      gsap.from('.pp-info > *', { y: 30, opacity: 0, stagger: 0.07, duration: 0.8, ease: 'power3.out' })
      gsap.from('.pp-gal', { scale: 0.92, opacity: 0, duration: 1, ease: 'power3.out' })
      gsap.from('.fill', { scaleX: 0, transformOrigin: 'left', duration: 1.2, stagger: 0.08, delay: 0.4, ease: 'power3.out' })
      gsap.from('.pp-feat li', { y: 40, opacity: 0, stagger: 0.1, scrollTrigger: { trigger: '.pp-feat', start: 'top 85%' } })
    }, root)
    return () => ctx.revert()
  }, [id])
  if (!p) return <section className="sec"><h2>Product not found</h2><a className="btn" href="#products">Back to shop</a></section>
  const related = products.filter((x) => x.id !== p.id && x.cat === p.cat).concat(products.filter((x) => x.id !== p.id && x.cat !== p.cat)).slice(0, 3)
  const specs = specRows(p)
  const views = [p.img ? { src: p.img, light: false } : null, { src: p.shot, light: true }].filter(Boolean)
  const cur = views[Math.min(view, views.length - 1)]
  return (
    <div className="pp" ref={root}>
      <section className="sec">
        <nav className="crumbs" aria-label="Breadcrumb"><a href="#top">Home</a> / <a href="#products">Shop</a> / <span>{p.name}</span></nav>
        <div className="pp-top">
          <div className="pp-gal">
            <Photo p={p} shot={cur.light} eager className="pp-main" />
            {views.length > 1 && <div className="thumbs">{views.map((v, i) => <button key={i} className={i === view ? 'on' : ''} onClick={() => setView(i)} aria-label={`Photo ${i + 1}`}><img src={v.src} alt="" /></button>)}</div>}
          </div>
          <div className="pp-info">
            <p className="eyebrow">{p.cat}{p.badge ? ` · ${p.badge}` : ''}</p>
            <h1>{p.name}</h1>
            <p className="lead">{p.tag}</p>
            <p className="price big">{money(p.price)}</p>
            <div className="cta"><Buy p={p} /><a className="btn ghost" href="#contact">Ask a question</a></div>
            <ul className="trust"><li>Free shipping &amp; returns</li><li>1-year warranty</li><li>Available via retail partners</li></ul>
            <p className="muted small">Indicative SA retail price incl. VAT; confirm before ordering. Photos &amp; product names belong to Decibell.</p>
          </div>
        </div>
      </section>
      <section className="sec pp-grid">
        <div><h2>Specifications</h2><table><tbody>{specs.map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}</tbody></table></div>
        <div><h2>Performance</h2>{isPhone(p) ? <p className="muted">Full spec sheet available on request.</p> : <>{meters(p).map(([l, v]) => <div key={l} className="meter" style={{ '--h': p.hue }}><span>{l}<b>{v}</b></span><div className="track"><div className="fill" style={{ width: v + '%' }} /></div></div>)}<p className="muted small">Memory, storage and ports scale from the spec sheet; processor class is an estimate, not a benchmark.</p></>}</div>
      </section>
      <section className="sec pp-feat"><h2>Why you'll love it</h2><ul>{p.feats.map((f, i) => <li key={f}><span className="mono">0{i + 1}</span>{f}</li>)}</ul></section>
      <section className="sec"><h2>You may also like</h2>
        <div className="pgrid">{related.map((r) => <a key={r.id} className="card rel" href={productHref(r.id)} style={{ '--h': r.hue }}><Photo p={r} /><h3>{r.name}</h3><p className="price">{money(r.price)}</p></a>)}</div>
      </section>
    </div>
  )
}
