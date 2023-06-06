import { Link, useNavigate } from "react-router-dom"
import Icon from "../../components/icons/Icon"
import Input from "../../components/inputs/Input"
import './Blockpage.scss'

export default function Blockpage() {

    const navigate = useNavigate();
    function ChangeToHome() {
        
        setTimeout(() => {
            
            navigate('/', { replace: true });
        }, 400);
    }

    return <>
        <section className="section__blockpage section__blockpage-data ">
            <h2>01 de enero de 2023</h2>
            <h3>00.00</h3>
        </section>
        <section className="section__blockpage section__blockpage-title">
            <Icon name="logo" />
            <h1 className="title-web">Desarrolladora Web</h1>
        </section>
        <section className="section__blockpage">
            <Input isToggle={true} onChange={ChangeToHome}/>
        </section>
        
    </>
}