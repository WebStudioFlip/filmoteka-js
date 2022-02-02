import movieDetails from '../templates/modal-movie-card.hbs';
import TheMoviebdhAPI from './themoviedbAPI';

const modalBox = document.querySelector('.modal-card-container');
const modalCloseBtn = document.querySelector('.modal-btn-close');
const backdropEl = document.querySelector('.backdrop');
const movieGalleryEl = document.querySelector('.film-card');

movieGalleryEl.addEventListener('click', onClickGallery);
modalCloseBtn.addEventListener('click', onCloseBtn);
backdropEl.addEventListener('click', onCloseBtn);

function onClickGallery(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG' && event.target.nodeName !== 'H2') {
    return;
  } else {
    backdropEl.classList.remove('is-hidden');

    const tmdbApi = new TheMoviebdhAPI();
    const movieId = null;

    tmdbApi
      .searchFilmsCompletes(movieId)
      .then(data => {
        modalBox.innerHTML = movieDetails(data);
      })
      .catch(console.log);

    window.addEventListener('keydown', closeModalHandler);
  }
}

function onCloseBtn() {
  backdropEl.classList.add('is-hidden');
  window.removeEventListener('keydown', closeModalHandler);
}

function closeModalHandler(event) {
  if (event.code === 'Escape') {
    onCloseBtn();
  }
}
