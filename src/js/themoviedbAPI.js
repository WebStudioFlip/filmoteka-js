'use strict';

export class TheMoviebdhAPI {
  #BASE_URL = 'https://api.themoviedb.org/3';
  #API_KEY = '9f2bc6dc8b2f46ed6de79a15158912b2';

  constructor(keyword = null) {
    this.page = 1;
    this.keyword = keyword;
  }

  getFavoriteFilms() {
    return fetch(
      `${this.#BASE_URL}/trending/all/week?api_key=${this.#API_KEY}`,
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }

      return response.json();
    });
  }  

  searchFilms() {
    return fetch(
      `${this.#BASE_URL}/trending/all/week?query=${this.keyword}&page=${
        this.page
      }&api_key=${this.#API_KEY}`,
    ).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
  }  
}