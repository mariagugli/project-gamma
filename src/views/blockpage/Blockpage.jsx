import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import Icon from "../../components/icons/Icon"
import Input from "../../components/inputs/Input"
import LanguageSelector from "../../components/selector/LanguageSelector"
import './Blockpage.scss'
import { useTranslation } from "react-i18next";

export default function Blockpage() {

    const { t } = useTranslation();

    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const monthname = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
    
    useEffect(() => {
        const day = new Date().getDate();
        const month = monthname[new Date().getMonth()];
        const year = new Date().getFullYear();
        const hours = String(new Date().getHours()).padStart(2, "0");
        const min = String(new Date().getMinutes()).padStart(2, "0");

        setCurrentDate( day + ' de ' + month + ' de ' + year );
        setCurrentTime( hours + ':' + min );
    }, []);

    const navigate = useNavigate();
    function ChangeToHome() {
        
        setTimeout(() => {
            
            navigate('/', { replace: true });
        }, 400);
    }

    return <>
        <LanguageSelector />
        <section className="section__blockpage section__blockpage-data ">
            <h2>{currentDate}</h2>
            <h3>{currentTime}</h3>
        </section>
        <section className="section__blockpage section__blockpage-title">
            <Icon name="logo" />
            <h1 className="title-web">{t("blockedPage.job")}</h1>
        </section>
        <section className="section__blockpage">
            <p className="info__input">{t("blockedPage.openPage")}</p>
            <Input isToggle={true} onChange={ChangeToHome}/>
        </section>
        
    </>
}