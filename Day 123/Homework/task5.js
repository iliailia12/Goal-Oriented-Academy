// Task 5: Checking for Any Product Below a Certain Price
// You have an array of product objects, where each object has a name (string) and a price (number) property. Use the some() method to check if there is at least one product in the array with a price less than 20. Store the result (a boolean value) in a variable named hasAffordableProduct. 
// -


// Example Input:
const products = [
  { name: "Laptop", price: 999 },
  { name: "Smartphone", price: 499 },
  { name: "Headphones", price: 29 },
  { name: "Charger", price: 15 }
];

const hasAffordableProduct = products.some(product => product.price < 20);
console.log(hasAffordableProduct); 