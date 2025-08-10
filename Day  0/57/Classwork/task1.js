//1
const PI = 3.14;
console.log(PI); 

PI = 3.14159; 
//2
let age = 25; 
console.log(age); 

age = 30; 
console.log(age); 
//3
let x = 10;
let y = 20;

console.log('Before swap: x =', x, 'y =', y);


x = x + y;
y = x - y;
x = x - y;

console.log('After swap: x =', x, 'y =', y);

//4
const favoriteColor = 'Blue';
console.log(favoriteColor); 

favoriteColor = 'Green'; 

//5
let a = 10;
let b = 5;
let z = a - b ;
console.log('result is ', + z);

//6
let result = 2 ** 5;
console.log(result);

//7

let width = 5;  
let height = 10; 
let area = width * height;
console.log(" " + area);

//8
let p = 5; 
let q = 10; 
p++;
q--;
console.log("Updated value of p:", p);
console.log("Updated value of q:", q);

//9
let num1 = 5; 
let num2 = 10; 


console.log("num1 > num2:", num1 > num2);     
console.log("num1 < num2:", num1 < num2);     
console.log("num1 >= num2:", num1 >= num2);   
console.log("num1 <= num2:", num1 <= num2);   
console.log("num1 == num2:", num1 == num2);  
console.log("num1 === num2:", num1 === num2); 
console.log("num1 != num2:", num1 != num2);
console.log("num1 !== num2:", num1 !== num2); 

//10
let str = '10';
let num = 10;

let looseEquality = str == num; 
console.log("Using '==':", looseEquality); 

let strictEquality = str === num;
console.log("Using '===':", strictEquality); 

//11 ბოდიში ეს დავალება ვერ დავწერე
//12 ბოდიში ეს დავალება ვერ დავწერე
//13
const myNumber = 42;
const isNumber = typeof myNumber === 'number';
console.log("Is myNumber of type number?", isNumber);

//14 ბოდიში ეს დავალება ვერ დავწერე ვფიქრობ რომ ეს არ გვისწავლია 

//15
let string = "Hello, world!"; 
console.log("Length of the string:", str.length);

//16

let firstName = "John"; 
let lastName = "Doe";   

let fullName = firstName + " " + lastName;
console.log("Full name:", fullName);

//17 ბოდიში ეს დავალება ვერ დავწერე ვფიქრობ რომ ეს არ გვისწავლია 

//18

let nam = 8; 
let isEven = num % 2 === 0;
let isGreaterThanTen = nam > 10;

console.log("Number:", nam);
console.log("Is even:", isEven);
console.log("Is greater than 10:", isGreaterThanTen);

//19 ბოდიში ეს დავალება ვერ დავწერე ვფიქრობ რომ ეს არ გვისწავლია 

//20 ბოდიში ეს დავალება ვერ დავწერე ვფიქრობ რომ ეს არ გვისწავლია 
