const _ = require('lodash');

const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = _.uniq(numbers);
console.log('უნიკალური რიცხვები:', uniqueNumbers);

const text = 'hello world';
const capitalized = _.capitalize(text);
console.log('კაპიტალიზებული ტექსტი:', capitalized);
