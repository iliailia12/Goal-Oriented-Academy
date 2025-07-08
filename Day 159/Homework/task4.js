// 🧳 Async/Await Task: "Pack for a Trip"
// 🧩 Steps:
// 1. Choose clothes – 1.5 sec → "Picking outfits..."
// 2. Pack suitcase – 2 sec → "Packing..."
// 3. Double-check list – 1 sec → "Checking items..."
// 4. Done – no delay → "Ready to travel!"

async function PackForTrip() {
  console.log("Starting packing...");

  await new Promise((resolve) => {setTimeout(() => { console.log("Picking outfits..."); resolve();}, 1500);});

  await new Promise((resolve) => {setTimeout(() => { console.log("Packing..."); resolve();}, 2000);});

  await new Promise((resolve) => {setTimeout(() => { console.log("Checking items..."); resolve();}, 1000);});

  await new Promise((resolve) => {setTimeout(() => { console.log("Ready to travel!"); resolve();}, 0);});

  console.log("Ready to travel!");
}