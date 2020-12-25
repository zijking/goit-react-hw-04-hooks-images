import React from 'react';
import s from './ButtonLoadMore.module.css';

function ButtonLoadMore({ onClick }) {
  return (
    <>
      <button type="button" className={s.button} onClick={onClick}>
        Load more
      </button>
    </>
  );
}

export default ButtonLoadMore;
