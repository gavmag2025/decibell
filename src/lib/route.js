import { useEffect, useState } from 'react'
const parse = () => { const m = location.hash.match(/^#\/product\/([\w-]+)/); return m ? { page: 'product', id: m[1] } : { page: 'home' } }
export function useRoute() {
  const [r, setR] = useState(parse)
  useEffect(() => { const f = () => setR(parse()); addEventListener('hashchange', f); return () => removeEventListener('hashchange', f) }, [])
  return r
}
export const productHref = (id) => `#/product/${id}`
