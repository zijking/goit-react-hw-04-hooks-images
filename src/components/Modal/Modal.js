import React, { useEffect } from 'react';
import s from './Modal.module.css';

function Modal({ item, toggleModal }) {
  useEffect(() => {
    // console.log('window.addEventListener');
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      // console.log('window.removeEventListener');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      // console.log('Нажали ESC, нужно закрыть модалку');
      toggleModal();
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  };

  return (
    <div onClick={handleBackdropClick} className={s.overlay}>
      <div className={s.modal}>
        <img src={item.largeImageURL} alt={item.tags} />
      </div>
    </div>
  );
}

export default Modal;
