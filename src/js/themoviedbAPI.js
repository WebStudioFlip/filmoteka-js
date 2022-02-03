'use strict';

export class TheMoviebdhAPI {
  #BASE_URL = 'https://api.themoviedb.org/3';
  #API_KEY = '9f2bc6dc8b2f46ed6de79a15158912b2';

  constructor(keyword = null) {
    this.page = 1;
    this.keyword = keyword;
    this.genres = [];
    this.getGenresList();
    this.currentList = [];
    this.getFavoriteFilms();
  }

  getFavoriteFilms() {
    return fetch(`${this.#BASE_URL}/trending/movie/week?api_key=${this.#API_KEY}`).then(
      response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response
          .json()
          .then(result => {
            this.currentList = result.results;
            return this.currentList;
          })
          .catch(err => console.log(err));
      },
    );
  }

  searchFilms() {
    return fetch(
      `${this.#BASE_URL}/search/movie?query=${this.keyword}&page=${this.page}&api_key=${
        this.#API_KEY
      }`,
    )
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(result => {
        this.currentList = result.results;
        return this.currentList;
      })
      .catch(err => console.log(err));
  }

  getGenresList() {
    return fetch(`${this.#BASE_URL}/genre/movie/list?api_key=${this.#API_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(result => (this.genres = result.genres))
      .catch(err => console.log(err));
  }
}

export function searchFilmsCompletes(movieId) {
  return fetch(
    'https://api.themoviedb.org/3/movie/' + movieId + '?api_key=9f2bc6dc8b2f46ed6de79a15158912b2',
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
