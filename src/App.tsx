import { useState } from 'react'
import './App.css'
import Navbar from './components/nav'
import Tables from './tables' // Importa el componente Tables
//import Tabla2 from './tabla2' // Importa el componente Tabla2
import Footer from './components/footer'

function App() {
  return (
    <>
      <Navbar /> {/* Renderiza el componente Navbar */}
      <div>        
        { <Tables /> /* Renderiza el componente Tables */}        
      </div>
      <Footer /> {/* Renderiza el componente Footer */}
    </>
  )
}

export default App
