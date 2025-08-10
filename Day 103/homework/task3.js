// Task 3: Working with Mixed Data Types
// Objective: Practice using array methods with arrays containing mixed data types.

// Instructions:

// Create an array called mixedArray with the following elements:

// Concatenate mixedArray with another array [true, false] into a new array called extendedArray.

// Use the copyWithin method to copy the elements 3 and 'four' to the start of extendedArray.

// Use the fill method to replace the elements 5, true, and false with the number 0.

// Remove the last element from extendedArray using the pop method.

// 6, Remove the first element from extendedArray using the shift method.

// Add the elements null and undefined to the beginning of extendedArray using the unshift method.
 

let mixedArray = [1, 2, 'three', 4, 5, true, false];

 
let extendedArray = mixedArray.concat([true, false]);
console.log(extendedArray);

extendedArray.copyWithin(3, 2, 4);