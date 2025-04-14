// შექმენით ორი ობიექტი, პირველი უნდა იყვეს ძველი ტიპის ობიექტი, ხოლო მეორე უნდა იყვეს გაუმჯობესებული ტიპის ობიექტი. გაუმჯობესებული 
// ტიპის ობიექტის ქვემოთ კომენტარების სახით დაწერეთ თუ კონკრეტულად რა გაუმჯობესდა,


// Zveli
const oldObject = {
    name: "ilia",
    age: 14,
    greet: function () {
      console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
    }
  };
  
  oldObject.greet();
  
  // axali
  const new_object = {
    name: "ilia",
    age: 14,
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  };
  
  new_object.greet();
  