'use strict';


import { TheMoviebdhAPI } from './themoviedbAPI';
import galleryCardsTemplate from '../templates/home-gallery-elements.hbs';

const searchFormEl = document.querySelector('.search-form');
const galleryListEl = document.querySelector('.gallery');



const theMoviebdhAPI = new TheMoviebdhAPI();
console.log(theMoviebdhAPI)
theMoviebdhAPI.getFavoriteFilms().then((data)=>galleryListEl.insertAdjacentHTML('beforeend', galleryCardsTemplate(data)))

