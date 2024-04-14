import css from '../ImageGallery/ImageGallery.module.css'

function ImageCard({littleImage, alt}){
    return(
        <div className={css.card}>
            <img className={css.image} src={littleImage} alt={alt}/>
        </div>
    )
}

export default ImageCard;