// Create a Map of Countries and Capitals.
// Add at least 5 countries and their capitals.
// Print all entries.
// Add and Remove Items.
// Start with a Map of 3 fruits and their colors.
// Add two more fruits.
// Remove one fruit.
// Print the final Map.
// Check if a Key Exists.
// Use has() to check if a certain item exists.
// Print "Yes" or "No" depending on the result.
// Loop through a Map.
// Loop through both keys and values.
// Print in format: "The capital of X is Y".
// 5 Convert a Map to an Array and back.
// Use Array.from() to convert the Map to an array.
// Write a function that returns a new Map, sorted alphabetically by its keys.
// Count Word Occurrences.
// Given a sentence, count how many times each word appears using a Map.
// For example: "this is a test and this is fun" → { this: 2, is: 2, a: 1, test: 1, and: 1, fun: 1 }




 //1
const countries = new Map([
    ["USA", "Washington, D.C."],
    ["France", "Paris"],
    ["Japan", "Tokyo"],
    ["India", "New Delhi"],
    ["Germany", "Berlin"]
]);

 
console.log("Countries and Capitals:");
for (let [country, capital] of countries) {
    console.log(`${country}: ${capital}`);
}

// 2
const fruits = new Map([
    ["Apple", "Red"],
    ["Banana", "Yellow"],
    ["Grapes", "Purple"]
]);

 
fruits.set("Orange", "Orange");
fruits.set("Lemon", "Yellow");
 
fruits.delete("Banana");
 

console.log("\nFruits and Colors:");
for (let [fruit, color] of fruits) {
    console.log(`${fruit}: ${color}`);
}

// 3
console.log("\nDoes the map contain 'Apple'? " + (fruits.has("Apple") ? "Yes" : "No"));

// 4
console.log("\nThe capital of each country:");
for (let [country, capital] of countries) {
    console.log(`The capital of ${country} is ${capital}.`);
}

 