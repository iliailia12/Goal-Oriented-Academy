// 🧩 Task 3: Full Namespace Access + Selective Use,
// Files:

 
// zoo.js,
// app.js,

// In zoo.js:

 
// Export three named constants: lion = "🦁", elephant = "🐘", parrot = "🦜".,

// Export a default function called visit() that returns "Welcome to the Zoo!".,

// In app.js:

 
// Import everything as zoo.,

 
// Import only parrot separately (using a named import).,

 
// Log the result of zoo.visit(), then log zoo.lion and parrot.

// Named exports
export const lion = "🦁";
export const elephant = "🐘";
export const parrot = "🦜";

// Default export
export default function visit() {
  return "Welcome to the Zoo!";
}
