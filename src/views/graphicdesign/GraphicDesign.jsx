import './GraphicDesign.scss'
import Btn from '../../components/buttons/Btn'
import IconArrowLeft from '../../components/icons/IconArrowLeft'

export default function GraphicDesign() {

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
                    <Btn type="btn__menugallery">Raices</Btn>
                </article>
                <article className="info__gdproject">
                    <h2>Nombre del proyecto</h2>
                    <p>Descripción</p>
                </article>
            </section>
            <section className="section__graphicdesign">
                <img src="#" alt="" />
            </section>
        </div>
    </>
}