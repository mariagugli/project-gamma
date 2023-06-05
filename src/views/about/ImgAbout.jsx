import { useParams } from "react-router-dom";
import { IMGSABOUT } from "../../../public/images-about";
import Btn from "../../components/buttons/Btn";
import IconArrowLeft from "../../components/icons/IconArrowLeft";
import './About.scss'


export default function ImgAbout() {
    const params = useParams();
    const listado = IMGSABOUT;

    const listadoSeleccionado = listado.find(img => img.id === params.imgId);

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
                    {listadoSeleccionado.carrusele.map(img => <img className="img__aboutpost--carruselle" key={img.id} src={img}></img>)}
                </div>
            }
            <p><strong>gugli: </strong>{listadoSeleccionado.description}</p>
            <p><small>{listadoSeleccionado.date}</small></p>
        </section>
        
    </>
}