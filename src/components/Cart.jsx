import { useState } from 'react'
import { money } from '../data/products'
import { useCart } from '../lib/cart'
const WA = '27000000000' // placeholder number, replace before going live
export default function Cart() {
  const { open, setOpen, items, total, setQty, clear } = useCart()
  const [form, setForm] = useState({ name: '', phone: '', address: '' })
  const [done, setDone] = useState(false)
  const ok = form.name.trim() && form.phone.trim() && form.address.trim()
  const send = () => {
    const lines = items.map((i) => `${i.qty} x ${i.p.name} (${money(i.p.price * i.qty)})`).join('\n')
    const msg = `Hi Decibell, I'd like to order:\n${lines}\nTotal: ${money(total)}\n\nName: ${form.name}\nPhone: ${form.phone}\nAddress: ${form.address}`
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener')
    clear(); setDone(true)
  }
  return (
    <>
      <div className={'scrim ' + (open ? 'on' : '')} onClick={() => setOpen(false)} />
      <aside className={'drawer ' + (open ? 'on' : '')} aria-hidden={!open} aria-label="Cart">
        <div className="dh"><h3>Your cart</h3><button className="x" onClick={() => setOpen(false)} aria-label="Close cart">×</button></div>
        {done ? <p className="muted">Thanks! Your order was opened in WhatsApp. (Demo only: no payment taken.)</p>
          : !items.length ? <p className="muted">Your cart is empty. Time to unpack something powerful.</p> : (
            <>
              <ul className="lines">{items.map(({ p, qty }) => (
                <li key={p.id}><div><b>{p.name}</b><span className="mono">{money(p.price)}</span></div>
                  <div className="qty"><button onClick={() => setQty(p.id, qty - 1)} aria-label={`Less ${p.name}`}>−</button><span>{qty}</span><button onClick={() => setQty(p.id, qty + 1)} aria-label={`More ${p.name}`}>+</button></div></li>))}</ul>
              <p className="total"><span>Total</span><b>{money(total)}</b></p>
              <p className="muted small">Free shipping on all orders. Prices are demo placeholders.</p>
              {['name', 'phone', 'address'].map((k) => <input key={k} placeholder={k[0].toUpperCase() + k.slice(1)} value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} aria-label={k} />)}
              <button className="btn" disabled={!ok} onClick={send}>Order via WhatsApp</button>
            </>)}
      </aside>
    </>
  )
}
