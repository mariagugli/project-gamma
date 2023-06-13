import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import Icon from "../../components/icons/Icon"
import Input from "../../components/inputs/Input"
import './Blockpage.scss'

export default function Blockpage() {

    const [currentDate, setCurrentDate] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const monthname = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiember","Octubre","Noviembre","Diciembre"];
    
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
        <section className="section__blockpage section__blockpage-data ">
            <h2>{currentDate}</h2>
            <h3>{currentTime}</h3>
        </section>
        <section className="section__blockpage section__blockpage-title">
            <Icon name="logo" />
            <h1 className="title-web">Desarrolladora Web</h1>
        </section>
        <section className="section__blockpage">
            <p className="info__input">Click para desbloquear</p>
            <Input isToggle={true} onChange={ChangeToHome}/>
        </section>
        
    </>
}