// You are given three promises that resolve after different times. Use Promise.all to wait until all of them are done, then log the result array.,
// ,
// One of the promises rejects. Use Promise.all to observe what happens, and catch the error.,
// ,
// (Why does the whole thing crash? That's the point!)

// Use Promise.any to get the first successful result out of these promises, even if some fail. Then log the result.,
// ,
// You have three promises that resolve after different times. Only the fastest one should win. Use Promise.any to log the winner.,
// ,
 
// What happens if all promises fail in Promise.any? Test it out. Catch the AggregateError and log the message.




//1
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1 resolved'), 1000); // 3 1წამის შემდეგ წყდება
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 2 resolved'), 2000); // 3 2წამის შემდეგ წყდება
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 3 resolved'), 3000); // 3 3წამის შემდეგ წყდება
});

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log('All promises resolved:', results);
    })
    .catch(error => {
        console.log('Error:', error);
    });
