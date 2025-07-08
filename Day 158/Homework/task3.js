
// 🍞 Async/Await Task: "Make Toast"
// Scenario:
// Morning breakfast vibes. Toast is on the way.

// 🧩 Steps:
// 1. Put bread in toaster – 1 sec → "Bread in toaster..."
// 2. Toasting – 2.5 sec → "Toasting..."
// 3. Butter it – 1 sec → "Spreading butter..."
// 4. Done – no delay → "Toast is ready!"



async function makeToast() {
  console.log("Bread in toaster...");
  await new Promise(resolve => setTimeout(resolve, 1000)); 

  console.log("Toasting...");
  await new Promise(resolve => setTimeout(resolve, 2500));

  console.log("Spreading butter...");
  await new Promise(resolve => setTimeout(resolve, 1000)); 

  console.log("Toast is ready!"); 
}


makeToast();