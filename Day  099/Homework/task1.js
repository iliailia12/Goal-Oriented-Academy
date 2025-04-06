// Basic Object Initialization
// Task:
// Create an object named student with the following properties:
// name (string)
// age (number)
// grade (string)
// isEnrolled (boolean)
// Add a method called getInfo() that returns a formatted string with the student's details.
// Update the student's grade to a new value and log the updated object.


let student = {
    name: "ilia kviciani",
    age :14,
    grade :"100",
    isEnrolled : true,
    getInfo: function(){
        return `name: ${this.name} age: ${this.age} grade: ${this.grade} isEnrolled: ${this.isEnrolled}`;
    }
     }
}



// Object Constructor Function
// Task:
// Create a constructor function called Car that initializes the following properties:
// brand
// model
// year
// Add a method getCarInfo() to the constructor that returns the car’s full details.
// Create three car objects using the Car constructor and display their information using getCarInfo().



function Car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.getCarInfo = function(){
        return `brand: ${this.brand} model: ${this.model} year: ${this.year}`;
    }
}
let car1 = new Car("Toyota", "Corolla", 2015);
let car2 = new Car("Honda", "Civic", 2020);
let car3 = new Car("Ford", "Mustang", 2018);

console.log(car1.getCarInfo());
console.log(car2.getCarInfo());
console.log(car3.getCarInfo());




// Nested Objects
// Task:
// Create an object named library with the following properties:
// name (string)
// location (string)
// books (object that contains properties):
// title (string)
// author (string)
// year (number)
// Write a method listBooks() that logs each books detail information - example: 'this book name is ..., you can find this book at ....' and e.t.c




let library = {
    name: "Library",
    location: "Tbilisi",
    books: {
        title: "Harry Potter",
        author: "J.K. Rowling",
        year: 1997
        },
    listBooks: function(){
        return `this book name is ${this.books.title}, you can find this book at ${this.location}`;
    }
}
console.log(library.listBooks());






// Product Inventory Display
// Task:
// Create a simple Product Inventory System using only objects and conditions. No arrays or loops should be used. The task includes the following:

// Create 3 product objects with the following properties:

     
// productName (string)
// price (number)
// quantity (number)
// isAvailable (boolean)

// Create an inventory object that contains these 3 product objects (product1, product2, product3) as nested properties.

// Write a method inside the inventory object called displayAvailableProducts(). This method will:

     
// Check each product and display only those that are available and have a positive quantity.
// The method should print out the product's name, price, and quantity for each available product.
// Condition: Only display a product if it is marked as available and has a quantity greater than 0.

// If a product is unavailable or out of stock (i.e., quantity <= 0 or isAvailable is false), do not display it.


let product1 =  {
    productName: "Iphone",  
    price: 1000,
    quantity: 5,
    isAvailable: true
}

let product2 =  {
    productName: "Samsung",
    price: 800,
    quantity: 0,
    isAvailable: false
}
let product3 =  {
    productName: "Macbook",
    price: 1500,
    quantity: 10,
    isAvailable: false
}


let inventory = {
    product1,
    product2,
    product3,
    displayAvailableProducts: function(){
        for(let key in this){
            if(this[key].isAvailable && this[key].quantity > 0){
                console.log(`Product: ${this[key].productName}, Price: ${this[key].price}, Quantity: ${this[key].quantity}`);
            }
        }
    }
}

inventory.displayAvailableProducts();
