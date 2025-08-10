// # Task 3:

// 1. Create an initial array
//       - Declare an array:

// let numbers = [10, 20, 30, 40, 50];

// 2. Use .concat()
//       - Create a second array: [60, 70, 80]
//       - Concatenate it with numbers and store the result in a new variable.

// 3. Use .copyWithin()
//        - Modify numbers so that the second and third elements are copied to the last two positions.

// 4. Use .fill()
//        - Replace the first three elements of numbers with 100.

// 5. Use .pop()
//      -   Remove the last element from numbers and store it in a variable.

// 6. Use .shift()
//     - Remove the first element from numbers and store it in a variable.

// 7. Use .unshift()
//      - Add 5 and 15 at the beginning of numbers.

// 8. Use .join()
//      - Convert numbers into a string separated by -.

// 9. Use .slice()
//     - Extract elements from index 1 to 3 and store them in a new array.

// 10. Use .splice()
//      -  Remove the second and third elements from numbers and replace them with [200, 300].

// 11. Use .flat()
//     - Given let nestedArr = [1, [2, 3], [4, [5, 6]]], flatten it to a single-level array.

// 12. Use .includes()
//     - Check if numbers contains the number 50.

// 13. Use .indexOf()
//     - Find the index of 30 in numbers.

// 14. Use .lastIndexOf()
//    -   Find the last occurrence index of 20 in numbers.

// 15. Use .push()
//    -   Add 90 and 100 to the end of numbers.


let numbers = [10, 20, 30, 40, 50];

let secondArray = [60, 70, 80];

let modifiedNumbers = numbers.concat(secondArray);

modifiedNumbers = numbers.contact (secondArray);

modifiedNumbers.copyWithin(2, 0, 3);

modifiedNumbers.fill(100, 0, 3);

let removedLastElement = modifiedNumbers.pop();

let removedFirstElement = modifiedNumbers.shift();

modifiedNumbers.unshift(5, 15);

let joinedNumbers = modifiedNumbers.join("-");
let slicedNumbers = modifiedNumbers.slice(1, 3)

modifiedNumbers.splice(1, 2, [200, 300]);
 let nestedArr = [1, [2, 3], [4, [5, 6]]];
 let fullyFlatArray = nestedArr.flat();

let containsNumber = fullyFlatArray.includes(50);

let indexOfNumber = fullyFlatArray.indexOf(30);

let lastIndexOfNumber = fullyFlatArray.lastIndexOf(20);

modifiedNumbers.push(90, 100);
 console.log(modifiedNumbers);
 console.log(fullyFlatArray);
 console.log(containsNumber);
 console.log(indexOfNumber);
 console.log(lastIndexOfNumber);
 console.log(slicedNumbers);
 console.log(joinedNumbers);
 console.log(removedLastElement);
 console.log(removedFirstElement);
console.log(nestedArr);