// 🚗 Async/Await Task: "Morning Commute"

// Scenario:
// Getting to work with real-world delays.

// 🧩 Steps:
// 1. Start engine – 1 sec → "Engine started..."
// 2. Drive – 4 sec → "Driving..."
// 3. Traffic jam – 3 sec → "Stuck in traffic..."
// 4. Arrived – no delay → "You’ve arrived!"



async function MorningCommut() {
  console.log("Engine started...");

 
  await new Promise((resolve) => {setTimeout(() => { console.log("Engine started..."); resolve();}, 1000);});


  await new Promise((resolve) => {setTimeout(() => {console.log(" Driving "); resolve();}, 4000);});

  
  await new Promise((resolve) => {setTimeout(() => {  console.log("Stuck in traffic ..."); resolve();}, 3000);});


   await new Promise((resolve) => {setTimeout(() => {  console.log(" You’ve arrived! "); resolve();}, 0);});

 
  console.log("You’ve arrived! ");
}

MorningCommut();
