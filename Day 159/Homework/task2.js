
// 🧽 Async/Await Task: "Clean the Room"
// 🧩 Steps:
// 1. Pick up clothes – 1.5 sec → "Picking up clothes..."
// 2. Vacuum floor – 2 sec → "Vacuuming..."
// 3. Make bed – 1 sec → "Making bed..."
// 4. Room is clean – no delay → "Room is spotless!"

async function CleanRoom() {
  console.log("Starting cleaning...");

  await new Promise((resolve) => {setTimeout(() => { console.log("Picking up clothes..."); resolve();}, 1500);});

  await new Promise((resolve) => {setTimeout(() => { console.log("Vacuuming..."); resolve();}, 2000);});

  await new Promise((resolve) => {setTimeout(() => { console.log("Making bed..."); resolve();}, 1000);});

  await new Promise((resolve) => {setTimeout(() => { console.log("Room is spotless!"); resolve();}, 0);});

  console.log("Room is spotless!");
}