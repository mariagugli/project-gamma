import { Link, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './scss/global.scss'
import Home from './views/Home'
import Contact from './views/Contact'
import Styleguide from './styleguide/Styleguide'
import Topbar from './components/topbar/topbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>Portfolio Gugli</h1>
        <div className="topbar">

          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/contact">Contacto</Link>
            <Link to="/styleguide">StyleGuide</Link>
          </nav>
          
        </div>
        
      </header>
      <Topbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/styleguide" element={<Styleguide />} />
        </Routes>
      </main>

    </>
  )
}

export default App
