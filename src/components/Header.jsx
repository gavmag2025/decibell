import { useState } from 'react'
import { useCart } from '../lib/cart'
import { scrollToEl } from '../lib/motion'
export default function Header() {
  const { count, setOpen } = useCart()
  const [menu, setMenu] = useState(false)
  const go = (s) => (e) => {
    e.preventDefault(); setMenu(false)
    if (location.hash.startsWith('#/')) { history.pushState(null, '', location.pathname); dispatchEvent(new HashChangeEvent('hashchange')); setTimeout(() => scrollToEl(s), 150) } else scrollToEl(s)
  }
  return (
    <header className="hdr">
      <div className="promo">Free shipping &amp; returns across South Africa · 1-year warranty · <b>Demo store</b></div>
      <div className="bar">
        <a className="logo" href="#top" onClick={go('#top')} aria-label="Decibell home"><i /><i /><i /><i /><i /> <span>decibell</span></a>
        <nav className={menu ? 'open' : ''} aria-label="Main">
          <a href="#products" onClick={go('#products')}>Shop</a>
          <a href="#/phones" onClick={() => setMenu(false)}>Phones</a>
          <a href="#tech" onClick={go('#tech')}>Technology</a>
          <a href="#compare" onClick={go('#compare')}>Compare</a>
          <a href="#faq" onClick={go('#faq')}>FAQ</a>
          <a href="#contact" onClick={go('#contact')}>Contact</a>
        </nav>
        <button className="cartbtn" onClick={() => setOpen(true)} aria-label={`Open cart, ${count} items`}>Cart <b>{count}</b></button>
        <button className="burger" onClick={() => setMenu(!menu)} aria-label="Menu" aria-expanded={menu}><span /><span /></button>
      </div>
    </header>
  )
}
