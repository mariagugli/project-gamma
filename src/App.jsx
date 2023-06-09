import { Link, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import './scss/global.scss'
import Home from './views/home/Home'
import Contact from './views/contact/Contact'
import Styleguide from './styleguide/Styleguide'
import About from './views/about/About'
import ImgAbout from './views/about/ImgAbout'
import IconBtnText from './components/icons/IconBtnText'
import IconArrowRight from './components/icons/IconArrowRight'
import Btn from './components/buttons/Btn'
import Blockpage from './views/blockpage/Blockpage'
import Topbar from './components/topbar/Topbar'
import Gallery from './views/gallery/Gallery'
import Projects from './views/projects/Projects'
import GraphicDesign from './views/graphicdesign/GraphicDesign'

function App() {

  const location = useLocation();

  return (
    <>
      <div className="screen color-bg-blue">
        <header className={location.pathname === "/blockpage" ? 'hide' : ''}>
          <Topbar />
        </header>
        <main className={
          location.pathname === "/blockpage" ? "main__blockpage"
          : location.pathname === "/styleguide" ? "main__styleguide"
          : location.pathname === "/" ? "main__home"
          : location.pathname === "/sobremi" ? "main__about"
          : location.pathname === "/randomgallery" ? "main__gallery"
          : "main"

        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/styleguide" element={<Styleguide />} />
            <Route path="/blockpage" element={<Blockpage />} />
            <Route path="/sobremi" element={<About />} />
            <Route path="/graphicdesign" element={<GraphicDesign />} />
            <Route path="/sobremi/:imgId" element={<ImgAbout />} />
            <Route path="/proyectos/:projectId" element={<Projects />} />
            <Route path="/randomgallery" element={<Gallery />} />
          </Routes>
        </main>
      </div>

      <Btn isLink={true} to="/blockpage" type="no-hovereffect-light linkbtn--blockpage" size="big">
        <IconBtnText bg="icon-light-bg" br="icon-dark-br">
          <IconArrowRight type="icon-xx-small" fill="fill-peach__lighter"/>
        </IconBtnText>
      </Btn>

    </>
  )
}

export default App
