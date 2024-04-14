import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css'

function ImageGallery({images, modalOpen}){
    return(
        <ul className={css.box}>
	{images.map(el => <li  onClick={() => modalOpen({url: el.urls.regular, alt: el.alt_description})} key={el.id} className={css.item}><ImageCard littleImage={el.urls.small} alt={el.urls.alt_description}/></li>)}
</ul>
    )
}

export default ImageGallery;