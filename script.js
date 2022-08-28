// Note: always addBooktoDOM first then addBookToLibrary.the id of the card is assigned according to the library index that book will be at 

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
    card.setAttribute('id', library.length); //this will give a unique attribute to each book according to its array index. this will help us identify the book in an array later when we have to delete a book
    
    //creating a new title element in memeory, adding the current objects title to it's contnet and appending this title element to the card element created above
    let titleNode = document.createElement('div');
    titleNode.classList.add('book-title-card');
    titleNode.textContent = this.title;
    card.appendChild(titleNode);


    let authorNode = document.createElement('div');
    authorNode.classList.add('book-author-card');
    authorNode.textContent = this.author;
    card.appendChild(authorNode);

    
    let pagesNode = document.createElement('div');
    pagesNode.classList.add('book-pages-card');
    pagesNode.textContent = this.pages;
    card.appendChild(pagesNode);


    let readNode = document.createElement('div');
    readNode.classList.add('book-read-card');
    if(this.read === false) {
        card.classList.add('not-read');
        readNode.classList.add('not-read');
        readNode.textContent = 'Not Read';
    }
    else readNode.textContent = 'Read'
    //adding eventistener to the read button
    readNode.addEventListener('click', (event) => {
        toggleReadStatus(readNode, readNode.parentNode);
    })
    card.appendChild(readNode);


    let deleteCardButton = document.createElement('div');
    deleteCardButton.classList.add('delete-book');
    deleteCardButton.textContent = 'Delete';
    //adding eventListner to the delete button
    deleteCardButton.addEventListener('click', () => {
        deleteBook(deleteCardButton);
    });
    card.appendChild(deleteCardButton);

    // now appending the single book card to the cards element which contains all the cards.
    cards.appendChild(card);
}

//this methods will add the book object to the library array
Book.prototype.addBookToLibrary = function() {
    library.push(this);
}


let myBook = new Book('Lord of the Rings', 'JJ Tolkein', 485, false);

myBook.addBooktoDOM();
myBook.addBookToLibrary();


myBook = new Book('Harry Potter', 'Brad Pitt', 800, true);
myBook.addBooktoDOM();
myBook.addBookToLibrary();



function toggleReadStatus(readReference, cardReference) {

    cardReference.classList.toggle('not-read');
    readReference.classList.toggle('not-read');
    //the index in library of the book object clicked is this book node's id
    let index = cardReference.id;
    //changing the read status of the book object in the library
    library[index].read = !library[index].read;
    readReference.textContent = library[index].read === true ? 'Read' : 'Not Read';
}

function deleteBook(deleteButtonReference) {

    //deleting from library
    let index = deleteButtonReference.parentNode.id;
    library.splice(index,1);

    //since library is updated, the index of all the books will be changed(-1). we have to update the id of each book in the DOM accodingly. updateIdOfCards does this
    updateIdOfAllCards();

    //deleting book from DOM
    cards.removeChild(deleteButtonReference.parentNode);
}

function updateIdOfAllCards() {
    let everyCardList = document.querySelectorAll('.card');
    everyCardList.forEach((card) => {
        card.id = card.id - 1;
    });
}


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
    newBook.addBooktoDOM();
    newBook.addBookToLibrary();

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





