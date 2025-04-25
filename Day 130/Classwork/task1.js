// გააკეთეთ თითო მაგალითი ყველა საკითხზე. (arrow function, destructing, object enhancment, forIn/forOf, defaupt parameter).

// არროწ ფუნქცია
const multiply = (a, b) => a * b;
console.log(multiply(5, 3)); 

// დაშლა
const person = { name: "Ilia", age: 14, city: "Tbilisi" };
const { name, age } = person;
console.log(`Name: ${name}, Age: ${age}`); 

// ობიექტის გაუმჯობესებული მწთოდი
const hobby = "coding";
const enhanced = { name, age, hobby };
console.log(enhanced);  


// ფორ ინის მეთოდი
const car = { brand: "Toyota", model: "911", year: 2020 };
for (const key in car) {
  console.log(`${key}: ${car[key]}`);
}




