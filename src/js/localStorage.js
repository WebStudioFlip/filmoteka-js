'use strict';

import { searchFilmsCompletes } from './themoviedbAPI';
import libraryCardTemplate from '../templates/library-gallery-elements.hbs';
import { AddedToLocalStorage } from './localStorageCheckContent.js';
export function AddToWatched() {
  const btnWatchedEl = document.querySelector('.btn-watch');
  const modalWindowEl = document.querySelector('.movie-modal-card');

  btnWatchedEl.addEventListener('click', event => {
    searchFilmsCompletes(Number(modalWindowEl.dataset.currentMovieId)).then(response => {
      if (localStorage.hasOwnProperty('myLib')) {
        const myLibArr = [...JSON.parse(localStorage.getItem('myLib'))];
        if (myLibArr.some(el => el.id === response.id)) {
          return;
        } else {
          myLibArr.push(response);
          localStorage.setItem('myLib', JSON.stringify(myLibArr));
          console.log(myLibArr);
        }
      } else {
        localStorage.setItem('myLib', JSON.stringify([response]));
      }
    });
  });
}

export function AddToQueue() {
  const btnWatchedEl = document.querySelector('.btn-queue');
  const modalWindowEl = document.querySelector('.movie-modal-card');

  btnWatchedEl.addEventListener('click', event => {
    searchFilmsCompletes(Number(modalWindowEl.dataset.currentMovieId)).then(response => {
      if (localStorage.hasOwnProperty('queue')) {
        const myQueueArr = [...JSON.parse(localStorage.getItem('queue'))];
        if (myQueueArr.some(el => el.id === response.id)) {
          return;
        } else {
          myQueueArr.push(response);
          localStorage.setItem('queue', JSON.stringify(myQueueArr));
          console.log(myQueueArr);
        }
      } else {
        localStorage.setItem('queue', JSON.stringify([response]));
      }
    });
  });
}
