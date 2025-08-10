// JavaScript Array Methods Task
// Objective: To practice using the array methods: concat, copyWithin, fill, pop, shift, and unshift.

// Instructions:

// Create two arrays, array1 and array2, with the following elements:

// Concatenate array1 and array2 into a new array called concatArray.

// Use the copyWithin method to copy the first two elements of concatArray to the end of the array.

// Use the fill method to replace the last three elements of concatArray with the number 0.

// Remove the last element from concatArray using the pop method and store it in a variable lastElement.

// Remove the first element from concatArray using the shift method and store it in a variable firstElement.

// Add the elements 10 and 20 to the beginning of concatArray using the unshift method.




let array1 = [1,2,3,4, 5,6,7,8,9,10];
let array2 = [11, 12, 13, 14, 15,16,17,18,19,20];

let concatArray = array1.concat(array2);
console.log(concatArray);

concatArray.copyWithin(5, 0, 2);
console.log(concatArray);

concatArray.fill(0, 7, 10);
console.log(concatAray);