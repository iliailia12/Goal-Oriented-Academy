// Level 143:,
//  Here are 10 simple tasks to help you practice the Promise constructor and working with promises in JavaScript:

// ---

// Create a basic Promise that resolves immediately,,
// ,
// Task: Use the Promise constructor to create a promise that resolves with the message "Hello, Promise!".,

// ---

// Create a Promise that rejects with an error,,
// ,
// Task: Write a promise that rejects with the message "Something went wrong!" and handle the rejection with .catch().,

// ---

// Use setTimeout to resolve a Promise after 2 seconds,,
// ,
// Task: Create a promise that waits for 2 seconds using setTimeout and then resolves with "2 seconds have passed".,

// ---

// Handle both resolve and reject outcomes,,
// ,
// Task: Write a promise that randomly either resolves with "Success!" or rejects with "Failed!" using Math.random(). Handle both outcomes with .then() and .catch().,

// ---

// Create a chain of promises using .then(),,
// ,
// Task: Create a promise that resolves with the number 5. Chain multiple .then() calls to multiply the number by 2 in each step.,

// ---

// Simulate a network request using Promises,,
// ,
// Task: Create a promise that resolves with "Data fetched!" after 1 second. Use setTimeout to simulate the delay.



const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("2 seconds have passed");
    }, 2000);
});
promise3.then(result => console.log("3:", result));


// 5.
const promise5 = new Promise((resolve, reject) => {
    resolve(5);
});
promise5
    .then(num => num * 2)
    .then(num => num * 2)
    .then(num => num * 2)
    .then(result => console.log("5:", result)); // 5 * 2 * 2 * 2 = 40


// 6. 
const promise6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched!");
    }, 1000);
});
promise6.then(result => console.log("6:", result));