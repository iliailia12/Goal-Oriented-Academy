// Task 1: Finding a Specific User by ID
// You are given an array of user objects, where each object has an id (number) and a name (string) property. Use the find() method to locate the user object with an id of 3. Store the found user object in a variable called userWithId3.
// Task 2: Reversing an Array of Colors
// You have an array of color names. Use the reverse() method to reverse the order of the elements in the original colors array directly.
// Task 3: Sorting an Array of Product Prices
// You are given an array of product prices (numbers). Use the sort() method to sort these prices in descending order (from highest to lowest).
// Task 4: Creating an Array of Characters from a String
// You have a string. Use the Array.from() method to create a new array where each element is a character from the string. Store the resulting array in a variable called characters.
// Task 5: Checking if Data is an Array
// You have two variables, data1 (an array of numbers) and data2 (a string). Use the Array.isArray() method to check if each variable is an array. Store the boolean results in variables called isData1Array and isData2Array respectively.
// -
// Task 6:
// JavaScript Comprehensive Data Analysis - The Ultimate Task!
// Task:

// You are managing data for a student course enrollment system. You have an array of course objects, where each object contains information about a course and the students enrolled in it.
// Your Tasks:

// Array.isArray(): Check if the courses variable is an array and if the studentNamesString variable is an array. Log the boolean results.

// Array.from(): Convert the studentNamesString into an array called allStudentNames by splitting it at the comma.

// forEach() (Outer Loop): Iterate through each course in the courses array and log the course ID and name.

// map() (Level 1): Create a new array called courseNames containing only the names of all the courses.

// map() (Level 2 & Nested reduce()): Create a new array called courseAverages. Each element should be an object with the course id and the average grade of all students enrolled in that course.

// filter(): Create a new array called activeCourses containing only the courses where isActive is true.

// find(): Find the course with the ID "MA201" and store it in a variable called calculusCourse. Log the calculusCourse object.

// every() (Nested): Iterate through each course using forEach(). For each course, check if all enrolled students have at least one grade of 70 or higher. Log a message for each course indicating this.

// some(): Check if there is at least one course with a capacity of less than 30. Log the boolean result.

// sort(): Create a new array called coursesByCapacity by making a copy of the courses array and sorting it in ascending order based on the capacity. Log the coursesByCapacity array.

// reverse(): Reverse the order of the coursesByCapacity array in place. Log the reversed array.

// reduce(): Calculate the total number of credits offered by all active courses.



// reduceRight(): Create a string containing the names of all active courses, listed in reverse order of their appearance in the activeCourses array, separated by " - ".




//1
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];
  
  const userWithId3 = users.find(user => user.id === 3);
  console.log("User with ID 3:", userWithId3);

//2
const colors = ["red", "blue", "green", "yellow"];
colors.reverse();
console.log("Reversed colors:", colors);


//3
const productPrices = [19.99, 5.49, 25.0, 10.0];
productPrices.sort((a, b) => b - a);
console.log("Sorted product prices (descending):", productPrices);



//4
const myString = "JavaScript";
const characters = Array.from(myString);
console.log("Characters array:", characters);


//5
const data1 = [1, 2, 3];
const data2 = "Hello, world!";

const isData1Array = Array.isArray(data1);
const isData2Array = Array.isArray(data2);

console.log("Is data1 an array?", isData1Array);
console.log("Is data2 an array?", isData2Array);



//6

const courses = [
    {
      id: "CS101",
      name: "Computer Science Basics",
      students: [{ name: "Alice", grades: [85, 90] }, { name: "Bob", grades: [70, 75] }],
      isActive: true,
      capacity: 50,
      credits: 3,
    },
    {
      id: "MA201",
      name: "Calculus",
      students: [{ name: "Charlie", grades: [60, 65] }, { name: "Dave", grades: [80, 85] }],
      isActive: false,
      capacity: 25,
      credits: 4,
    },
  ];
  
  // Array.isArray()
  const studentNamesString = "Alice,Bob,Charlie,Dave";
  console.log("Is courses an array?", Array.isArray(courses));
  console.log("Is studentNamesString an array?", Array.isArray(studentNamesString));
  
  // Array.from()
  const allStudentNames = Array.from(studentNamesString.split(","));
  console.log("All student names:", allStudentNames);
  
  // forEach()
  courses.forEach(course => {
    console.log(`Course ID: ${course.id}, Name: ${course.name}`);
  });
  
  // map()  
  const courseNames = courses.map(course => course.name);
  console.log("Course names:", courseNames);
  
  // map()  
  const courseAverages = courses.map(course => ({
    id: course.id,
    averageGrade: course.students.reduce((sum, student) => sum + student.grades.reduce((a, b) => a + b, 0) / student.grades.length, 0) / course.students.length,
  }));
  console.log("Course averages:", courseAverages);
  
  // filter()
  const activeCourses = courses.filter(course => course.isActive);
  console.log("Active courses:", activeCourses);
  
  // find()
  const calculusCourse = courses.find(course => course.id === "MA201");
  console.log("Calculus course:", calculusCourse);
  
  // every( 
  courses.forEach(course => {
    const allStudentsAbove70 = course.students.every(student => student.grades.some(grade => grade >= 70));
    console.log(`All students in ${course.name} have at least one grade >= 70:`, allStudentsAbove70);
  });
  
  // some()
  const hasLowCapacityCourse = courses.some(course => course.capacity < 30);
  console.log("Is there a course with capacity < 30?", hasLowCapacityCourse);
  
  // sort()
  const coursesByCapacity = [...courses].sort((a, b) => a.capacity - b.capacity);
  console.log("Courses sorted by capacity:", coursesByCapacity);
  
  // reverse()
  coursesByCapacity.reverse();
  console.log("Reversed courses by capacity:", coursesByCapacity);
  
  // reduce()
  const totalCredits = courses.reduce((sum, course) => (course.isActive ? sum + course.credits : sum), 0);
  console.log("Total credits of active courses:", totalCredits);
  
  // reduceRight()
  const activeCourseNamesReversed = activeCourses.reduceRight((str, course, index) => {
    return index === activeCourses.length - 1 ? course.name : `${str} - ${course.name}`;
  }, "");
  console.log("Active course names (reversed):", activeCourseNamesReversed);