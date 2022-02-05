import movieDetails from '../templates/modal-movie-card.hbs';
import { searchFilmsCompletes } from './themoviedbAPI';
import { AddToWatched, AddToQueue } from './localStorage';

const modalBox = document.querySelector('.modal-card-container');
const modalCloseBtn = document.querySelector('.modal-btn-close');
const backdropEl = document.querySelector('.backdrop');
const movieGalleryEl = document.querySelector('.gallery');
const scrollUpBtn = document.querySelector('button.btn-back-to-top');

movieGalleryEl.addEventListener('click', onClickGallery);
modalCloseBtn.addEventListener('click', onCloseBtn);
backdropEl.addEventListener('click', closeBackdrop);

function onClickGallery(event) {
  event.preventDefault();

  if (
    event.target.nodeName !== 'IMG' &&
    event.target.nodeName !== 'H2' &&
    event.target.nodeName !== 'P' &&
    event.target.nodeName !== 'UL' &&
    event.target.nodeName !== 'LI'
  ) {
    return;
  } else {
    backdropEl.classList.remove('is-hidden');
    document.body.classList.add("overflow-hidden");
    document.body.style.overflow = 'hidden';
    scrollUpBtn.classList.add("btn-position");

    const movieId = event.target.closest('.film-card').dataset.filmId;

    searchFilmsCompletes(movieId)
      .then(data => {
        console.log(data);
        modalBox.innerHTML = movieDetails(data);
        AddToWatched();
        AddToQueue();
      })
      .catch(console.log);

    window.addEventListener('keydown', closeModalHandler);
  }
}

function onCloseBtn() {
  backdropEl.classList.add('is-hidden');
  document.body.classList.remove("overflow-hidden");
  document.body.style.overflow = 'visible';
  scrollUpBtn.classList.remove("btn-position");

  window.removeEventListener('keydown', closeModalHandler);
}

function closeModalHandler(event) {
  if (event.code === 'Escape') {
    onCloseBtn();
  }
}

function closeBackdrop(event) {
  if (event.target === event.currentTarget) {
    onCloseBtn();
  }
}
