import { Children } from 'react';
import Modal from 'react-modal';
import css from './ImageModal.module.css'

function ImageModal({isOpen, onClose, currentObject}){
    return(
    <Modal
    isOpen={isOpen}
    className={css.modal}
    onRequestClose={onClose}
    shouldCloseOnEsc={true}
    ariaHideApp={false}
    overlayClassName={css.overlay}
    preventScroll={true}
    >
        <img className={css.image} src={currentObject.url} alt={currentObject.alt}/>
    </Modal>
    )
}

export default ImageModal;