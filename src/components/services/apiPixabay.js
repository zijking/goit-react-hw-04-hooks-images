// console.log('apiService.js');

const API_KEY = '19017356-b8756222892cfba3d959da30c';
const BASE_URL = 'https://pixabay.com/api/';
const ON_PAGE = 20;

export default class SearchImgAi {
  constructor() {
    this.page = 1;
    this.searchWord = '';
  }

  searchImg() {
    return fetch(
      `${BASE_URL}\\?key=${API_KEY}&q=${this.searchWord}&per_page=${ON_PAGE}&page=${this.page}`,
    ).then(response => response.json());
  }

  incrementPage() {
    this.page += 1;
  }

  searchImgById(id) {
    return fetch(`${BASE_URL}\\?key=${API_KEY}&id=${id}`).then(response =>
      response.json(),
    );
  }

  set setPage(newPage) {
    if (newPage !== this.page && newPage < this.page) {
      this.page = newPage;
      console.log('new page big');
    }
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchWord;
  }

  set queryWord(newWord) {
    this.searchWord = newWord;
  }

  get currentPage() {
    return this.page;
  }
}
