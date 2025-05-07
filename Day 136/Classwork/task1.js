// შექმენით generaly Map, სადაც შეიტანთ 5 სხვადასხვა მონაცემთა ტიპის მქონე თვისებას(თვისებები უნდა შეიტანოთ Set() ის გამოყენებით),  შეტანის შემდეგ შეამოწმეთ არის თუ არა რომელიმე თვისება Map - ში, შემოწმების შემდეგ ამოშალეთ რომელიმე თვისება და შემდეგ წამოიღეთ იგი კონსოლში.
// დრო 10წთ


// 1. შევქმნათ Map და შევიტანოთ 5 სხვადასხვა ტიპის მონაცემი Set-ის გამოყენებით
const myMap = new Map();

myMap.set('name', new Set(['John']));                   
myMap.set('age', new Set([30]));                       
myMap.set('isStudent', new Set([true]));             
myMap.set('address', new Set([{ city: 'Tbilisi' }])); 
myMap.set('hobbies', new Set([[ 'reading', 'coding' ]])); 


console.log('Has "age"?', myMap.has('age')); 

myMap.delete('isStudent');

console.log('Value of "isStudent":', myMap.get('isStudent'));
