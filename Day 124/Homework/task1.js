// ask 1: Extracting and Formatting User Emails
// You are given an array of user objects, where each object has a name (string) and an email (string) property. Use the map() method to create a new array called formattedEmails. Each element in formattedEmails should be the user's email enclosed in angle brackets (e.g., user@example.com).
 
//1
const users = [
    { name: "Alice", email: "ragaca.@gmail.com" },
    { name: "Bob", email: "ragaca.@gmail.com" },
    { name: "Charlie", email: "ragaca.@gmail.com" }
];

const formattedEmails = users.map(user => `<${user.email}>`);

console.log(formattedEmails);


//2
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(num => num % 2 === 0);
const squaredEvens = evenNumbers.map(num => num ** 2);

console.log(squaredEvens);
 


// 3: 
const items = [
    { name: "Apple", price: 2, quantity: 5 },
    { name: "Banana", price: 1, quantity: 10 },
    { name: "Orange", price: 3, quantity: 7 }
];

const totalValue = items.reduce((total, item) => total + (item.price * item.quantity), 0);

console.log(totalValue);

//4
const words = ["world", "the", "to", "Welcome"];

const sentence = words.reduceRight((acc, word) => acc + " " + word, "").trim() + ".";

console.log(sentence);