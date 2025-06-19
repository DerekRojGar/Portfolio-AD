import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Tabla2 from './tabla2.tsx'
import Footer from './components/footer.tsx'
import Navbar from './components/nav.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/tabla2" element={<Tabla2 />} />
        <Route path="/" element={<App />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/nav' element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
