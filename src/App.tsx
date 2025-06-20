import { useState } from 'react'
import './App.css'
import Navbar from './components/nav'
import Tables from './tables' // Importa el componente Tables
//import Tabla2 from './tabla2' // Importa el componente Tabla2
import Footer from './components/footer'
import Carousel from './components/carousel'

function App() {
  return (
    <>
      <Navbar /> {/* Renderiza el componente Navbar */}
      <div>
        <Carousel /> {/* Renderiza el componente Carousel */}
        {/* <Tabla2 /> */} {/* Renderiza el componente Tabla2 si es necesario */}
        { <Tables /> /* Renderiza el componente Tables */}        
      </div>
      <Footer /> {/* Renderiza el componente Footer */}
    </>
  )
}

export default App
