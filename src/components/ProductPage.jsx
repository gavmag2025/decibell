import { useLayoutEffect, useRef, useState } from 'react'
import { gsap, reduced, scrollToTop } from '../lib/motion'
import { money, products } from '../data/products'
import { productHref } from '../lib/route'
import { useCart } from '../lib/cart'
import Photo from './Photo'
const bars = [['cpu', 'CPU power'], ['gpu', 'Graphics'], ['cool', 'Cooling'], ['quiet', 'Quietness']]
export default function ProductPage({ id }) {
  const p = products.find((x) => x.id === id)
  const { add } = useCart()
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
  const specs = [['Processor', p.chip], ['Memory', p.ram], ['Storage', p.storage], [p.cat === 'Phones' ? 'Display' : 'Graphics', p.gpu], ['Ports', p.ports], ['Warranty', '1 year standard'], ['Shipping', 'Free across South Africa']]
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
            <p className="price big">{money(p.price)} {p.was && <s>{money(p.was)}</s>}</p>
            <div className="cta"><button className="btn" onClick={() => add(p.id)}>Add to cart</button><a className="btn ghost" href="#contact">Ask a question</a></div>
            <ul className="trust"><li>Free shipping &amp; returns</li><li>1-year warranty</li><li>In stock at retail partners</li></ul>
            <p className="muted small">Demo pricing. Photos &amp; product names belong to Decibell.</p>
          </div>
        </div>
      </section>
      <section className="sec pp-grid">
        <div><h2>Specifications</h2><table><tbody>{specs.map(([k, v]) => <tr key={k}><th>{k}</th><td>{v}</td></tr>)}</tbody></table></div>
        <div><h2>Performance</h2>{bars.map(([k, l]) => <div key={k} className="meter" style={{ '--h': p.hue }}><span>{l}<b>{p.perf[k]}</b></span><div className="track"><div className="fill" style={{ width: p.perf[k] + '%' }} /></div></div>)}</div>
      </section>
      <section className="sec pp-feat"><h2>Why you'll love it</h2><ul>{p.feats.map((f, i) => <li key={f}><span className="mono">0{i + 1}</span>{f}</li>)}</ul></section>
      <section className="sec"><h2>You may also like</h2>
        <div className="pgrid">{related.map((r) => <a key={r.id} className="card rel" href={productHref(r.id)} style={{ '--h': r.hue }}><Photo p={r} /><h3>{r.name}</h3><p className="price">{money(r.price)}</p></a>)}</div>
      </section>
    </div>
  )
}
