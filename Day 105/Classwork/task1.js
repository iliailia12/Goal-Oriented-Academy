// JavaScript Array Methods Task: Flattening and Searching Arrays

// Objective: To practice using the flat, includes, indexOf, and lastIndexOf array methods.

// Instructions:

// Create a nested array called nestedArray with the following elements:

// Use the flat method to create a new array flatArray that flattens nestedArray by one level.

// Use the flat method again to fully flatten nestedArray into a single-level array and store it in fullyFlatArray.

// Write a function called checkElement that takes an array and a value as input and returns true if the value is found 
// in the array using the includes method, and false otherwise.

// Write a function called findIndexOfElement that takes an array and a value as input and returns the index of the value in
//  the array using the indexOf method. If the value is not found, it should return -1.

// Write a function called findLastIndexOfElement that takes an array and a value as input and returns 
// the last index of the value in the array using the lastIndexOf method. If the value is not found, it should return -1.





let nestedArray = [
    [1, 2],
    [3, 4],
    [5, 6]
];

let flatArray = nestedArray.flat();



console.log(flatArray); 
console.log(fullyFlatArray);

function checkElement(value) {
    return arr.includes(value);
}

function findIndexOfElement(arr, value) {
    return arr.indexOf(value);
}

function findLastIndexOfElement(arr, value) {
    return arr.lastIndexOf(value);