import { Link, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './views/Home'
import Contact from './views/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Holaaa</h1>
        <Link to="/contact">Contacto</Link>
        <Link to="/">Home</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

    </>
  )
}

export default App
