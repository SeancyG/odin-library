const myLibrary = [];

const dialog = document.querySelector("dialog");
const addBookButton = document.querySelector(".add-book");
addBookButton.addEventListener("click", () => {
    dialog.showModal();
});
const bookForm = document.querySelector("form");
bookForm.addEventListener("submit", submitBook);
const removeButton = document.querySelector(".remove");
const bookshelf = document.querySelector(".bookshelf");
bookshelf.addEventListener("click", (e) => {
    let target = e.target;
    if(e.target.classList.contains("remove")) {
        removeBook(e.target.dataset.id);
    } else if(e.target.type=="checkbox") {
        if(e.target.checked == true) {
            changeReadStatus(myLibrary[myLibrary.findIndex(item => item.id === e.target.dataset.id)], true);
            console.log(true);
        } else {
            changeReadStatus(myLibrary[myLibrary.findIndex(item => item.id === e.target.dataset.id)], false);
        }
    }
})

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
    div.setAttribute("data-id", book.id);
    bookshelf.appendChild(div);
    const title = document.createElement("p");
    title.classList.add("title");
    title.textContent = book.title;
    div.appendChild(title);
    const readStatus = document.createElement("input");
    readStatus.setAttribute("type", "checkbox");
    readStatus.setAttribute("data-id", book.id);
    if(book.readStatus) {
        readStatus.checked = true;
    } else {
        readStatus.checked = false;
    }
    div.appendChild(readStatus);
    const remove = document.createElement("button");
    remove.classList.add("remove");
    remove.setAttribute("data-id", book.id);
    remove.textContent = "Remove";
    div.appendChild(remove);
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

function removeBook(id) {
    const book = document.querySelector(`div[data-id="${id}"]`)
    console.log(book);
    bookshelf.removeChild(book);
    myLibrary.splice(myLibrary.findIndex(item => item.id === id), 1);
}

function changeReadStatus(book, readStatus) {
    book.readStatus = readStatus;
}

populateBookshelf();