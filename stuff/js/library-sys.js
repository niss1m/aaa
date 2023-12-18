// Imagine you are tasked with creating a basic library system.
// Design an object named library with the following properties and methods:
//
//     Properties:
//
//         books: An array of book titles.
//     currentLent: An object that tracks which books are currently lent out and
//     to whom.
//     Methods:
//
// addBook(bookTitle): Adds a new book title to the books array.
// lendBook(bookTitle, personName): Registers a book as lent to a specific person.
// The method should check if the book is in the books array and is not already lent
// out. If the book can be lent, it should be added to the currentLent
// object with the person's name as the value.
// returnBook(bookTitle): Marks a book as returned. It should remove the book's entry
// from the currentLent object.

// listLentBooks(): Logs all books that are currently lent out and to whom.
//     Requirements:
//
// Your solution must use the this keyword to reference the library object's
// properties and methods.
// Ensure that the methods account for possible edge cases, such as attempting
// to lend an already lent book.
//     Once done, test your library system with a series of book additions,
//     lendings, and returns to validate its functionality.

const library = {
    books: [],
    currentLent: {},
    addBook: function (bookName) {
        if (!this.books.includes(bookName)) {
            this.books.push(bookName);
            return `Book ${bookName} has been added to the list`;
        }
        return `Error book ${bookName} already exists`;
    },
    returnBook: function (bookName) {
        if (!this.books.includes(bookName)) {
            console.log(`We do not own this book: ${bookName}`);
            return;
        }
        delete this.currentLent[bookName];
        console.log(`Book: ${bookName} has been returned`);
    },
    lendBook: function (bookName, personName) {
        if (!this.books.includes(bookName)) {
            this.currentLent[bookName] = personName;
            return `Book ${bookName} has been lent to ${personName}.`;
        }
        return `The book ${bookName} has already been lent.`;
    },
    listLentBooks: function () {
        return this.currentLent;
    }
};

console.log(library.addBook("a"));
console.log(library.addBook("b"));
console.log(library.addBook("c"));
console.log(library.addBook("d"));
console.log(library.addBook("e"));
console.log(library.addBook("f"));

console.log(library.lendBook("a", "David"));
console.log(library.lendBook("z", "John"));
console.log(library.lendBook("b", "John"));

console.log(library.listLentBooks());
