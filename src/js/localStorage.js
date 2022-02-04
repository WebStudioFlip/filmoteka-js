'use strict';

import { searchFilmsCompletes } from './themoviedbAPI';
import libraryCardTemplate from '../templates/library-gallery-elements.hbs';

export function AddToWatched() {
  const btnWatchedEl = document.querySelector('.btn-watch');
  const modalWindowEl = document.querySelector('.movie-modal-card');

  btnWatchedEl.addEventListener('click', event => {
    searchFilmsCompletes(Number(modalWindowEl.dataset.currentMovieId)).then(response => {
      const responseString = [response.id];
      localStorage.setItem('myLib', responseString);
      console.log(localStorage);
      // const myLibraryParsed = JSON.parse(localStorage.myLib);
      // myLibraryParsed.push(response);
      // console.log(myLibraryParsed);
    });
  });
}

export function AddToQueue() {
  const btnWatchedEl = document.querySelector('.btn-queue');

  btnWatchedEl.addEventListener('click', event => {
    localStorage.setItem('Queue', JSON.stringify(response));
  });
}
