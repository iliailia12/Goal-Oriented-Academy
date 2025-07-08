// / ☕ Async/Await Task: "Brew Coffee"
// Scenario:
// You’re making a perfect cup of coffee.

// 🧩 Steps:
// 1. Grind beans – 1.5 sec → "Grinding beans..."
// 2. Boil water – 2 sec → "Water is boiling..."
// 3. Brew coffee – 3 sec → "Brewing coffee..."
// 4. Pour and serve – no delay → "Coffee is ready!"






async function BrewCoffee() {
  console.log("Starting to boil water...");

 
  await new Promise((resolve) => {setTimeout(() => { console.log("Grinding beans..."); resolve();}, 1500);});


  await new Promise((resolve) => {setTimeout(() => {console.log("Water is boiling..."); resolve();}, 2000);});

  
  await new Promise((resolve) => {setTimeout(() => {  console.log("Brewing coffee... "); resolve();}, 3000);});


   await new Promise((resolve) => {setTimeout(() => {  console.log("Coffee is ready to drink! 🍵"); resolve();}, 0);});

 
  console.log("Coffee is ready to drink! 🍵");
}

boilWater();
