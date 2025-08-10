 
const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 72 },
    { name: "Charlie", grade: 95 },
    { name: "David", grade: 68 },
    { name: "Eve", grade: 90 },
  ];
   
  const allPassing = students.every(student => student.grade >= 70);  
  console.log(allPassing);  
   
  const hasFailing = students.some(student => student.grade < 65);
  console.log(hasFailing);  
   
  students.forEach(student => console.log(`Student: ${student.name}`));
   
  const honorRoll = [];
  students.forEach(student => {
    if (student.grade >= 90) {
      honorRoll.push(student.name);
    }
  });
   
  console.log(allPassing); 
  
  console.log(hasFailing);  
   
  console.log(honorRoll);  
   
   