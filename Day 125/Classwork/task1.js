// JavaScript Array Methods - find(), reverse(), sort(), Array.from(), Array.isArray()
// Task Condition:

// You are given a mixed array containing numbers and strings. Your task is to use the array methods find(), reverse(), sort(), Array.from()
// , and Array.isArray() to analyze and manipulate this data based on the following criteria.


// Mixed Array Example:
// const mixedData = [10, "apple", 5, "banana", 20, "cherry"];



// Criteria:

// Use find() to locate the first string in the mixedData array. Store the found string in a variable called firstString. Log the firstString to the console.

// Use Array.isArray() to check if a variable named fruits (initialized as ["mango", "orange"]) is an array. Store the boolean result in a variable called isFruitsArray. Log the i
// sFruitsArray to the console.

// Use Array.from() to create a new array called stringLengths containing the length of each string in the mixedData array. Filter out the numbers before applying Array.from().
//  Log the stringLengths array to the console.

// Create a copy of the mixedData array using the spread syntax (...). Then, use the reverse() method on this copy to reverse the order of its elements. Store the reversed 
// array in a variable called reversedData. Log the 
// reversedData array to the console.

// Create a new array containing only the numbers from the original mixedData array. Use the sort() method to sort these numbers in ascending order. Store the sorted 
// numbers in a variable called sortedNumbers. Log the sortedNumbers array to the console.

 


 
const mixedData = [10, "apple", 5, "banana", 20, "cherry"];

// 1.  
const firstString = mixedData.find(item => typeof item === "string");
console.log("First string:", firstString);

// 2. 
const fruits = ["mango", "orange"];
const isFruitsArray = Array.isArray(fruits);
console.log("Is fruits an array:", isFruitsArray);

// 3.  
const stringLengths = Array.from(
  mixedData.filter(item => typeof item === "string"),
  str => str.length
);
console.log("String lengths:", stringLengths);

// 4.  
const reversedData = [...mixedData].reverse();
console.log("Reversed data:", reversedData);

// 5.  
const sortedNumbers = mixedData
  .filter(item => typeof item === "number")
  .sort((a, b) => a - b);
console.log("Sorted numbers:", sortedNumbers);

 