'use strict';

import { TheMoviebdhAPI } from './themoviedbAPI';
import galleryCardsTemplate from '../templates/home-gallery-elements.hbs';

const searchFormEl = document.querySelector('.search-form');
const searchField = document.querySelector('.input-box');
const galleryListEl = document.querySelector('.gallery');
const headerCont = document.querySelector('div.header-container');

searchFormEl.addEventListener('submit', event => {
  event.preventDefault();
  const keyword = searchField.value;

  if (!keyword.length) {
    return;
  }

  const theMoviebdhAPI = new TheMoviebdhAPI();
  theMoviebdhAPI.searchFilms(keyword).then(data => {
    if (!data.length) {
      console.log('Не найдено');
      headerCont.insertAdjacentHTML(
        'beforeend',
        '<p class="search-error-text container">Search result not successful. Enter the correct movie name and</p>',
      );
      return;
    }
    
    galleryListEl.innerHTML = '';
    galleryListEl.insertAdjacentHTML('beforeend', galleryCardsTemplate(data));
  });
});
