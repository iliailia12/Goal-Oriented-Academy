//  1 გააკეთეთ 6 მაგალითი Promise - ზე. 
// 2 მაგალითი ჩვეულებრივად 
// 2 მაგალითი Math ობიექტზე 
// 2 მაგალითი setTimeout - ზე. 


// task1

// task 1  
const taskDone = new Promise((resolve, reject) => {
  const isDone = true;

  if (isDone) {
    resolve("დავალება წარმატებით შესრულდა ✅");
  } else {
    reject("დავალება ვერ შესრულდა ❌");
  }
});

taskDone.then(result => console.log(result)).catch(err => console.error(err));

//task2  
const checkLogin = new Promise((resolve, reject) => {
  const loggedIn = false;

  if (loggedIn) {
    resolve("მომხმარებელი ავტორიზებულია");
  } else {
    reject("მომხმარებელი არ არის ავტორიზებული");
  }
});

checkLogin.then(res => console.log(res)).catch(err => console.error(err));
 

// task 3   
const checkEven = (num) => {
  return new Promise((resolve, reject) => {
    if (num % 2 === 0) {
      resolve(`${num} არის ლუწი`);
    } else {
      reject(`${num} არ არის ლუწი`);
    }
  });
};

checkEven(8).then(res => console.log(res)).catch(err => console.error(err));

// task 4  
const checkGreaterThan50 = (num) => {
  return new Promise((resolve, reject) => {
    if (Math.max(num, 50) === num && num !== 50) {
      resolve(`${num} მეტია 50-ზე`);
    } else {
      reject(`${num} არ არის მეტი 50-ზე`);
    }
  });
};

checkGreaterThan50(75).then(console.log).catch(console.error);


// task 5  
const greetUser = new Promise((resolve) => {
  setTimeout(() => {
    resolve("გამარჯობა მომხმარებელო!");
  }, 2000);
});

greetUser.then(console.log);

// task 6  
const delayedProcess = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = Math.random() > 0.3;

    if (success) {
      resolve("პროცესი წარმატებით დასრულდა ✅");
    } else {
      reject("პროცესი ჩაიშალა ❌");
    }
  }, 3000);
});

delayedProcess.then(console.log).catch(console.error);
