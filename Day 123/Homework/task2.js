// Task 2: Checking for Existence of a Specific String
// You have an array of strings. Use the some() method to check if the array contains at least one string that has a length greater than 5 characters. Store the result (a boolean value) in a variable named hasLongString.


const strings = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape"];
const hasLongString = strings.some(str => str.length > 5);
console.log(hasLongString);
