const myLibrary = [];

const dialog = document.querySelector("dialog");
const addBookButton = document.querySelector(".add-book");
addBookButton.addEventListener("click", () => {
    dialog.showModal();
});
const bookForm = document.querySelector("form");
bookForm.addEventListener("submit", submitBook);

function Book(title, readStatus) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor.")
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.readStatus = readStatus;
}

function addBookToLibrary(title, readStatus) {
    const newBook = new Book(title, readStatus);
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
    const readStatus = document.createElement("input");
    //readStatus.setAttribute("checked")
}

function populateBookshelf() {
    for (let index = 0; index < myLibrary.length; index++) {
        displayBook(myLibrary[index]);
    }
}

function submitBook(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const title = formData.get("title");
    const readStatusForm = formData.get("readStatus");
    let readStatus;
    if(readStatusForm) {
        readStatus = true;
    } else {
        readStatus = false;
    }

    addBookToLibrary(title, readStatus);
}

populateBookshelf();