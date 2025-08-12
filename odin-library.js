const myLibrary = [];

function Book(title) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor.")
    }
    this.id = crypto.randomUUID();
    this.title = title;
}

function addBookToLibrary(title) {
    const newBook = new Book(title);
    myLibrary.push(newBook);
    displayBook(newBook);
}

function displayBook(book) {
    const bookshelf = document.querySelector(".bookshelf");
    const div = document.createElement("div");
    div.classList.add("book");
    div.setAttribute("id", book.id);
    bookshelf.appendChild(div);
    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = book.title;
    div.appendChild(title);
}

function populateBookshelf() {
    for (let index = 0; index < myLibrary.length; index++) {
        displayBook(myLibrary[index]);
    }
}

populateBookshelf();