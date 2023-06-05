import { Link } from "react-router-dom";
import { IMGSABOUT } from "../../../public/images-about";
import Btn from "../../components/buttons/Btn";
import './About.scss'
import IconArrowLeft from "../../components/icons/IconArrowLeft";

export default function About() {
    
    const listado = IMGSABOUT;

    return <>
        <section className="section__btnback">
            <Btn isLink={true} to="/" type="btn__back">
                <IconArrowLeft fill="fill-gray__darker" />
            </Btn>
        </section>
        <section className="section__title">
            <p>Hola! Soy Maria Guglielmone</p>
            <h1>Front-end Developer</h1>
        </section>
        <section className="section__listimgs">
            {listado.map(img => 
            <Btn isLink={true} type="linkimg__about" to={img.id}>
                <div className="foto_about">
                    <img src={img.image} alt={img.title} />
                </div>
            </Btn>
            )}
        </section>
        
    </>
}