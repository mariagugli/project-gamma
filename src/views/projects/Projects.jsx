import { Link, useParams } from "react-router-dom"
import { PROJECTS } from "../../../public/projects";
import Btn from "../../components/buttons/Btn";
import IconArrowLeft from "../../components/icons/IconArrowLeft";
import IconArrowRight from "../../components/icons/IconArrowRight";
import IconBtnText from "../../components/icons/IconBtnText";
import './Projects.scss'
import Tag from "../../components/Tags/Tag";


export default function Projects() {
    const params = useParams();
    const listado = PROJECTS;

    const listadoSeleccionado = listado.find(project => project.id === params.projectId);

    return <>
        <section className="section__btnback">
            <Btn isLink={true} to="/" type="btn__back">
                <IconArrowLeft fill="fill-gray__darker" />
            </Btn>
        </section>
        <h1>{listadoSeleccionado.title}</h1>
        
        <section className="section__tags--proyectos">
            {listadoSeleccionado.tags.map(tag => <Tag type={tag} size="tag-small" />)}
        </section> 
        <img className="img__proyectos" src={listadoSeleccionado.image} alt={listadoSeleccionado.title} />
        <p>{listadoSeleccionado.description}</p>
        {listadoSeleccionado.id !== "portfolio" ?
            <a className="link__proyectos" href={listadoSeleccionado.link}>
                <Btn type="btn-text__dark btn__proyects" size="small">
                    <IconBtnText bg="icon-dark-bg" br="icon-light-br">
                        <IconArrowRight size="icon-xx-small" fill="fill-peach__lighter"/>
                    </IconBtnText>
                    Ver proyecto
                </Btn>
            </a>
        : 
        <div>
            <Btn isLink={true} to="/blockpage" type="btn-text__dark btn__proyects" size="small">
                <IconBtnText bg="icon-dark-bg" br="icon-light-br">
                    <IconArrowRight size="icon-xx-small" fill="fill-peach__lighter"/>
                </IconBtnText>
                Volver a la pantalla de inicio
            </Btn>
        </div>
            
        }
        
    </>
}