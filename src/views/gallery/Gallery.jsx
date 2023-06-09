import { IMGSGALLERY, buttonsFilterGallery } from '../../../public/images-gallery';
import { getImages, filterGallery } from '../../../public/services';
import { useEffect, useState } from "react";
import Btn from '../../components/buttons/Btn';
import IconArrowLeft from '../../components/icons/IconArrowLeft';
import './Gallery.scss';

export default function Gallery() {
    
    const listado = IMGSGALLERY;
    const [filteredGallery, setFilteredGallery] = useState(null);
    
    useEffect(() => {
        setFilteredGallery(listado);
    }, []);
    
    function handleImagesGallery(e) {
        const typeImgGallery = e.target.value;
        typeImgGallery !== "all"
        ? setFilteredGallery(filterGallery(typeImgGallery))
        : setFilteredGallery(getImages())
    }

    const columna1 = listado.filter(imgs => {
        return imgs.table === "table-1"
    });
    const columna2 = listado.filter(imgs => {
        return imgs.table === "table-2"
    });
    const columna3 = listado.filter(imgs => {
        return imgs.table === "table-3"
    });
    const columna4 = listado.filter(imgs => {
        return imgs.table === "table-4"
    });

    return <>
        <section className="section__btnback">
            <Btn isLink={true} to="/" type="btn__back">
                <IconArrowLeft fill="fill-gray__darker" />
            </Btn>
        </section>
        <h1>Random Gallery</h1>
        <h2 className='subtitle__gallery'>También soy fotógrafa</h2>

        <section className="section__gallery section__menugallery">
            {buttonsFilterGallery &&
            buttonsFilterGallery.map(type => (
            <>
                <Btn key={type.name} value={type.value} onClick={handleImagesGallery} type="btn__menugallery">
                {type.name}
                </Btn>
            </>
            ))}
        </section>
        <section className="section__gallery section__imgsgallery">
            <article className='article__columnsgallery'>
                <div className='table-1'>
                    {columna1.map(img =>
                        <img className="img__gallery" value={img.tag} key={img.id} src={img.image} alt={img.title} />
                    )}
                </div>
                <div className='table-2'>
                    {columna2.map(img =>
                        <img className="img__gallery" value={img.tag} key={img.id} src={img.image} alt={img.title} />
                    )}
                </div>
            </article>
            <article className='article__columnsgallery'>
                <div className='table-3'>
                    {columna3.map(img =>
                        <img className="img__gallery" value={img.tag} key={img.id} src={img.image} alt={img.title} />
                    )}
                </div>
                <div className='table-4'>
                    {columna4.map(img =>
                        <img className="img__gallery" value={img.tag} key={img.id} src={img.image} alt={img.title} />
                    )}
                </div>
            </article>
        </section>

    </>
}