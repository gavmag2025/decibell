import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { products } from '../data/products'
const Ctx = createContext(null)
const KEY = 'decibell-cart-v1'
export function CartProvider({ children }) {
  const [lines, setLines] = useState(() => { try { return JSON.parse(localStorage.getItem(KEY)) || {} } catch { return {} } })
  const [open, setOpen] = useState(false)
  const [compare, setCompare] = useState([])
  useEffect(() => { try { localStorage.setItem(KEY, JSON.stringify(lines)) } catch {} }, [lines])
  const api = useMemo(() => {
    const items = Object.entries(lines).map(([id, qty]) => ({ p: products.find((x) => x.id === id), qty })).filter((i) => i.p)
    return {
      items, open, setOpen, compare,
      count: items.reduce((a, i) => a + i.qty, 0),
      total: items.reduce((a, i) => a + i.qty * i.p.price, 0),
      add: (id) => { setLines((l) => ({ ...l, [id]: (l[id] || 0) + 1 })); setOpen(true) },
      setQty: (id, q) => setLines((l) => { const n = { ...l }; if (q <= 0) delete n[id]; else n[id] = q; return n }),
      clear: () => setLines({}),
      toggleCompare: (id) => setCompare((c) => c.includes(id) ? c.filter((x) => x !== id) : [...c.slice(-2), id]),
    }
  }, [lines, open, compare])
  return <Ctx.Provider value={api}>{children}</Ctx.Provider>
}
export const useCart = () => useContext(Ctx)
