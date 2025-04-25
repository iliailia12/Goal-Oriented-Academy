// ქმენით js ფაილი და ჩართეთ strict mode ორი გზით, გლობალურად და ლოკალურად. strict mode ის ჩართვის შემდეგ შექმენით 2 მაგალითი(ცვლადებზე და 
// ფუნქციებზე) სადაც ჩანს strict mode - ის მუშაობა და ასევე ის პროცესი სადაც იჭერს შეცდომებს.
// მაგალითების შექმნის შემდეგ, კომენტარის სახით ახსენით თუ რატომ დაფიქსირდა შეცდომა.
 




"use strict";

try {
    varible = 10
}catch(error){
    console.error    
    {error.message}
}

try {
    const obj = Object.freeze({name: "ilia"})
    obj.name = "kviciani"
}catch (error) {
    console.error("Error:", error.message); 
}
