// ask 1: Checking for All Even Numbers
// You are given an array of numbers. Use the every() method to determine if all the numbers in the array are even. Store the result (a boolean value) in a variable named allEven.



const numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven);