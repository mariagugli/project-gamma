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
import Card from './components/cards/Card'
import Blockpage from './views/blockpage/Blockpage'
import Topbar from './components/topbar/Topbar'
import Gallery from './views/gallery/Gallery'
import Projects from './views/projects/Projects'
import GraphicDesign from './views/graphicdesign/GraphicDesign'
import Notification from './components/notification/Notification'
import Weather from './components/weather/Weather'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './components/selector/LanguageSelector'
import Ethics from './views/ethics/Ethics'
import Cookies from './views/ethics/Cookies'
import Error from './views/error/Error'

function App() {

  const location = useLocation();

  const [ showAsidePopup, setShowAsidePopup] = useState("card");
  const [ hideIconPlus, sethideIconPlus] = useState("");
  const [ hideIconMinus, sethideIconMinus] = useState("hide");

  const handleAsidePopup = () => {
    setShowAsidePopup("opened-card");
    sethideIconPlus("hide");
    sethideIconMinus("");
  };
  const handleHideAsidePopup = () => {
    setShowAsidePopup("card");
    sethideIconPlus("");
    sethideIconMinus("hide");
  };

  const { t } = useTranslation();

  return (
    <>
      <div className={location.pathname === "/" ? "screen color-bg-blue"
      : location.pathname === "/blockpage" ? "screen color-bg-blue"
      : location.pathname === "/404" ? "screen color-bg-purple__light"
      : "screen color-bg-white"}>
        <header className={location.pathname === "/blockpage" ? 'hide' : ''}>
          <Topbar 
            handleClickPlus={handleAsidePopup} 
            handleClickMinus={handleHideAsidePopup} 
            btnPlustopbar={hideIconPlus} 
            btnMinustopbar={hideIconMinus} 
          />
          <Card type="card-aside" moreclass={showAsidePopup}>
            <LanguageSelector />
            <Notification 
              name='Gugli'
              text={t("generalParts.notification.work.text")}
              btntext={t("generalParts.notification.work.btn")}
              to="/contact"
                
            />
            <Weather />
          </Card>
        </header>
        <main className={
          location.pathname === "/blockpage" ? "main__blockpage"
          : location.pathname === "/styleguide" ? "main__styleguide"
          : location.pathname === "/" ? "main__home"
          : location.pathname === "/sobremi" ? "main__about"
          : location.pathname === "/randomgallery" ? "main__gallery"
          :location.pathname === "/ethics" ? "main__ethics"
          :location.pathname === "/cookies" ? "main__ethics"
          :location.pathname === "/404" ? "main__error"
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
            <Route path="/ethics" element={<Ethics />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/404" element={<Error />} />
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
