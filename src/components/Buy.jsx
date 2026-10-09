import { useCart } from '../lib/cart'
// Priced products go to the cart; phones without a public price become an enquiry.
export default function Buy({ p, small = false, onDone }) {
  const { add } = useCart()
  const cls = 'btn' + (small ? ' sm' : '')
  if (p.price == null) return <a className={cls} href="#contact" onClick={onDone}>Enquire</a>
  return <button className={cls} onClick={() => { add(p.id); onDone?.() }}>Add to cart</button>
}
