import { Link, Route, Routes, useLocation } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import './scss/global.scss'
import Home from './views/Home'
import Contact from './views/Contact'
import Styleguide from './styleguide/Styleguide'
import IconBtnText from './components/icons/IconBtnText'
import IconArrowRight from './components/icons/IconArrowRight'
import Btn from './components/buttons/Btn'

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

      <Btn type="no-hovereffect-light" size="btn-big">
        <IconBtnText variantbg="icon-light-bg" variantbr="icon-dark-br" icon={<IconArrowRight size="xx-small" fill="peach__lighter"/>}/>
      </Btn>

    </>
  )
}

export default App
