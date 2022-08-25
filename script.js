let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


//these are all the references required for the modal
let addBook = document.querySelector('.add-book-button');
let modal = document.querySelector('.modal');
let modalClose = document.querySelector('.modal-close-button');

//adding event to add book buttons such that modal opens on click
addBook.addEventListener('click', () => {
    modal.style.display = 'flex';
});

//adding event to close button on modal
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});





