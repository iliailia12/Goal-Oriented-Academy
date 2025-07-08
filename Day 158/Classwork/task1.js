// 🍵 Async/Await Task: "Boil Water for Tea"

// Scenario:
// You are making tea. To do it, you need to follow these exact steps in order, and each one takes time (simulated with setTimeout inside Promises).

// 🧩 Steps:
// 1. Boil water – Takes 2 seconds. Log: "Water is boiling..."

// 2. Add tea bag – Takes 1 second. Log: "Tea bag added."

// 3. Steep tea – Takes 3 seconds. Log: "Tea is steeping..."

// 4. Ready to drink – No delay. Just log: "Tea is ready to drink!"





async function boilWater() {
  console.log("Starting to boil water...");

 
  await new Promise((resolve) => {setTimeout(() => { console.log("Water is boiling..."); resolve();}, 2000);});


  await new Promise((resolve) => {setTimeout(() => {console.log("Tea bag added."); resolve();}, 1000);});

  
  await new Promise((resolve) => {setTimeout(() => {  console.log("Tea is steeping..."); resolve();}, 3000);});


   await new Promise((resolve) => {setTimeout(() => {  console.log("Tea is ready to drink! 🍵"); resolve();}, 0);});

 
  console.log("Tea is ready to drink! 🍵");
}

boilWater();
