// 🧩 Task: Build a Mini Toolbox Module System,
// ,
// You're going to create two files:

// tools.js – This will hold your exports.,

// main.js – This will import and use what you exported.,


// 📁 tools.js,
// In this file:

 
// Create a named export for a constant called hammer with the value "🔨".,

 
// Create another named export for a function called saw() that returns "Slicing wood!".,

 
// Create a default export for a function called build() that returns "Construction complete!".

// 📁 main.js,
// In this file:

 
// Import the hammer but rename it to mallet using as.,

 
// Import the saw() function as is.,

 
// Import the default export and name it startBuild.,

 
// Import everything from tools.js into a namespace object called toolbox.,


// Then:


 
// Print mallet to the console.,

 
// Call saw() and log the result.,

 
// Call startBuild() and log the result.,

 
// Log the full toolbox object to see all the exports grouped together.,



// 🧪 Bonus Test (optional but fun)
// Once you've done it, try changing the emoji in tools.js to 🛠️ and watch how it reflects in main.js. Just for funsies 😄


export const hammer = "🔨";

export function saw() {
  return "Slicing wood!";
}

export default function build() {
  return "Construction complete!";
}
