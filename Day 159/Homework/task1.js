// 🍳 Async/Await Task: "Make an Omelette"
// 🧩 Steps:
// 1. Crack eggs – 1 sec → "Cracking eggs..."
// 2. Whisk – 1 sec → "Whisking..."
// 3. Cook on pan – 3 sec → "Cooking omelette..."
// 4. Serve – no delay → "Omelette is ready!"


async function MorningCommut() {
  console.log("Engine started...");

 
  await new Promise((resolve) => {setTimeout(() => { console.log("Cracking eggs..."); resolve();}, 1000);});


  await new Promise((resolve) => {setTimeout(() => {console.log(" Whisking... "); resolve();}, 1000);});

  
  await new Promise((resolve) => {setTimeout(() => {  console.log("Cooking omelette..."); resolve();}, 3000);});


   await new Promise((resolve) => {setTimeout(() => {  console.log(" Omelette is ready! "); resolve();}, 0);});

 
  console.log(" Omelette is ready!  ");
}

MorningCommut();


