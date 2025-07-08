// 🍝 Async/Await Task: "Cook Pasta"
// Scenario:
// Time to chef it up, Italian-style.

// 🧩 Steps:
// 1. Boil water – 2 sec → "Water boiling..."
// 2. Add pasta – 1 sec → "Pasta added..."
// 3. Cook – 5 sec → "Cooking pasta..."
// 4. Drain and serve – no delay → "Pasta is ready!"



async function cookPasta() {
  console.log("Water boiling...");
  await new Promise(resolve => setTimeout(resolve, 2000)); 

  console.log("Pasta added...");
  await new Promise(resolve => setTimeout(resolve, 1000));

  console.log("Cooking pasta...");
  await new Promise(resolve => setTimeout(resolve, 5000)); 

  console.log("Pasta is ready!"); 
}

cookPasta();