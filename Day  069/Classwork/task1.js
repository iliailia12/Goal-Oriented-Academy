//1
const fruits = ['apple', 'banana', 'orange', 'grape'];
console.log(`The number of fruits is: ${fruits.length}`); 

//2
const emptyArray = [];

console.log(`The length of the empty array is: ${emptyArray.length}`); 

//3
const numbers = [1, 2, 3];
numbers.push(4);
numbers.pop();

//Array to string
//1

const mixedArray = [1, 'text', true, null];

const mixedString = mixedArray.toString();
console.log(mixedString); 

//2
const emptyArray1 = [];
const emptyString = emptyArray.toString();

//3
const fruits1 = ['apple', 'banana', 'orange'];

const fruitString = fruits.toString();
console.log(fruitString); 
//Array at
//1
const fruits2 = ['apple', 'banana', 'orange', 'grape'];

//2
const colors = ['red', 'green', 'blue', 'yellow'];

//3
const numbers1 = [10, 20, 30];


////Array join
//1
const fruits3= ['apple', 'banana', 'orange'];
const fruitString1 = fruits.join();

//2
const colors1 = ['red', 'green', 'blue'];
const colorString = colors.join(' რომელ რიცხა ციფრი უნდა ჩაწერო');

//3
const emptyArray3 = [];
const emptyString2 = emptyArray.join();
//arry pop
//1
const fruits4 = ['apple', 'banana', 'orange'];
const lastFruit = fruits.pop();

//2
const number2 = [];
const removedNumber = numbers.pop();

//3
const stack = [1, 2, 3, 4];

//arry push
//1
const fruits5 = ['apple', 'banana'];
fruits.push('orange');

//2
const numbers2 = [1, 2, 3];
numbers.push(4, 5, 6);
//3

const colors2= ['red', 'green'];
const newLength = colors.push('blue');

//Array shift
//1
const fruits6 = ['apple', 'banana', 'orange'];
const firstFruit = fruits.shift();
//2
const numbers3 = [];
const removedNumber1 = numbers.shift();
//3
const queue = [1, 2, 3, 4];
//Array unshift
//1
const fruits7 = ['banana', 'orange'];
fruits.unshift('apple');
//2
const numbers4 = [3, 4, 5];
numbers.unshift(1, 2);
//3
const colors3 = ['green', 'blue'];
const newLength1= colors.unshift('red');

//arry delete
//1
const fruits8 = ['apple', 'banana', 'orange'];
delete fruits[1];

//2
const numbers8 = [1, 2, 3];
delete numbers[1];
console.log(numbers);
//3
const colors8 = ['red', 'green', 'blue'];
delete colors[0];

//Array concat
//1
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = array1.concat(array2);

//2
const fruits9 = ['apple', 'banana'];
const vegetables = ['carrot', 'tomato'];
const grains = ['rice', 'wheat'];
const food = fruits.concat(vegetables, grains);

//3
const numbers0 = [1, 2, 3];
const mixedArray9= numbers.concat('hello', true);

//index of 
//1
const fruits11 = ['apple', 'banana', 'orange'];
const index = fruits.indexOf('banana');

//2
const numbers11 = [1, 2, 3, 4];
const index11 = numbers.indexOf(5);
//3
const colors6 = ['red', 'green', 'blue', 'green'];
const index8 = colors.indexOf('green', 2);

// last index
//1
const fruits99 = ['apple', 'banana', 'orange', 'banana'];
const index5 = fruits.lastIndexOf('banana');

//2
const numbers6 = [1, 2, 3, 4];
const index6 = numbers.lastIndexOf(5);

//3
const colors88 = ['red', 'green', 'blue', 'green'];
const index77 = colors.lastIndexOf('green', 2);

//includes
//1
const fruits65 = ['apple', 'banana', 'orange'];
const hasBanana = fruits.includes('banana');
//2
const numbers07 = [1, 2, 3, 4];ში
const hasFive = numbers.includes(5);
//3
const colors0= ['red', 'green', 'blue', 'green'];
const hasGreen = colors.includes('green', 2);

//sort
//1
const fruits345 = ['banana', 'apple', 'orange'];
fruits.sort();
//2
const numbers65 = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
//3
const mixedCase = ['banana', 'Apple', 'orange', 'apple'];
mixedCase.sort();
//revers
//1
const numbers87 = [1, 2, 3, 4, 5];
numbers.reverse();
//2
const items = [{ name: 'apple' }, { name: 'banana' }, { name: 'orange' }];
items.reverse();

//3
const letters = ['a', 'b', 'c', 'd'];
letters.reverse();