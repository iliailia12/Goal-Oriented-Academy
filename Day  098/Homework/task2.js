// Book Collection
// Create an Object Constructor named Book that takes three parameters: title, author, and year.

// Declare a method getSummary that returns a brief summary of the book (e.g., "Title by Author, published in Year").

// Create three book objects and call the getSummary method for each object.

function book(title, autor, year){
    this.title = title;
    this.autor=autor;
    this.year = year;
    this.getSummary = function(){
        console.log(`${this.title} by ${this.autor}, published in ${this.year}`);
    };
    }

    const book1 =new book("the alchemist", "paulo coelho", 1988);
const boock2 =new book ("the little prince", "antoine de saint-exupery", 1943);
book1.geySummary(() => {    
    console.log(book1.title);
    console.log(book1.autor);
    console.log(book1.year);
}

book2.getSummary(() => {
    console.log(book2.title);
    console.log(book2.autor);
    console.log(book2.year);
}


book3.getSummary(() => {
    console.log(book3.title);
    console.log(book3.autor);
    console.log(book3.year);
}

book4.getSummary(() => {
    console.log(book4.title);
    console.log(book4.autor);
    console.log(book4.year);
}

book5.getSummary(() => {
    console.log(book5.title);
    console.log(book5.autor);
    console.log(book5.year);
}


)
}   



book1.getSummary();
book2.getSummary();
book3.getSummary();
book4.getSummary();
book5.getSummary();