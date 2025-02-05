// Basic Object Initialization
// Task:
// Create an object named student with the following properties:
// name (string)
// age (number)
// grade (string)
// isEnrolled (boolean)
// Add a method called getInfo() that returns a formatted string with the student's details.
// Update the student's grade to a new value and log the updated object.


let student = {
    name: "ilia kviciani",
    age :14,
    grade :"100",
    isEnrolled : true,
    getInfo: function(){
        return `name: ${this.name} age: ${this.age} grade: ${this.grade} isEnrolled: ${this.isEnrolled}`;
    }
     }
}