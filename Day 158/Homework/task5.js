
// 🧼 Async/Await Task: "Do Laundry"
// Scenario:
// Clean clothes cycle. The sacred weekend ritual.

// 🧩 Steps:
// 1. Wash clothes – 3 sec → "Washing..."
// 2. Rinse – 2 sec → "Rinsing..."
// 3. Spin – 1.5 sec → "Spinning..."
// 4. Done – no delay → "Laundry complete!"




async function doLaundry() {
  console.log("Washing...");
  await new Promise(resolve => setTimeout(resolve, 3000)); 

  console.log("Rinsing...");
  await new Promise(resolve => setTimeout(resolve, 2000));

  console.log("Spinning...");
  await new Promise(resolve => setTimeout(resolve, 1500)); 

  console.log("Laundry complete!"); 
}

doLaundry();