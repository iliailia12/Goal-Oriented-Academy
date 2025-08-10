// Task 2: Array of Objects
// Objective: Manipulate arrays that contain objects.

// Instructions:

// Create two arrays, people and places, with the following objects:

// Concatenate people and places into a new array called mergedArray.

// Use the copyWithin method to copy the first two elements of mergedArray to the positions starting from index 2.

// Use the fill method to replace the last two elements of mergedArray with the object {city: 'New York'}.

// 5.Remove the last element from mergedArray using the pop method.

// Remove the first element from mergedArray using the shift method.

// Add the objects {name: 'Charlie'} and {name: 'David'} to the beginning of mergedArray using the unshift method.


let people = [
    { name: 'John', age: 25 },            
    { name: 'Jane', age: 22 },            
    { name: 'Jim', age: 30 },            
    { name: 'Jill', age: 35 }
];
let places =  [ { city: 'San Francisco' }, { city: 'Los Angeles' }, { city: 'San Diego' }, { city: 'Sacramento' } ];

let mergedArray = people.concat(places);

mergedArray.copyWithin(2, 0, 2 + 2);
console.log(mergedArray);

mergedArray.fill({ city: 'New York' }, mergedArray.length - 2, mergedArray.length);
console.log(mergedArray);

mergedArray.pop();
console.log(mergedArray);

mergedArray.shift();

console.log(mergedArray);

mergedArray.unshift({ name: 'Charlie' }, { name: 'David' });
console.log(mergedArray);
