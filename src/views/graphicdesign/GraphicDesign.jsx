import './GraphicDesign.scss'
import { DESIGNPROJECTS, buttonsDesignProjects } from '../../../public/images-graphicdesign';
import { useState } from "react";
import Btn from '../../components/buttons/Btn'
import IconArrowLeft from '../../components/icons/IconArrowLeft'
import { useTranslation } from 'react-i18next';

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

    const { t } = useTranslation();

    return <>
        <section className="section__btnback">
            <Btn isLink={true} to="/" type="btn__back">
                <IconArrowLeft fill="fill-gray__darker" />
            </Btn>
        </section>
        <h1 className='margin-top-pagecontent'>{t("designPage.title")}</h1>
        <div className="allsections__graphicdesign">
            <section className="section__graphicdesign">
                <article className="menu__btn--gd">
                    {buttonsDesignProjects &&
                    buttonsDesignProjects.map(type => (
                        <Btn key={type.value} value={type.value} onClick={handleDesignProject} type="btn__menugallery">
                            {type.value === "raices" ?
                                `${t("designPage.menu.roots")}`
                            : type.value === "sopadeletras" ?
                                `${t("designPage.menu.letterSoup")}`
                            : type.value === "nolloresporlasflores" ?
                                `${t("designPage.menu.dontCry")}`
                            :
                                `${t("designPage.menu.genkoa")}`
                            }
                        </Btn>
                    ))}
                </article>

                    {filteredDesignProject &&
                    filteredDesignProject.map(project => (
                        <article key={project.id} className="info__gdproject">
                            <h2>{project.id === "raices" ?
                                `${t("designPage.menu.roots")}`
                            : project.id === "sopadeletras" ?
                                `${t("designPage.menu.letterSoup")}`
                            : project.id === "nolloresporlasflores" ?
                                `${t("designPage.menu.dontCry")}`
                            :
                                `${t("designPage.menu.genkoa")}`

                            }
                            </h2>

                            <p>{project.id === "raices" ?
                                `${t("designPage.content.roots")}`
                            : project.id === "sopadeletras" ?
                                `${t("designPage.content.letterSoup")}`
                            : project.id === "nolloresporlasflores" ?
                                `${t("designPage.content.dontCry")}`
                            :
                                `${t("designPage.content.genkoa")}`

                            }
                            </p>
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