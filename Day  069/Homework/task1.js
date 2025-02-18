
//1
const fruits = ['apple', 'banana', 'orange', 'grape'];
console.log(`The number of fruits is: ${fruits.length}`); 

//Array to string
//1

const mixedArray = [1, 'text', true, null];
const mixedString = mixedArray.toString();


//Array at
//1
const fruits2 = ['apple', 'banana', 'orange', 'grape'];



////Array join
//1
const fruits3= ['apple', 'banana', 'orange'];
const fruitString1 = fruits.join();

//arry pop
//1
const fruits4 = ['apple', 'banana', 'orange'];
const lastFruit = fruits.pop();


//arry push
//1
const fruits5 = ['apple', 'banana'];
fruits.push('orange');



//Array shift
//1
const fruits6 = ['apple', 'banana', 'orange'];
const firstFruit = fruits.shift();

//Array unshift
//1
const fruits7 = ['banana', 'orange'];
fruits.unshift('apple');

//arry delete
//1
const fruits8 = ['apple', 'banana', 'orange'];
delete fruits[1];

//Array concat
//1
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = array1.concat(array2);


//index of 
//1
const fruits11 = ['apple', 'banana', 'orange'];
const index = fruits.indexOf('banana');


// last index
//1
const fruits99 = ['apple', 'banana', 'orange', 'banana'];
const index5 = fruits.lastIndexOf('banana');


//includes
//1
const fruits65 = ['apple', 'banana', 'orange'];
const hasBanana = fruits.includes('banana');

//sort
//1
const fruits345 = ['banana', 'apple', 'orange'];
fruits.sort();

//revers
//1
const numbers87 = [1, 2, 3, 4, 5];
numbers.reverse();
