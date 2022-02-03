'use strict';

import { TheMoviebdhAPI } from './themoviedbAPI';
import galleryCardsTemplate from '../templates/home-gallery-elements.hbs';

const searchFormEl = document.querySelector('.search-form');
const searchField = document.querySelector('.input-box');
const galleryListEl = document.querySelector('.gallery');
const errorText = document.querySelector('p.search-error-text');

searchFormEl.addEventListener('submit', event => {
  event.preventDefault();
  const keyword = searchField.value;

  if (!keyword.length) {
    const theMoviebdhAPI = new TheMoviebdhAPI();
    theMoviebdhAPI.getFavoriteFilms().then(data => {
      galleryListEl.innerHTML = '';
      errorText.innerHTML = '';
      galleryListEl.insertAdjacentHTML('beforeend', galleryCardsTemplate(data));
    });
    return;
  }

  const theMoviebdhAPI = new TheMoviebdhAPI();
  theMoviebdhAPI.searchFilms(keyword).then(data => {
    if (!data.length) {
      errorText.innerHTML = 'Search result not successful. Enter the correct movie name and';
      return;
    }

    galleryListEl.innerHTML = '';
    errorText.innerHTML = '';
    galleryListEl.insertAdjacentHTML('beforeend', galleryCardsTemplate(data));
  });
});
