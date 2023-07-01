import { Link } from "react-router-dom";
import Btn from "../../components/buttons/Btn";
import IconFlower from "../../components/icons/IconFlower";
import IconFlowerLarge from "../../components/icons/IconFlower-large";
import IconFlowerXlarge from "../../components/icons/IconFlower-xlarge";
import './Home.scss'
import Footer from "../../components/footer/Footer";
import Card from "../../components/cards/Card";
import IconDoc from "../../components/icons/IconDoc";
import { useEffect, useRef, useState } from "react";
import IconCodepen from "../../components/icons/IconCodepen";
import IconGithub from "../../components/icons/IconGithub";
import IconLinkedIn from "../../components/icons/IconLinkedIn";

export default function Home() {

    const [ showProjects, setShowProjects] = useState("card");
    const [ showSocials, setShowSocials] = useState("card");
    

    const handleProjects = () => {
        setShowProjects("opened-card");
    };
    const handleSocials = () => {
        setShowSocials("opened-card");
        
    };
    
    const useClickOutside = (handler) => {
        const closeCard = useRef();

        useEffect(() => {
            const isHandler = (event) => {
                if(!closeCard.current.contains(event.target)) {
                    handler();
                }
            };

            document.addEventListener("mousedown", isHandler);

            return () => {
                document.removeEventListener("mousedown", isHandler);
            };
        });

        return closeCard;
    }

    const closeCard = useClickOutside(() => {
        setShowProjects("card");
        setShowSocials("card");
    })
    

    return <>
        <div className="allsections__home">
            <section className="section__home section__btnabout">
                <Link to="/sobremi">
                    <IconFlowerLarge type="flower-home" fill="fill-yellow">
                        <p>Sobre mi</p>
                    </IconFlowerLarge>
                </Link>
            </section>
            <section className="section__home section__groupflowers">
                <article className="article__home btn__groups__home">
                    <div className="flowergroup-line">
                        <a href="/MariaGuglielmoneCV.pdf" target="”_blank”">
                            <IconFlower type="flower-home" size="flower-default" fill="fill-purple">
                                <p>CV</p>
                            </IconFlower>
                        </a>
                        <Link to="/" className="flower-right">
                            <IconFlower type="flower-home" size="flower-default" fill="fill-peach">
                                <p>Agenda</p>
                            </IconFlower>
                        </Link>
                    </div>
                    <div className="flowergroup-line">
                        <Link to="/graphicdesign">
                            <IconFlower type="flower-home" size="flower-default" fill="fill-yellow">
                                <p>Diseño Gráfico</p>
                            </IconFlower>
                        </Link>
                        <Link to="/randomgallery" className="flower-right">
                            <IconFlower type="flower-home" size="flower-default" fill="fill-olive">
                                <p>Random Gallery</p>
                            </IconFlower>
                        </Link>
                        
                    </div>
                </article>
                <Btn type="btn--home btn__bigflower--home" size="none" onClick={handleProjects}>
                    <IconFlower type="flower-home" size="flower-big" fill="fill-orange">
                        <p>Proyectos</p>
                    </IconFlower>
                </Btn>
            </section>
            <section className="section__home section__btnminiprojects">
                <Link to="/miniproyectos">
                    <IconFlowerXlarge type="flower-home" fill="fill-peach">
                        <p>Miniproyectos</p>
                    </IconFlowerXlarge>
                </Link>
            </section>
            <section ref={closeCard}>
                <Card type="card-docs" moreclass={showProjects}>
                    <Btn isLink={true} type="btn--home" to="/proyectos/aboutme">
                        <IconDoc type="docs__home" size="icondoc-default">About me</IconDoc>
                    </Btn>
                    <Btn isLink={true} type="btn--home" to="/proyectos/genkoa">
                        <IconDoc type="docs__home" size="icondoc-default">Genkoa</IconDoc>
                    </Btn>
                    <Btn isLink={true} type="btn--home" to="/proyectos/portfolio">
                        <IconDoc type="docs__home" size="icondoc-default">Portfolio</IconDoc>
                    </Btn>
                </Card>
                <Card type="card-socials" moreclass={showSocials}>
                    <a className="link__socials" href="https://codepen.io/mariagugli" target="_blank">
                        <IconCodepen fill="fill-gray__darker" />
                        Codepen
                    </a>
                    <a className="link__socials" href="https://github.com/mariagugli" target="_blank">
                        <IconGithub fill="fill-gray__darker" />
                        Github
                    </a>
                    <a className="link__socials" href="#" target="_blank">
                        <IconLinkedIn fill="fill-gray__darker" />
                        LinkedIn
                    </a>
                </Card>
            </section>
        </div>

        <Footer btnredes={handleSocials} />
        
    </>
}