import { useLayoutEffect, useRef } from 'react'
import { gsap, reduced, scrollToTop } from '../lib/motion'
import { SHEET_BASE, money, products } from '../data/products'
import { productHref } from '../lib/route'
import Buy from './Buy'
import Photo from './Photo'
const phones = products.filter((p) => p.cat === 'Phones')
const val = (p, k) => (p.full.find(([a]) => a === k) || [])[1] ?? 'n/a'
const rows = ['Operating system', 'Display', 'Chipset', 'Memory', 'Camera', 'Network', 'SIM', 'Battery', 'Bluetooth', 'GPS', 'FM radio', 'Flashlight', 'Dimensions', 'Weight']
  .filter((k) => phones.some((p) => p.full.some(([a]) => a === k)))
export default function PhonesPage() {
  const root = useRef()
  useLayoutEffect(() => {
    scrollToTop()
    if (reduced()) return
    const ctx = gsap.context(() => {
      gsap.from('.ph-head > *', { y: 30, opacity: 0, stagger: 0.08, duration: 0.8, ease: 'power3.out' })
      gsap.from('.phcard', { y: 60, opacity: 0, stagger: 0.12, duration: 0.9, ease: 'power3.out', delay: 0.2 })
      gsap.from('.ph-table tbody tr', { x: -20, opacity: 0, stagger: 0.04, duration: 0.5, scrollTrigger: { trigger: '.ph-table', start: 'top 80%' } })
    }, root)
    return () => ctx.revert()
  }, [])
  return (
    <div className="pp" ref={root}>
      <section className="sec">
        <nav className="crumbs" aria-label="Breadcrumb"><a href="#top">Home</a> / <span>Phones</span></nav>
        <div className="ph-head"><p className="eyebrow">Smartphones &amp; feature phones</p><h1>Decibell phones.</h1>
          <p className="lead">Dual-SIM smartphones and tough feature phones. Full specifications below, taken from Decibell's official spec sheets.</p></div>
        <div className="pgrid ph-grid">
          {phones.map((p) => (
            <article className="card phcard" key={p.id} style={{ '--h': p.hue }}>
              <span className="badge">{p.badge}</span>
              <a className="thumb" href={productHref(p.id)} aria-label={`View ${p.name}`}><Photo p={p} /></a>
              <h3><a href={productHref(p.id)}>{p.name}</a></h3>
              <p className="muted">{p.tag}</p>
              <p className="price"><span className="muted">{money(p.price)}</span></p>
              <div className="row"><Buy p={p} small /><a className="btn sm ghost" href={productHref(p.id)}>Details</a>
                <a className="btn sm ghost" href={SHEET_BASE + p.sheet} target="_blank" rel="noopener">Spec sheet</a></div>
            </article>
          ))}
        </div>
      </section>
      <section className="sec">
        <h2>Compare specs.</h2>
        <div className="tablewrap">
          <table className="ph-table">
            <thead><tr><th scope="col">Specification</th>{phones.map((p) => <th scope="col" key={p.id}>{p.name}</th>)}</tr></thead>
            <tbody>{rows.map((k) => <tr key={k}><th scope="row">{k}</th>{phones.map((p) => <td key={p.id}>{val(p, k)}</td>)}</tr>)}</tbody>
          </table>
        </div>
        <p className="muted small">Source: Decibell spec sheets. Entries marked n/a are not listed for that model. The DB1723 sheet prints its width as "4.8" mm, which looks like a typo for 48 mm, so check with Decibell. Phone prices are not published, so use Enquire for a quote.</p>
      </section>
    </div>
  )
}
