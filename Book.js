
let myLibrary = [];
let addBook;
let id = 0;

const form = document.querySelector('.bookForm');
const display = document.querySelector('#card-container');
const submintBtn = document.querySelector(".formSubmitBtn");

submintBtn.addEventListener('click', (e) => { console.log("submit button was pressed") });

//Book Constructor with info function that creates a book and allows
//user to get info from the book.

class Book {
    constructor(title, author, pages, read, id) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = id;
    }
}

//Function adds books to the myLibrary array

function addBooktoLibrary() {
    const bookTitle = document.querySelector('#title');
    const bookAuthor = document.querySelector('#author');
    const bookPages = document.querySelector('#pages');
    const bookRead = document.querySelector('#read');

    const addBook = new Book(
        bookTitle.value,
        bookAuthor.value,
        bookPages.value,
        bookRead.checked,
        id
    );
    console.log(bookTitle.value + bookAuthor.value + bookPages.value + bookRead.value + id);
    console.log("has been added");
    console.log(addBook)
    myLibrary.push(addBook);
    id += 1;
}


//Runs through the array and showcases all the books

function libraryDisplay() {
    console.log("display initiated");
    while (document.querySelector('.book') != null) {
        document.querySelector('.book').remove();
    }
    myLibrary.forEach((book) => {
        console.log("creating book divs");
        const div = document.createElement('div');
        div.classList.add('book');
        div.setAttribute('id', book.id);

        const cardTitle = document.createElement('p');
        cardTitle.textContent = book.title;
        const cardAuthor = document.createElement('p');
        cardAuthor.textContent = book.author;
        const cardPages = document.createElement('p');
        cardPages.textContent = book.pages;
        const cardRead = document.createElement('p');
        console.log(book.read + "read status");
        if(book.read===true){
            cardRead.textContent = 'Read';
        }
        else {
            cardRead.textContent = 'Not Read';
        }
        const deleteBtn = document.createElement('button');
        const readBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add("delBtn");
        deleteBtn.setAttribute('id', book.id);
        readBtn.classList.add('rBtn')
        readBtn.textContent = 'Read';
        readBtn.setAttribute('id',book.id);

        
        div.append(cardTitle, cardAuthor, cardPages, cardRead, deleteBtn, readBtn);
        display.append(div);
        
        //Book delete button. Checks if book was created and listens for delete button click.

        deleteBtn.addEventListener('click', (e) => {
            console.log('delete btn pressed1');
            e.preventDefault();
            myLibrary.splice(myLibrary.indexOf(book), 1);
            console.log('delete btn pressed');
            libraryDisplay();
            console.log('display launched')
        });

        readBtn.addEventListener('click', (e)=>{
            e.preventDefault();
            if(cardRead.textContent === 'Read'){
            cardRead.textContent='Not Read';}
            else{
                cardRead.textContent = 'Read';
            }
        });

    }
    );
    console.log("display finished");
};

//Adds new book to myLibrary array and displays all current books in array.

form.addEventListener('submit', (e) => {
    console.log("form event tracked")
    e.preventDefault();
    addBooktoLibrary();
    libraryDisplay();
});

//Opens form when "New Book" is clicked

const formOpener = document.querySelector(".newBookBtn");
formOpener.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('form').style.display = 'block'
});

//Closes form when clicked.

const formCloser = document.querySelector(".closeBookBtn");
formCloser.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('form').style.display = 'none'
});









