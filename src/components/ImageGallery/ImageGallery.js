import React, { useState, useEffect, useRef } from 'react';

import searchImg from '../services/apiPixabay';
import ButtonLoadMore from '../ButtonLoadMore';
import s from './ImageGallery.module.css';
import ItemImg from '../ImageGalleryItem';
import Modal from '../Modal';
import Loader from '../Loader';

function ImageGallery({ sword }) {
  const [images, setImages] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const apiSearch = useRef(new searchImg());
  let fitrstStart = useRef(false);

  useEffect(() => {
    if (!fitrstStart.current) {
      fitrstStart.current = true;
      return;
    }
    // console.log('Змінилось пошукове слово !');
    apiSearch.current.resetPage();
    setImages(null);

    apiSearch.current.queryWord = sword;
    setLoading(true);

    apiSearch.current
      .searchImg()
      .then(res => {
        setImages(res.hits);
      })
      .finally(setLoading(false));
  }, [sword]);

  const handlerModal = id => {
    const numId = Number(id);

    const isLargeNumber = element => element.id === numId;

    const indexModsl = images.findIndex(isLargeNumber);
    setModalIndex(indexModsl);
    modalShowW();
  };

  const modalShowW = () => {
    setModalShow(state => !state);
  };

  async function onCkickLoadMore(even) {
    // console.log('click more');

    await apiSearch.current.incrementPage();
    // console.log(apiSearch.current);
    await apiSearch.current.searchImg().then(res => {
      setImages(state => [...state, ...res.hits]);

      // console.log(res);
    });
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  return (
    <>
      {loading && <Loader />}
      <ul className={s.imageGallery}>
        {images &&
          images.map(item => {
            return <ItemImg key={item.id} img={item} onClickM={handlerModal} />;
          })}
      </ul>
      {images && <ButtonLoadMore onClick={() => onCkickLoadMore()} />}
      {modalShow && (
        <Modal toggleModal={modalShowW} item={images[modalIndex]} />
      )}
    </>
  );
}

export default ImageGallery;
