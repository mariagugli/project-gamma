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
import Blockpage from './views/Blockpage'
import Topbar from './components/topbar/Topbar'

function App() {

  let location = useLocation();

  return (
    <>
      <div className="screen color-bg-blue">
        <header className={location.pathname === "/blockpage" ? 'hide' : ''}>
          <h1 className={location.pathname === "/styleguide" ? 'show' : 'hide'}>Portfolio Gugli</h1>
          <Topbar />
          <nav className="nav">
            <Link to="/blockpage">Blockpage</Link>
            <Link to="/">Home</Link>
            <Link to="/contact">Contacto</Link>
            <Link to="/styleguide">StyleGuide</Link>
          </nav>
          
        </header>
        <main className={
          location.pathname === "/blockpage" ? "main__blockpage"
          : location.pathname === "/styleguide" ? "main__styleguide"
          : location.pathname === "/contact" ? "main__contact"
          : location.pathname === "/randomgallery" ? "main__gallery"
          : ""

        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/styleguide" element={<Styleguide />} />
            <Route path="/blockpage" element={<Blockpage />} />
          </Routes>
        </main>
      </div>

      <Btn type="no-hovereffect-light" size="btn-big">
        <IconBtnText bg="icon-light-bg" br="icon-dark-br">
          <IconArrowRight type="icon-xx-small" fill="fill-peach__lighter"/>
        </IconBtnText>
      </Btn>

    </>
  )
}

export default App
