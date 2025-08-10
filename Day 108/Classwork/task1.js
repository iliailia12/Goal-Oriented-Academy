// Display and Manipulate Date and Time
// Objectives:

// Create and display a Date object for the current date and time.

// Display the current date and time in a readable format on a webpage.

// Use set methods to modify the Date object.

// Update and display the modified date and time

 
const currentDate = new Date();
console.log("Current Date and Time: " + currentDate);

  
document.body.innerHTML = `<p>Current Date and Time: ${currentDate.toLocaleString()}</p>`;
 
currentDate.setFullYear(currentDate.getFullYear() + 1);  
currentDate.setMonth(currentDate.getMonth() + 1);  
currentDate.setDate(currentDate.getDate() + 1);  
currentDate.setHours(currentDate.getHours() + 1);              
currentDate.setMinutes(currentDate.getMinutes() + 1);  
currentDate.setSeconds(currentDate.getSeconds() + 1);  

 .
console.log("Modified Date and Time: " + currentDate);
document.body.innerHTML += `<p>Modified Date and Time: ${currentDate.toLocaleString()}</p>`;