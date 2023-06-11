import './GraphicDesign.scss'
import { DESIGNPROJECTS, buttonsDesignProjects } from '../../../public/images-graphicdesign';
import { useState } from "react";
import Btn from '../../components/buttons/Btn'
import IconArrowLeft from '../../components/icons/IconArrowLeft'

export default function GraphicDesign() {

    const listado = DESIGNPROJECTS;
   
    const idRaices = listado.filter(project => {
        return project.id === "raices"
    });
    const idSopaLetras = listado.filter(project => {
        return project.id === "sopadeletras"
    });
    const idFlores = listado.filter(project => {
        return project.id === "nolloresporlasflores"
    });
    const idGenkoa = listado.filter(project => {
        return project.id === "genkoa"
    });

    const [filteredDesignProject, setFilteredDesignProject] = useState(idSopaLetras);

    function handleDesignProject(e) {
        const typeDesignProject = e.target.value;
        if (typeDesignProject === "raices") {
            setFilteredDesignProject(idRaices)
        } else if (typeDesignProject === "sopadeletras") {
            setFilteredDesignProject(idSopaLetras)
        } else if(typeDesignProject === "nolloresporlasflores") {
            setFilteredDesignProject(idFlores)
        } else if(typeDesignProject === "genkoa") {
            setFilteredDesignProject(idGenkoa)
        } else return
    }

    return <>
        <section className="section__btnback">
            <Btn isLink={true} to="/" type="btn__back">
                <IconArrowLeft fill="fill-gray__darker" />
            </Btn>
        </section>
        <h1>Diseño Gráfico</h1>
        <div className="allsections__graphicdesign">
            <section className="section__graphicdesign">
                <article className="menu__btn--gd">
                    {buttonsDesignProjects &&
                    buttonsDesignProjects.map(type => (
                        <Btn key={type.value} value={type.value} onClick={handleDesignProject} type="btn__menugallery">{type.name}</Btn>
                    ))}
                </article>

                    {filteredDesignProject &&
                    filteredDesignProject.map(project => (
                        <article key={project.id} className="info__gdproject">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </article>
                    ))}

            </section>
            <section className="section__graphicdesign section__img--design">
                {filteredDesignProject &&
                filteredDesignProject.map(project => (
                    <img className='img__projectdesign' key={project.id} src={project.image} alt={project.title} />
                ))}
            </section>
        </div>
    </>
}