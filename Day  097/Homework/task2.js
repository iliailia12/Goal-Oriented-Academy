// კლიენტი (customer) ობიექტი
// შექმენით customer ობიექტი, რომელსაც აქვს შემდეგი თვისებები და მეთოდები:

// firstName: კლიენტის სახელი.

// lastName: კლიენტის გვარი.

// email: კლიენტის ელ. ფოსტა.

// fullName: მეთოდი, რომელიც დააბრუნებს კლიენტის სრულ სახელს.

// updateEmail: მეთოდი, რომელიც მიიღებს ახალ ელ. ფოსტას და განაახლებს email თვისებას.z


let costumer = {
    firstname:"ilia",
    lastname : "kviciani"
}
costumer.email = "ilia@gmail.com"
costumer.fullName = function(){
    return this.firstname + " " + this.lastname
}
costumer.updateEmail = function(newEmail){
    this.email = newEmail
}
console.log(costumer.fullName())
console.log(costumer.email)
