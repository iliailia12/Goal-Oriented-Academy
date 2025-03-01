// Task 5: Library Management System
// Objective: To manage a library system using arrays and objects, and to practice various array methods including push.

// Instructions:

// Create an array called library with the following initial book objects:

// Write a function called addBook that takes a book object as input and adds it to the library array using the push method. The function should return the updated library array.

// Write a function called removeLastBook that uses the pop method to remove the last book from the library array and returns the updated library array.

// Write a function called updateBookCopies that takes a book title and a number of copies as input, and uses the splice method to update the copies of the specified book. The function should return the updated library array.

// Write a function called listBooks that uses the join method to create a string of all book titles separated by commas and returns the string.

// Write a function called extractBooks that uses the slice method to create a new array containing a portion of the library array (e.g., the first two books) and returns the new array.

// Write a function called modifyBooks that uses the copyWithin method to copy the first book in the library array to the last position and returns the updated library array.

// Write a function called resetCopies that uses the fill method to set the copies of all books in the library array to a specified number and returns the updated library array.

// Write a function called removeFirstBook that uses the shift method to remove the first book from the library array and returns the updated library array.

// 10 . Write a function called addFirstBook that takes a book object as input and uses the unshift method to add it to the beginning of the library array. The function should return the updated library array.




let library = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        copies: 10
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        copies: 5
    },
    {
        title: "1984",
        author: "George Orwell",
        copies: 15
    }
];



function addBook(book) {
    library.push(book);
    return library;
}

function removeLastBook() {
    library.pop();
    return library;
    }

function updateBookCopies(title, copies) {
    for (let i = 0; i < library.length; i++) {
        if (library[i].title === title) {
            library[i].copies = copies;
        }
    }
    return library;
}
