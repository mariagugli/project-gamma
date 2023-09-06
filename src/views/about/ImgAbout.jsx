import { useParams } from "react-router-dom";
import { IMGSABOUT } from "../../../public/images-about";
import Btn from "../../components/buttons/Btn";
import IconArrowLeft from "../../components/icons/IconArrowLeft";
import './About.scss'
import { useTranslation } from "react-i18next";


export default function ImgAbout() {
    const params = useParams();
    const listado = IMGSABOUT;

    const listadoSeleccionado = listado.find(img => img.id === params.imgId);

    const { t } = useTranslation();

    return <>
        <section className="section__btnback">
            <Btn isLink={true} to="/sobremi" type="btn__back">
                <IconArrowLeft fill="fill-gray__darker" />
            </Btn>
        </section>
        <section className="section__aboutpost">
            {listadoSeleccionado.carrusele === undefined 
            ? 
                <img className="img__aboutpost" src={listadoSeleccionado.image} alt={listadoSeleccionado.title} /> 
            : <div className="carruselle">
                    {listadoSeleccionado.carrusele.map(img => <img className="img__aboutpost--carruselle" key={img} src={img}></img>)}
                </div>
            }
            <p><strong>gugli: </strong>
                {listadoSeleccionado.id === "mifoto" ?
                    `${t("aboutPage.content.img1.text")}`
                : listadoSeleccionado.id === "misestudios" ? 
                    `${t("aboutPage.content.img2.text")}`
                : listadoSeleccionado.id === "mistrabajos" ? 
                    `${t("aboutPage.content.img3.text")}`
                : listadoSeleccionado.id === "misconocimientos" ? 
                    `${t("aboutPage.content.img4.text")}`
                : listadoSeleccionado.id === "micasa" ? 
                    `${t("aboutPage.content.img5.text")}`
                : listadoSeleccionado.id === "misgustos" ? 
                    `${t("aboutPage.content.img6.text")}`
                : listadoSeleccionado.id === "misobjetivos" ? 
                    `${t("aboutPage.content.img7.text")}`
                : listadoSeleccionado.id === "mismetas" ? 
                    `${t("aboutPage.content.img8.text")}`
                :
                    `${t("aboutPage.content.img9.text")}`
                }
            </p>
            <p><small>
                {listadoSeleccionado.id === "mifoto" ?
                    `${t("aboutPage.content.img1.date")}`
                : listadoSeleccionado.id === "misestudios" ? 
                    `${t("aboutPage.content.img2.date")}`
                : listadoSeleccionado.id === "mistrabajos" ? 
                    `${t("aboutPage.content.img3.date")}`
                : listadoSeleccionado.id === "misconocimientos" ? 
                    `${t("aboutPage.content.img4.date")}`
                : listadoSeleccionado.id === "micasa" ? 
                    `${t("aboutPage.content.img5.date")}`
                : listadoSeleccionado.id === "misgustos" ? 
                    `${t("aboutPage.content.img6.date")}`
                : listadoSeleccionado.id === "misobjetivos" ? 
                    `${t("aboutPage.content.img7.date")}`
                : listadoSeleccionado.id === "mismetas" ? 
                    `${t("aboutPage.content.img8.date")}`
                :
                    `${t("aboutPage.content.img9.date")}`
                }
            </small></p>
        </section>
        
    </>
}