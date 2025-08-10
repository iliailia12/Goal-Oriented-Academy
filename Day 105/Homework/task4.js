// # 4. Task: Working with Arrays and Objects in JavaScript

//  - **Description**:
//         - You will work with arrays and objects, applying various array methods to manipulate data. Follow the steps
//          carefully to achieve the expected results.


// Initial Data:

// let people = [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' },
//   { id: 3, name: 'Charlie' },
// ];

// let morePeople = [
//   { id: 4, name: 'David' },
//   { id: 5, name: 'Eve' },
// ];



// **Steps**:
// 1. Concatenate Arrays:
//        - Merge people and morePeople into a new array called allPeople using the concat method.

// 2. Copy Elements Within an Array:
//         -   Copy the first two elements of allPeople into the last two positions using the copyWithin method.

// 3. Fill Part of an Array with a New Value:
//        - Replace the first two elements of allPeople with { id: 0, name: 'Unknown' } using the fill method.

// 4. Remove the Last Element:
//        - Remove the last element from allPeople using the pop method and store it in a variable called removedPerson.

// 5. Remove the First Element:
//        - Remove the first element from allPeople using the shift method and store it in a variable called firstRemovedPerson.

// 6, Add Elements to the Beginning:
//            - Add { id: 6, name: 'Frank' } and { id: 7, name: 'Grace' } to the beginning of allPeople using the unshift method.

// 7. Join Array into a String:
//        -  Convert allPeople into a string of names separated by , using the join method. Store the result in peopleString.

// 8. Extract a Subarray:
//        - Create a new array called somePeople that includes elements from index 1 to 3 using the slice method.


// 9. Modify the Array by Removing and Adding Elements:
//         - Remove two elements starting at index 2 from allPeople and replace them with { id: 10, name: 'Ivan' } and { id: 11, name: '
//             Judy' } using the splice method.

// Flatten a Nested Array:
// Given let nestedArray = [[1, 2], [3, 4], [[5, 6], [7, 8]]], create a new array called flatArray by flattening it to a single level using the flat method.

// Check if an Element Exists:
// Check if allPeople includes an object with { id: 5, name: 'Eve' } using the includes method (note: you may need to check by property, as objects are reference-based).

// Find the Index of an Element:
// Find the index of the person with id: 3 in allPeople using the indexOf method (hint: you might need to use findIndex instead).

// Find the Last Occurrence of an Element:
// Find the last index of an object with { id: 2, name: 'Bob' } in allPeople using the lastIndexOf method (hint: similar to indexOf, you may need an alternative approach).

// Add a New Element to the End:
// Add { id: 8, name: 'Hank' } to the end of flatArray using the push method.



// Add a New Element to the End:3

let people = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];

let morePeople = [
  { id: 4, name: 'David' },
  { id: 5, name: 'Eve' },
];

let allPeople = people.concat(morePeople);

let removedPerson = allPeople.pop();
let firstRemovedPerson = allPeople.shift();

allPeople.unshift({ id: 6, name: 'Frank' }, { id: 7, name: 'Grace' });

let peopleString = allPeople.map(person => person.name).join(', ');

let somePeople = allPeople.slice(1, 4);

console.log(somePeople);
console.log(peopleString);
console.log(allPeople);
