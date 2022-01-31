'use strict';
// https://unsplash.com/

import { TheMoviebdhAPI } from './themoviedbAPI';
import galleryCardsTemplate from '../templates/gallery-elements.hbs';

const searchFormEl = document.querySelector('.js-search-form');
const galleryListEl = document.querySelector('.js-gallery');

const theMoviebdhAPI = new TheMoviebdhAPI();

theMoviebdhAPI.getFavoriteFilms().then(({results:data}) => {
    console.log(data);
    galleryListEl.insertAdjacentHTML('beforeend', galleryCardsTemplate(data));
  });

  