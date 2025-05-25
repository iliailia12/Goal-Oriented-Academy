// Create a chain of promises using .then(),,,
// Task: Create a promise that resolves with the number 5. Chain multiple .then() 
// calls to multiply the number by 2 in each step.,
 


 
const promise = Promise.resolve(5);

promise
  .then(num => num * 2) 
  .then(num => num * 2)
  .then(num => num * 2) 