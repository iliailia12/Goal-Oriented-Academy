// Task 1
class Dog {
    constructor(name) {
        this.name = name; 
    }

    bark() {
        console.log("Woof!");
    }
}

// Task 3
const myDog = new Dog("Buddy");

// Task 4
console.log(myDog.name); 

// Task 5
myDog.bark();

// Task 6
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Task 7
    displayInfo() {
        console.log(`This is a ${this.year} ${this.make} ${this.model}.`);
    }
}

// Task 8
const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Civic", 2018);

// Task 9
console.log(car1.model); 
car1.displayInfo(); 

console.log(car2.model); 
car2.displayInfo(); 

// Task 10
class Person {
    constructor(name, age = 30) {
        this.name = name;
        this.age = age;
    }
}
 
const person1 = new Person("ilia");
console.log(`${person1.name} is ${person1.age} years old.`); 