// # Task 2:

// **Instructions:**

// 1. Create three arrays: arr1, arr2, and nestedArray with the following elements:

// 2. Concatenate arr1 and arr2 into a new array called combinedArray.

// 3. Use the copyWithin method to copy the first two elements of combinedArray to the positions starting from index 4.

// 4. Use the fill method to replace elements from index 2 to 4 with the number 0.

// 5. Remove the last element from combinedArray using the pop method.

// 6. Remove the first element from combinedArray using the shift method.

// 7. Add the elements 10 and 20 to the beginning of combinedArray using the unshift method.

// 8. Use the splice method to remove the elements at indices 2 and 3, and replace them with 30 and 40.

// 9. Use the slice method to create a new array slicedArray that contains the last three elements of combinedArray.

// 10. Use the join method to create a string from slicedArray, with elements separated by a hyphen -.

// 11. Use the flat method to flatten nestedArray into a single-level array and store it in flatArray.

// 12. Check if the element 9 is included in flatArray using the includes method.

// 13. Find the index of the element 10 in flatArray using the indexOf method.

// 14. Find the last index of the element 9 in flatArray using the lastIndexOf method.

// 15. Add the element 13 to the end of flatArray using the push method.

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let nestedArray = [7, 8, [9, 10, 11],12, [13, 14, 15],16, 17, 18];


let combinedArray = arr1.concat(arr2);

combinedArray.copyWithin(4, 0, 2);

combinedArray.fill(0, 2, 4);

combinedArray.pop();

combinedArray.shift();

combinedArray.unshift(10, 20);

combinedArray.splice(2, 2, 30, 40);
let slicedArray = combinedArray.slice(-3);

let slicedString = slicedArray.join('-');

let flatArray = nestedArray.flat();
console.log(flatArray.includes(9));

console.log(flatArray.indexOf(10));
console.log(flatArray.lastIndexOf(9));

flatArray.push(13);

console.log(flatArray);
console.log(slicedString);


 