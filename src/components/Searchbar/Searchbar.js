import { useState } from 'react';

import s from './Searchbar.module.css';

function SearchBar({ onSubmit }) {
  const [search, setSearch] = useState('');

  const onChangeHandler = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'search': {
        setSearch(value);
        break;
      }
      default:
        return;
    }
  };

  const onSubmitHandel = e => {
    if (search.trim() === '') {
      alert('Write SEARCH WORD !!!');
      return;
    }
    e.preventDefault();
    onSubmit(search);
  };

  return (
    <header className={s.searchbar}>
      <form onSubmit={onSubmitHandel} className={s.searchForm}>
        <button type="submit" className={s.searchFormButton}>
          <span className={s.searchFormButtonLabel}></span>
        </button>

        <input
          name="search"
          className={s.searchFormInput}
          onChange={onChangeHandler}
          type="text"
          placeholder="Search images and photos"
          value={search}
        />
      </form>
    </header>
  );
}

export default SearchBar;
