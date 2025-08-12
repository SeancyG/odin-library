const myLibrary = [];

function Book(title) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor.")
    }
    this.id = crypto.randomUUID();
    this.title = title;
}

function addBookToLibrary(Book) {

}