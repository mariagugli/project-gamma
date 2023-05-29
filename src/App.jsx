import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import './scss/global.scss'
import Home from './views/Home'
import Contact from './views/Contact'
import Styleguide from './styleguide/Styleguide'
import Topbar from './components/topbar/Topbar'
import BtnText from './components/buttons/BtnText'
import IconBtnText from './components/icons/IconBtnText'
import IconArrowRight from './components/icons/IconArrowRight'

function App() {

  let location = useLocation();

  return (
    <>
      <div className="screen color-bg-blue">
        <header className={location.pathname == 'blockpage' ? 'hide' : ''}>
          <h1>Portfolio Gugli</h1>
          <div className="topbar">

            <nav className="nav">
              <Link to="/">Home</Link>
              <Link to="/contact">Contacto</Link>
              <Link to="/styleguide">StyleGuide</Link>
            </nav>
            
          </div>
          
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/styleguide" element={<Styleguide />} />
          </Routes>
        </main>
      </div>

      <BtnText variant="no-hovereffect-light" size="big" icon={<IconBtnText variantbg="icon-light-bg" variantbr="icon-dark-br" icon={<IconArrowRight size="xx-small" fill="peach__lighter"/>} />} />

    </>
  )
}

export default App
