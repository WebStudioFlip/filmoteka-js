

export function AddedToLocalStorage() {
    setTimeout(() => {
        
        const filmCardEl = document.querySelector('.film-card');
        const watchedBtnEl = document.querySelector('.btn-watch');
        filmCardEl.addEventListener('click', event => {
            watchedBtnEl.innerText = 'Remove from watched';
        })
        

    }, 3000);
}