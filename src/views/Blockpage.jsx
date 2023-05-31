import { Link } from "react-router-dom"
import Icon from "../components/icons/Icon"
import InputToggleSwitch from "../components/inputs/InputToggleSwitch"

export default function Blockpage() {
    
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
            <InputToggleSwitch />
        </section>
        
    </>
}