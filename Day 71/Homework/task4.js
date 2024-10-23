//3) თითეულ ნასწავლ მეთოდზე გააკეთეთ 10-10 მაგალითი
//// Math.PI - returns math pi constant
//1
const radius = 5;
const area = Math.PI * Math.pow(radius, 2);
//2
const circumference = 2 * Math.PI * radius;
//3
const volume = (4/3) * Math.PI * Math.pow(radius, 3);
//4
const surfaceArea = 4 * Math.PI * Math.pow(radius, 2);
//5
const degrees = 180;
const radians = degrees * (Math.PI / 180);
//6
const angle = Math.PI / 2; 
const sineValue = Math.sin(angle);;
//7
const cosineValue = Math.cos(angle);
//8
const tangentValue = Math.tan(angle);
//9
const angleInRadians = Math.PI / 3; 
const sectorArea = 0.5 * Math.pow(radius, 2) * angleInRadians;
//10
const diameter = radius * 2;
const formulaResult = Math.PI * diameter; 

//// Math.E - returns euler number constant
//1
console.log(Math.E); 
//2
const power1 = Math.pow(Math.E, 1);
//3
const power2 = Math.pow(Math.E, 2);
//4
const power3 = Math.pow(Math.E, 3);
//5
const powerHalf = Math.pow(Math.E, 0.5);
//6
const lnE = Math.log(Math.E);
//7
const logValue = Math.log(10);
//8
const compoundInterest = Math.E * 1000; 
//9
const expValue = Math.exp(1); 
//10
const a = 5;
const b = Math.log(a) / Math.log(Math.E);
//// Math.floor - rounds down float number to integer
//1
console.log(Math.floor(4.7)); 
//2
console.log(Math.floor(-4.7)); 
//3
console.log(Math.floor(2.1)); 
//4
console.log(Math.floor(10)); 
//5
console.log(Math.floor(123.456)); 
//6
console.log(Math.floor(parseFloat("7.9"))); 
//7
console.log(Math.floor(5.99999)); 
//8
const numbers = [3.9, 5.5, -2.3, 0.8];
const flooredNumbers = numbers.map(num => Math.floor(num));
console.log(flooredNumbers); 
//9
console.log(Math.floor(6.999)); 
//10
console.log(Math.floor(6.7));
//// Math.trunc - removes float part from number
//1
console.log(Math.trunc(4.7)); 
//2
console.log(Math.trunc(-4.7)); 
//3
console.log(Math.trunc(2.1)); 
//4
console.log(Math.trunc(10)); 
//5
console.log(Math.trunc(123.456)); 
//6
console.log(Math.trunc(parseFloat("7.9"))); 
//7
console.log(Math.trunc(5.99999)); 
//8
console.log(Math.trunc(-7.1)); 
//9
console.log(Math.trunc(7.1)); 
//10
console.log(Math.trunc(5.55)); 
// Math.round - rounds float number to closest integer
//1
console.log(Math.round(4.7)); 
//2
console.log(Math.round(4.4)); 
//3
console.log(Math.round(-4.5)); 
//4
console.log(Math.round(2.1)); 
//5
console.log(Math.round(10)); 
//6
console.log(Math.round(123.456)); 
//7
console.log(Math.round(7.9)); 
//8
console.log(Math.round(-7.1)); 
//9
console.log(Math.round(5.99999)); 
//10
console.log(Math.round(6.5)); 
//// Math.ceil - rounds up float number
//10
console.log(Math.ceil(4.1)); 
//1
console.log(Math.ceil(4.9)); 
//2
consle.log(Math.ceil(-4.1)); 
//3
console.log(Math.ceil(-4.9)); 
//4
console.log(Math.ceil(2.0)); 
//5
console.log(Math.ceil(10)); 
//6
console.log(Math.ceil(123.456)); 
//7
console.log(Math.ceil(7.1)); 
//8
console.log(Math.ceil(5.00001)); 
//9
console.log(Math.ceil(6.5)); 
//// Math.pow - takes 2 values, first number to power and second the power,
// then powers number to certain value
//1
console.log(Math.pow(2, 3));
//2
console.log(Math.pow(3, 2)); 
//3
console.log(Math.pow(5, 0)); 
//4
console.log(Math.pow(10, 1)); 
//5
console.log(Math.pow(4, 0.5)); 
//6
console.log(Math.pow(2, -2)); 
//7
console.log(Math.pow(7, 3)); 
//8
console.log(Math.pow(7, 7)); 
//9
console.log(Math.pow(7, 5)); 
//10
console.log(Math.pow(3,9)); 
//// Math.random - generates random number between 0 and 1
console.log(Math.random());
//1
console.log(Math.floor(Math.random() * 10));
//2
console.log(Math.floor(Math.random() * 100) + 1);
//3
console.log(Math.floor(Math.random() * (50 - 10 + 1)) + 10);
//4
console.log(Math.random().toFixed(2));
//5
const randomNumbers = Array.from({ length: 5 }, () => Math.random());
console.log(randomNumbers);
//6
let lastRandom = Math.random();
console.log(lastRandom);
//7
console.log(Math.floor(Math.random() * 100));
//8
console.log((Math.random() + 0.5).toFixed(2));
//9
console.log((Math.random() + 0.8).toFixed(4));
//10
console.log((Math.random() + 0.3).toFixed(9));
//// Math.abs - returns abosoulte postive part of number
//1
console.log(Math.abs(-5)); 
//2
console.log(Math.abs(10)); 
//3
console.log(Math.abs(-2)); 
//4
console.log(Math.abs(4)); 
//5
console.log(Math.abs(9)); 
//6
console.log(Math.abs(2)); 
//7
console.log(Math.abs(1)); 
//8
console.log(Math.abs(6)); 
//9
console.log(Math.abs(5)); 
//10
console.log(Math.abs(8)); 
//// Math.sqrt - takes square root from number
//1
console.log(Math.sqrt(25)); 
//2
console.log(Math.sqrt(-9)); 
//3
console.log(Math.sqrt(0)); 
//4
console.log(Math.sqrt(8)); 
//5
console.log(Math.sqrt(5)); 
//6
console.log(Math.sqrt(19)); 
//7
console.log(Math.sqrt(99)); 
//8
console.log(Math.sqrt(999)); 
//9
console.log(Math.sqrt(864)); 
//10
console.log(Math.sqrt(43)); 
//// Math.max - returns highest value number 
//1
console.log(Math.max(5, 10)); 
//2
console.log(Math.max(1, 2, 3, 4, 5));
//4
console.log(Math.max(-1, -5, -3)); 
//5
console.log(Math.max(0, 3, 2)); 
//6
console.log(Math.max(-10, 10, -5)); 
//7
console.log(Math.max(10, 10, 5)); 
//8
console.log(Math.max( 10, -5)); 
//9
console.log(Math.max(-10, -5)); 
//10
console.log(Math.max(-10, 10,)); 
//// Math.min - returns lowest value number
//10
console.log(Math.min(5, 10)); 
//1
console.log(Math.min(5, 108)); 
//2
console.log(Math.min(5, 106)); 
//3
console.log(Math.min(5, 0)); 
//4
console.log(Math.min( 10)); 
//5
console.log(Math.min(5, 4)); 
//6
console.log(Math.min(5, 16)); 
//7
console.log(Math.min(5, 17)); 
//8
console.log(Math.min(5, 1)); 
//9
console.log(Math.min(5, 9)); 