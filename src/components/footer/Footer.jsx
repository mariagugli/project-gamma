import { Link } from "react-router-dom";
import IconFlower from "../icons/IconFlower";
import Btn from "../buttons/Btn";
import './Footer.scss'


export default function Footer(props) {
    return <footer className={props.type ? `footer ${props.type}` : "footer"}>
        <Link to="/cookies" className={props.linksfooter ? `link__footer ${props.linksfooter}` : "link__footer"}>
            <IconFlower type="iconflower__footer" size="flower-small" fill="fill-purple"/>
            Cookies
        </Link>
        <Link to="/etica" className={props.linksfooter ? `link__footer ${props.linksfooter}` : "link__footer"}>
            <IconFlower type="iconflower__footer" size="flower-small" fill="fill-peach"/>
            Ética
        </Link>
        <Btn type={props.btnfooter ? `btn__footer ${props.btnfooter}` : "btn__footer"} onClick={props.btnredes}>
            <IconFlower type="iconflower__footer" size="flower-small" fill="fill-purple"/>
            Redes
        </Btn>
        <Link to="/contact" className={props.linksfooter ? `link__footer ${props.linksfooter}` : "link__footer"}>
            <IconFlower type="iconflower__footer" size="flower-small" fill="fill-peach"/>
            Contacto
        </Link>
    </footer>
}