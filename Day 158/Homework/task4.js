
// 🚗 Async/Await Task: "Morning Commute"
// Scenario:
// Getting to work with real-world delays.

// 🧩 Steps:
// 1. Start engine – 1 sec → "Engine started..."
// 2. Drive – 4 sec → "Driving..."
// 3. Traffic jam – 3 sec → "Stuck in traffic..."
// 4. Arrived – no delay → "You’ve arrived!"





async function morningCommute() {
  console.log("Engine started...");
  await new Promise(resolve => setTimeout(resolve, 1000)); 

  console.log("Driving...");
  await new Promise(resolve => setTimeout(resolve, 4000));

  console.log("Stuck in traffic...");
  await new Promise(resolve => setTimeout(resolve, 3000)); 

  console.log("You’ve arrived!");
}

morningCommute();