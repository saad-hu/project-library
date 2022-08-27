//reference to the cards section
let cards = document.querySelector('.cards');


//this is a library of all the book objects
let library = [];

// the Book object constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//adding methods to book object in its prototype

//this method will add the book to the DOM and display it
Book.prototype.addBooktoDOM = function() {
    //creating a new card
    let card = document.createElement('div');
    card.classList.add('card');
    
    //creating a new title element in memeory, adding the current objects title to it's contnet and appending this title element to the card element created above
    let title = document.createElement('div');
    title.classList.add('book-title-card');
    title.textContent = this.title;
    card.appendChild(title);

    let author = document.createElement('div');
    author.classList.add('book-author-card');
    author.textContent = this.author;
    card.appendChild(author);

    let pages = document.createElement('div');
    pages.classList.add('book-pages-card');
    pages.textContent = this.pages;
    card.appendChild(pages);

    let read = document.createElement('div');
    read.classList.add('book-read-card');
    if(this.read === false) {
        card.classList.add('not-read');
        read.classList.add('not-read');
        read.textContent = 'Not Read';
    }
    else read.textContent = 'Read'
    card.appendChild(read);

    //now appending the single book card to the cards element which contains all the cards
    cards.appendChild(card);
}

//this methods will add the book object to the library array
Book.prototype.addBookToLibrary = function() {
    library.push(this);
}


let myBook = new Book('Lord of the Rings', 'JJ Tolkein', 485, false);

myBook.addBookToLibrary();
myBook.addBooktoDOM();

myBook = new Book('Harry Potter', 'Brad Pitt', 800, true);
myBook.addBookToLibrary();
myBook.addBooktoDOM();





//form portion

//reference to all form inputs
let newBookTitle = document.querySelector('#book_title');
let newBookAuthor = document.querySelector('#book_author');
let newBookPages = document.querySelector('#book_pages');
let newBookRead = document.querySelector('#read');

//reference to the new book form
let userBookForm = document.querySelector('#user-book');

//adding sumbit listener to the new book form
userBookForm.addEventListener('submit', (event) => {

    //creating a newBook object using the 'Book' Object Constructor 
    let newBook = new Book(newBookTitle.value, newBookAuthor.value, newBookPages.value, newBookRead.checked);

    //addding the newBook to library and DOM using the 'Book' methods (that are defined in its prototype)
    newBook.addBookToLibrary();
    newBook.addBooktoDOM();

    //preventing the form's default action after submission. The default action is to submit the form to the url which causes the DOM to reload, which will remove the book cards from the DOM
    event.preventDefault();

    //since we have prevented the form from it's default action, we have to manualy reset the form 
    userBookForm.reset();
    modal.style.display = 'none';
});



// modal portion

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





