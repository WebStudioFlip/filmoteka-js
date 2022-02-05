
const myLibraryWatchedEl = document.querySelector('.watched-button');
const myLibraryQueueEl = document.querySelector('.queue-button')

myLibraryWatchedEl.addEventListener('click', () => {

        myLibraryWatchedEl.classList.add('is-active')
        myLibraryQueueEl.classList.remove('is-active')
    
})
myLibraryQueueEl.addEventListener('click', () => {
    myLibraryWatchedEl.classList.remove('is-active')
    myLibraryQueueEl.classList.add('is-active')
})
 console.dir(myLibraryWatchedEl);
 

