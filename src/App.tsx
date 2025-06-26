import { useState, useEffect, useRef } from 'react'
import './App.css'
import Navbar from './components/nav'
import Tables from './tables'
import Footer from './components/footer'
import Carousel from './components/carousel'
import About from './components/about'

function App() {
  const [showNavbar, setShowNavbar] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const carouselBottom = carouselRef.current.getBoundingClientRect().bottom
        setShowNavbar(carouselBottom <= 0)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
  <>
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-1500 ease-in-out ${
        showNavbar
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-10 pointer-events-none"
      }`}
      style={{ willChange: "transform, opacity" }}
    >
      <Navbar />
    </div>
    <div>
      <div ref={carouselRef}>
        <Carousel />
      </div>
      <Tables />
      <About />
    </div>
    <Footer />
  </>
)
}

export default App
