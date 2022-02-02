'use strict';
// https://unsplash.com/

import { TheMoviebdhAPI } from './themoviedbAPI';
import galleryCardsTemplate from '../templates/home-gallery-elements.hbs';

const searchFormEl = document.querySelector('.search-form');
const galleryListEl = document.querySelector('.gallery');

const theMoviebdhAPI = new TheMoviebdhAPI();

galleryListEl.insertAdjacentHTML('beforeend', galleryCardsTemplate(theMoviebdhAPI.currentList));
