'use strict';

import { searchFilmsCompletes } from './themoviedbAPI';

function SetlocalStorage() {
  const myLibrary = [];
  const Queue = [];

  localStorage.setItem('myLib', myLibrary);
  localStorage.setItem('Queue', Queue);
}

SetlocalStorage();

export function AddToWatched() {
  const btnWatchedEl = document.querySelector('.btn-watch');
  const modalWindowEl = document.querySelector('.movie-modal-card');

  btnWatchedEl.addEventListener('click', event => {
    searchFilmsCompletes(Number(modalWindowEl.dataset.currentMovieId)).then(response => {
      console.log(response);
    });
  });
}

export function AddToQueue() {
  const btnWatchedEl = document.querySelector('.btn-queue');

  btnWatchedEl.addEventListener('click', event => {
    console.dir(searchFilmsCompletes);
  });
}
