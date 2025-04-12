// # Level 124:

// # 1. JavaScript Array Methods - map(), filter(), reduce(), reduceRight()

//    **Task Condition:**

// You are given an array of product objects, where each object has a name (string) and a price (number) property. Your task is to use the array methods map(), filter(), reduce(), and reduceRight() to analyze and transform this array based on the following criteria.


// 1. Use map() to create a new array called productNames containing only the names of all the products. Log the productNames array to the console.

// 2. Use filter() to create a new array called affordableProducts containing only the products with a price less than $100. Log the affordableProducts array to the console.

// 3. Use reduce() to calculate the total price of all products in the products array. Store the total in a variable called totalPrice. Log the totalPrice to the console.

// 4. Use reduceRight() to concatenate the names of all products into a single string, starting from the last product in the array and separating each name with " - ". Store the resulting string in a variable called productNamesReversed. Log the productNamesReversed string to the console.





const products = [{name : "telephone",price : 2500},
    {name : "televizor",price: 1500},
    {name: "planshet",price: 1000},
    {name:"sateni",price:7},
    { name: 'Headphones', price: 50 },
]

// 1.
const productNames = products.map(product => product.name);
console.log("Product Names:", productNames);

//2
const affordableProducts = products.filter(product => product.price < 100);
console.log("Affordable Products:", affordableProducts);

// 3. 
const totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log("Total Price:", totalPrice);

// 4. 
const productNamesReversed = products.reduceRight((acc, product) => acc + (acc ? " - " : "") + product.name, "");
console.log("Product Names Reversed:", productNamesReversed);


//  მეტის დაწერა ვერ მოვახერხე
