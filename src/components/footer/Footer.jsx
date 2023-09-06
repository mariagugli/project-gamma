import { Link } from "react-router-dom";
import IconFlower from "../icons/IconFlower";
import Btn from "../buttons/Btn";
import './Footer.scss'
import { useTranslation } from "react-i18next";

export default function Footer(props) {

    const { t } = useTranslation();

    return <footer className={props.type ? `footer ${props.type}` : "footer"}>
        <Link to="/cookies" className={props.linksfooter ? `link__footer ${props.linksfooter}` : "link__footer"}>
            <IconFlower type="iconflower__footer" size="flower-small" fill="fill-purple"/>
            {t("homePage.cookies")}
        </Link>
        <Link to="/etica" className={props.linksfooter ? `link__footer ${props.linksfooter}` : "link__footer"}>
            <IconFlower type="iconflower__footer" size="flower-small" fill="fill-peach"/>
            {t("homePage.ethics")}
        </Link>
        <Btn type={props.btnfooter ? `btn__footer ${props.btnfooter}` : "btn__footer"} onClick={props.btnredes}>
            <IconFlower type="iconflower__footer" size="flower-small" fill="fill-purple"/>
            {t("homePage.socials")}
        </Btn>
        <Link to="/contact" className={props.linksfooter ? `link__footer ${props.linksfooter}` : "link__footer"}>
            <IconFlower type="iconflower__footer" size="flower-small" fill="fill-peach"/>
            {t("homePage.contact")}
        </Link>
    </footer>
}