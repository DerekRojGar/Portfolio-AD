import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tables from './tables' // Importa el componente Tables
import Tabla2 from './tabla2' // Importa el componente Tabla2

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        { <Tables /> /* Renderiza el componente Tables */}
        
      </div>
      <h1 className='bg-red-500' >Vite + React! El inicio de algo increible !!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Tabla2 /> {/* Renderiza el componente Tabla2 */}
    </>
  )
}

export default App
