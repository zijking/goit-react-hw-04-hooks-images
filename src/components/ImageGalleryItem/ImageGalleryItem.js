import React from 'react';

import s from './ImageGalleryItem.module.css';

function ImageGalleryItem({ img, onClickM }) {
  return (
    <li
      id={img.id}
      onClick={e => {
        // console.log(e);
        // console.log(e.currentTarget.nodeName);
        if (e.currentTarget.nodeName !== 'LI') {
          return;
        }
        const id = e.currentTarget.id;
        onClickM(id);
      }}
      className={s.imageGalleryItem}
    >
      <img
        src={img.webformatURL}
        alt={img.tags}
        className={s.imageGalleryItemImage}
      />
    </li>
  );
}

export default ImageGalleryItem;
