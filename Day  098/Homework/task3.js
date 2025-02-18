// User Management
// Create an Object Constructor named User that takes three parameters: username, email, and password.

// Add a method named changePassword that takes a new password as a parameter and changes the object's password.

// Add a method named getDetails that returns the user's information (excluding the password).

// Create two user objects and use the methods on them.

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;

  this.changePassword = function (newPassword) {
    this.password = newPassword;
  };

  this.getDetails = function () {
    return `Username: ${this.username}, Email: ${this.email}`;
  };
}

const user1 = new User("me", "me@example.com", "password123");
const user2= new User("ila", "ilia@example.com", "password456");
2 = new User("janedoe", " janedoe@example.com", "password456");

console.log(user1.getDetails());
console.log(user2.getDetails());

user1.changePassword("newpassword123"); 
console.log(user1.getDetails());
console.log(user2.getDetails());