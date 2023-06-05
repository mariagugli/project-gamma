import { useParams } from "react-router-dom"
import { IMGSABOUT } from "../../../public/images-about";
import './About.scss'


export default function ImgAbout() {
    const params = useParams();
    const listado = IMGSABOUT;

    const listadoSeleccionado = listado.find(img => img.id === params.imgId);

    return <>
        <img src={listadoSeleccionado.image} alt={listadoSeleccionado.title} />
        <p><strong>gugli:</strong>{listadoSeleccionado.description}</p>
    </>
}