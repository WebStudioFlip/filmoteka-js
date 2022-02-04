'use strict';

import { TheMoviebdhAPI } from './themoviedbAPI';
import galleryCardsTemplate from '../templates/home-gallery-elements.hbs';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const container = document.getElementById('pagination');

function creatPagination (totalItems){
    const optionsPagination = {
        totalItems: totalItems,
        itemsPerPage: 20,
        visiblePages: 7,
        page: 1,
        centerAlign: false,     
      };
      const pagination = new Pagination(container, optionsPagination);
      pagination.on('beforeMove', onPaginationClick);
}

function onPaginationClick (event) {
    theMoviebdhAPI.page = event.page
    theMoviebdhAPI.searchFilms().then(data => {   
      galleryListEl.innerHTML = '';
      errorText.innerHTML = '';
      galleryListEl.insertAdjacentHTML('beforeend', galleryCardsTemplate(data.results));
    });
}

const searchFormEl = document.querySelector('.search-form');
const galleryListEl = document.querySelector('.gallery');
const searchField = document.querySelector('.input-box');
const errorText = document.querySelector('p.search-error-text');

const theMoviebdhAPI = new TheMoviebdhAPI();
console.log(theMoviebdhAPI)
theMoviebdhAPI.getFavoriteFilms().then((data)=> galleryListEl.insertAdjacentHTML('beforeend', galleryCardsTemplate(data)))

function onFormSubmit (event) {
    event.preventDefault();
    theMoviebdhAPI.keyword = searchField.value;
  
    if (!theMoviebdhAPI.keyword.length) {      
      theMoviebdhAPI.getFavoriteFilms().then(data => {
        galleryListEl.innerHTML = '';
        errorText.innerHTML = '';
        galleryListEl.insertAdjacentHTML('beforeend', galleryCardsTemplate(data));
      });
      return;
    }  
    
    theMoviebdhAPI.searchFilms().then(data => {
        console.log(data)
      if (!data.results.length) {
        errorText.innerHTML = 'Search result not successful. Enter the correct movie name and';
        return;
      }
      creatPagination (data.total_results)
      galleryListEl.innerHTML = '';
      errorText.innerHTML = '';
      
      galleryListEl.insertAdjacentHTML('beforeend', galleryCardsTemplate(data.results));
    });
  }

searchFormEl.addEventListener('submit', onFormSubmit);
