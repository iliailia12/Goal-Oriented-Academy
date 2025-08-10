// Task 4: Checking for All Users Above a Certain Age
// You have an array of user objects, where each object has a name (string) and an age (number) property. Use the every() method to check if all users in the array are 18 years or older. Store the result (a boolean value) in a variable named allAdults.


const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 17 },
  { name: "David", age: 22 }
];  
const allAdults = users.every(user => user.age >= 18);
console.log(allAdults); 