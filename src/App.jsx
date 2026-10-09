import { useEffect } from 'react'
import { CartProvider } from './lib/cart'
import { initSmoothScroll, ScrollTrigger } from './lib/motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Tech from './components/Tech'
import Products from './components/Products'
import Compare from './components/Compare'
import Cart from './components/Cart'
import { FAQ, Contact, Footer } from './components/Footer'
export default function App() {
  useEffect(() => { initSmoothScroll(); const t = setTimeout(() => ScrollTrigger.refresh(), 400); return () => clearTimeout(t) }, [])
  return (
    <CartProvider>
      <Header /><main><Hero /><Marquee /><Tech /><Products /><Compare /><FAQ /><Contact /></main><Footer /><Cart />
    </CartProvider>
  )
}
