'use strict';
// https://unsplash.com/

import { TheMoviebdhAPI } from './themoviedbAPI';
import galleryCardsTemplate from '../templates/gallery-elements.hbs';

const searchFormEl = document.querySelector('.search-form');
const galleryListEl = document.querySelector('.gallery');

const theMoviebdhAPI = new TheMoviebdhAPI();

theMoviebdhAPI.getFavoriteFilms().then(({results:data}) => {
    console.log(galleryCardsTemplate(data));
    galleryListEl.insertAdjacentHTML('beforeend', galleryCardsTemplate(data));
  });

  