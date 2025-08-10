// Task 3: Doubling Array Elements
// You have an array of numbers. Use the forEach() method to iterate through the array and create a new array called doubledNumbers where each element is double the value of the corresponding element in the original array.



const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = [];
numbers.forEach(num => {
  doubledNumbers.push(num * 2);
});
console.log(doubledNumbers); 