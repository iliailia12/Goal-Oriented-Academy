// გააკეთეთ Level 143 - ის საშინაო დავალებები.,
// ,
// Task: Use the Promise constructor to create a promise that resolves with the message "Hello, Promise!". Use .then() to log the message.,
// ,
// Task: Write a promise that rejects with the message "Something went wrong!". Handle the rejection using .catch() to log the error message.,
// ,
// Task: Create a promise that waits for 2 seconds using setTimeout, then resolves with "2 seconds have passed". Log the result using .then().,
// ,
// Task:,
// ,
// Create a promise that checks if a product is in stock (isInStock = true/false).,
// If in stock, resolve with "Product is ready to ship!",

 
// If not, reject with "Out of stock.",
// Handle the result with .then(), .catch(), and use .finally() to log "Checked product availability."






//1
const helloPromise = new Promise((resolve) => {
  resolve("Hello, Promise!");
});
helloPromise.then(message => console.log(message));



//2

const errorPromise = new Promise((_, reject) => {
  reject("Something went wrong!");
});
errorPromise.catch(error => console.log(error));


//3
const waitPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("2 seconds have passed");
  }, 2000);
});
waitPromise.then(result => console.log(result));



//4 დარჩა