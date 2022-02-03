'use strict';


import { TheMoviebdhAPI } from './themoviedbAPI';
import galleryCardsTemplate from '../templates/home-gallery-elements.hbs';

const searchFormEl = document.querySelector('.search-form');
const searchField = document.querySelector('.input-box');
const galleryListEl = document.querySelector('.gallery');

searchFormEl.addEventListener("submit", event => {
    event.preventDefault();
    const keyword = searchField.value;

    galleryListEl.innerHTML = "";
    const theMoviebdhAPI = new TheMoviebdhAPI();
    theMoviebdhAPI.searchFilms(keyword).then((data)=>galleryListEl.insertAdjacentHTML('beforeend', galleryCardsTemplate(data)))
})



