// გააკეთეთ 5 მაგალითი Object Literal enhancment - ზე.
 
// გააკეთეთ საკლასო სამუშაო ვისაც არ გაგიკეთებიათ.


// 1. 
const name = "Ilia";
const age = 15;
const person = { name, age };
console.log(person);

// 2. 
const car = {
  brand: "Toyota",
  model: "Corolla",
  start() {
    console.log("Car started");
  }
};
car.start(); 

// 3.  
const key = "favoriteColor";
const user = {
  name: "ilia",
  [key]: "blue"
};
console.log(user); 

// 4. 
const mathOperations = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  }
};
console.log(mathOperations.add(5, 3)); 
console.log(mathOperations.subtract(5, 3)); 

// 5.
const firstName = "ilia";
const lastName = "kviciani";
const fullName = {
  firstName,
  lastName,
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};
console.log(fullName.getFullName());  