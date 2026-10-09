import { useEffect } from 'react'
import { CartProvider } from './lib/cart'
import { initSmoothScroll, ScrollTrigger } from './lib/motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Tech from './components/Tech'
import Products from './components/Products'
import Compare from './components/Compare'
import ProductPage from './components/ProductPage'
import { useRoute } from './lib/route'
import Cart from './components/Cart'
import { FAQ, Contact, Footer } from './components/Footer'
export default function App() {
  const route = useRoute()
  useEffect(() => { initSmoothScroll() }, [])
  useEffect(() => { const t = setTimeout(() => ScrollTrigger.refresh(), 400); return () => clearTimeout(t) }, [route.page, route.id])
  return (
    <CartProvider>
      <Header /><main>{route.page === 'product' ? <><ProductPage id={route.id} /><Contact /></> : <><Hero /><Marquee /><Tech /><Products /><Compare /><FAQ /><Contact /></>}</main><Footer /><Cart />
    </CartProvider>
  )
}
