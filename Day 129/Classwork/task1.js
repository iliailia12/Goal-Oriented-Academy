// Task:
// Create a function called sumNumbers that takes any number of arguments and returns the sum of all the numbers.

// Requirements:

// The function should use the rest operator to accept a variable number of arguments.

// The function should calculate the sum of all the numbers passed to it.

// The function should return the final sum.

// If no arguments are passed, the function should return 0.


function sumNumbers(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumNumbers(1, 2, 3, 4)); 
 