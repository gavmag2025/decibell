import { useState } from 'react'
const faqs = [
  ['What warranty do Decibell mini PCs have?', 'Every device carries a standard 1-year warranty, with an extended warranty option available.'],
  ['Is shipping free?', 'Yes, free shipping and returns across South Africa.'],
  ['Which operating system do they run?', 'Windows 11 is supported out of the box and most models also run Linux.'],
  ['Where can I buy in store?', 'Decibell is available at major retail partners. Contact us for your nearest stockist.'],
  ['Can I download drivers?', 'Yes. Drivers and spec sheets are available per model, ask support@decibell.co.za.'],
]
export function FAQ() {
  const [o, setO] = useState(0)
  return (
    <section className="sec narrow" id="faq"><p className="eyebrow">Questions</p><h2>FAQ</h2>
      {faqs.map(([q, a], i) => (<div className={'faq ' + (o === i ? 'on' : '')} key={q}><button aria-expanded={o === i} onClick={() => setO(o === i ? -1 : i)}>{q}<span>+</span></button><div className="ans"><p>{a}</p></div></div>))}
    </section>
  )
}
export function Contact() {
  const [sent, setSent] = useState(false)
  const submit = (e) => { e.preventDefault(); const d = new FormData(e.target); location.href = `mailto:info@decibell.co.za?subject=${encodeURIComponent(d.get('subject') || 'Enquiry')}&body=${encodeURIComponent(`${d.get('message')}\n\n${d.get('name')} ${d.get('company')} ${d.get('phone')}`)}`; setSent(true) }
  return (
    <section className="sec narrow" id="contact"><p className="eyebrow">Talk to us</p><h2>Get in touch.</h2>
      <form onSubmit={submit} className="form">
        <input name="name" placeholder="Name" required aria-label="Name" /><input name="company" placeholder="Company" aria-label="Company" />
        <input name="phone" placeholder="Phone" aria-label="Phone" /><input name="email" type="email" placeholder="Email" required aria-label="Email" />
        <input name="subject" placeholder="Subject" className="w2" aria-label="Subject" /><textarea name="message" placeholder="Message" rows="4" className="w2" required aria-label="Message" />
        <button className="btn w2">{sent ? 'Opening your email app…' : 'Send message'}</button>
      </form>
    </section>
  )
}
export function Footer() {
  return (<footer><div><b className="flogo">decibell</b><p className="muted">UNPACK. CONNECT. DOMINATE.</p></div><div><a href="mailto:info@decibell.co.za">info@decibell.co.za</a><br /><a href="mailto:support@decibell.co.za">support@decibell.co.za</a></div><p className="muted small">Concept redesign / demo store. Not the official Decibell site; products, prices and specs are placeholders.</p></footer>)
}
