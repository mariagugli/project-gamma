import { IMGSGALLERY, buttonsFilterGallery } from '../../../public/images-gallery';
import { useState } from "react";
import Btn from '../../components/buttons/Btn';
import IconArrowLeft from '../../components/icons/IconArrowLeft';
import './Gallery.scss';
import { useTranslation } from 'react-i18next';

export default function Gallery() {
    
    const listado = IMGSGALLERY;
    const [filteredGallery, setFilteredGallery] = useState(listado);

    const tagRoma = listado.filter(tag => {
        return tag.tag === "roma"
    });
    const tagMateoM = listado.filter(tag => {
        return tag.tag === "mateo-morral"
    });
    const tagMeseta = listado.filter(tag => {
        return tag.tag === "meseta"
    });
    const tagPolaroid = listado.filter(tag => {
        return tag.tag === "polaroids"
    });
    const tagConcierto = listado.filter(tag => {
        return tag.tag === "conciertos"
    });
    const tagVerano = listado.filter(tag => {
        return tag.tag === "verano"
    });
    const tagClaudia = listado.filter(tag => {
        return tag.tag === "claudia"
    });
    
    function handleImagesGallery(e) {
        const typeImgGallery = e.target.value;
        if (typeImgGallery === "roma") {
            setFilteredGallery(tagRoma)
        } else if (typeImgGallery === "mateomorral") {
            setFilteredGallery(tagMateoM)
        } else if(typeImgGallery === "conciertos") {
            setFilteredGallery(tagConcierto)
        } else if(typeImgGallery === "meseta") {
            setFilteredGallery(tagMeseta)
        } else if (typeImgGallery === "polaroids") {
            setFilteredGallery(tagPolaroid)
        } else if (typeImgGallery === "verano") {
            setFilteredGallery(tagVerano)
        } else if (typeImgGallery === "claudia") {
            setFilteredGallery(tagClaudia)
        } else return setFilteredGallery(listado)
    }

    const { t } = useTranslation();

    return <>
        <section className="section__btnback">
            <Btn isLink={true} to="/" type="btn__back">
                <IconArrowLeft fill="fill-gray__darker" />
            </Btn>
        </section>
        <h1 className='margin-top-pagecontent'>{t("galleryPage.title")}</h1>
        <h2 className='subtitle__gallery'>{t("galleryPage.subtitle")}</h2>

        <section className="section__gallery section__menugallery">
            {buttonsFilterGallery &&
            buttonsFilterGallery.map(type => (
                <Btn key={type.id} value={type.value} onClick={handleImagesGallery} type="btn__menugallery">
                {type.id === "roma" ?
                    `${t("galleryPage.roma")}`
                : type.id === "mm" ?
                    `${t("galleryPage.mateomorral")}`
                : type.id === "conciertos" ?
                    `${t("galleryPage.concerts")}`
                : type.id === "meseta" ?
                    `${t("galleryPage.meseta")}`
                : type.id === "polaroids" ?
                    `${t("galleryPage.polaroids")}`
                : type.id === "verano" ?
                    `${t("galleryPage.summer")}`
                : type.id === "claudia" ?
                    `${t("galleryPage.claudia")}`
                : 
                    `${t("galleryPage.all")}`

                }
                </Btn>
            ))}
        </section>
        <section className="section__gallery section__imgsgallery">
            <article className='article__columnsgallery'>
                
                {filteredGallery &&
                filteredGallery.map(type =>
                    <img className={`img__gallery img-${type.size}`} value={type.tag} key={type.id} src={type.image} alt={type.title} />
                )}
                
            </article>
            
        </section>
    </>
}