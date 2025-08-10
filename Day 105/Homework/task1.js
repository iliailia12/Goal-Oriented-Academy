// # Level 105:

// # Task 1 : JavaScript Array Methods Task: Comprehensive Array Manipulation
// **
// Objective: To practice using a variety of array methods: concat, copyWithin, fill, pop, shift, unshift, join, slice, splice, flat, includes, indexOf, and lastIndexOf.**

// **Instructions**:

// 1. Create three arrays: arr1, arr2, and nestedArray with the following elements:

// 2. Concatenate arr1 and arr2 into a new array called combinedArray.

// 3. Use the copyWithin method to copy the first three elements of combinedArray to the positions starting from index 5.

// 4.Use the fill method to replace elements from index 6 to the end with the number 0.

// 5. Remove the last element from combinedArray using the pop method.

// 6. Remove the first element from combinedArray using the shift method.

// 7. Add the elements 100 and 200 to the beginning of combinedArray using the unshift method.

// 8. Use the splice method to remove the elements at indices 2 and 3, and replace them with the elements [x, y, z].

// 9. Use the slice method to create a new array slicedArray that contains the last five elements of combinedArray.

// 10. Use the join method to create a string from slicedArray, with elements separated by a comma ,.

// 11. Use the flat method to flatten nestedArray into a single-level array and store it in flatArray.

// 12. Check if the element 8 is included in flatArray using the includes method.
 
// 13. Find the index of the element 9 in flatArray using the indexOf method.

// 14. Find the last index of the element 7 in flatArray using the lastIndexOf method.



let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let nestedArray = [7, 8, [9, 10, 11],
    [12, 13, 14], [15, 16, 17]];
    let combinedArray = arr1.concat(arr2);
    console.log(combinedArray);
    combinedArray.copyWithin(5, 0, 3);
    console.log(combinedArray);
    combinedArray.fill(0, 6, combinedArray.length);
    console.log(combinedArray);
    combinedArray.pop();
    console.log(combinedArray);
    combinedArray.shift();
    console.log(combinedArray);
    combinedArray.unshift(100, 200);
    console.log(combinedArray);
    combinedArray.splice(2, 2, x, y, z);
    console.log(combinedArray);
    let slicedArray = combinedArray.slice(combinedArray.length - 5);
    console.log(slicedArray);
    let slicedString = slicedArray.join(", ");
    console.log(slicedString);
    let flatArray = nestedArray.flat();
    console.log(flatArray);
    console.log(flatArray.includes(8));
    console.log(flatArray.indexOf(9));
    console.log(flatArray.lastIndexOf(7));
 