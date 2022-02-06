const buttonWatchedEl = document.querySelector('.btn-watched');
const buttonQueueEl = document.querySelector('.btn-queue');

buttonQueueClick.setAttribute('disabled', '');

buttonWatchedEl.addEventListener('click', () => {
  buttonWatchedEl.classList.add('is-active');
  buttonQueueEl.classList.remove('is-active');
});
buttonQueueEl.addEventListener('click', () => {
  buttonWatchedEl.classList.remove('is-active');
  buttonQueueEl.classList.add('is-active');
});
console.dir(buttonWatchedEl);
