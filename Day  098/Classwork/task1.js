// Object Constuctor
// შექმენით ობიექტის კონსტრუქტორი მომხმარებელზე, პარამეტრების სახით შემოიტანეთ
// name
// last name
// phone number
// email
// password
// confrim password

// შექმენით 3 კონსტურქტორი სხვადასხვა მომხმარებელზე

// შემდეგ სათითაოდ გამოიტანეთ თითიეული მომხმარებლის ყველა ინფორმაცია, name, lastname და ა.შ



function User(name, lastName, phoneNumber, email, password, confirmPassword) {
    this.name = name;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
}

const user1 = new User("ილია", "კვიციანი", "1234567890", "არ ვიცი@.com", "password123", "password123");
const user2 = new User("მასტერ", "ჯანეზა", "0987654321", " არ ვიცი@", "secret123", "secret123");
const user3 = new User("დავით", "სალუქვაძე", "9876543210", "არ ვიცი@le.com", "qwerty123", "qwerty123");       

console.log(user1);
console.log(user2);
console.log(user3);
console.log(user1.name);
console.log(user2.lastName);
console.log(user3.phoneNumber);
console.log(user1.email);   
console.log(user2.password);
console.log(user3.confirmPassword);
