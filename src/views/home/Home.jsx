import { Link } from "react-router-dom";
import Btn from "../../components/buttons/Btn";
import IconFlower from "../../components/icons/IconFlower";
import IconFlowerLarge from "../../components/icons/IconFlower-large";
import IconFlowerXlarge from "../../components/icons/IconFlower-xlarge";
import './Home.scss'
import Footer from "../../components/footer/Footer";
import Card from "../../components/cards/Card";
import IconDoc from "../../components/icons/IconDoc";
import { useEffect, useState, useRef } from "react";

export default function Home() {

    const [isOpen, setIsOpen] = useState(true);
    const btnRef = useRef();

    useEffect(() => {
        const closeDropDown = e => {
            if (e.path[0] !== btnRef.current) {
                setIsOpen(false);
            }
        };

        document.body.addEventListener('click', closeDropDown);

        return () => document.body.removeEventListener('click', closeDropDown);
    }, []);

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
                        <Link to="/">
                            <IconFlower type="flower-home" size="flower-default" fill="fill-purple">
                                <p>Lorem</p>
                            </IconFlower>
                        </Link>
                        <Link to="/" className="flower-right">
                            <IconFlower type="flower-home" size="flower-default" fill="fill-peach">
                                <p>Lorem</p>
                            </IconFlower>
                        </Link>
                    </div>
                    <div className="flowergroup-line">
                        <Link to="/diseñografico">
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
                <Btn type="btn--home btn__bigflower--home" size="none" ref={btnRef} onClick={() => setIsOpen(prev => !prev)}>
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
        </div>

        <Card type="card-docs" className={'card' + (isOpen ? "open" : '')}>
            <Btn isLink={true} type="btn--home" to="/proyectos/aboutme">
                <IconDoc type="docs__home" size="icondoc-default">About me</IconDoc>
            </Btn>
            <Btn isLink={true} type="btn--home" to="/proyectos/genkoa">
                <IconDoc type="docs__home" size="icondoc-default">Genkoa</IconDoc>
            </Btn>
            <Btn isLink={true} type="btn--home" to="/proyectos/">
                <IconDoc type="docs__home" size="icondoc-default">Lorem</IconDoc>
            </Btn>
            <Btn isLink={true} type="btn--home" to="/proyectos/">
                <IconDoc type="docs__home" size="icondoc-default">Lorem</IconDoc>
            </Btn>
        </Card>
        
        <Footer />
        
    </>
}