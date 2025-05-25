// Promises ის საშუალებით შექმენით პროგრამა, რომელიც Random პრინციპით  გამოიტანს რიცხვს 0 - დან 
// 100 - მდე.,
// ,
// თუ რიცხვი იქნება 50 ზე მეტი, მაშინ უნდა გამოიტანოს Success, ხოლო თუ იქნება 50 - ზე ნაკლები,
//  მაშინ უნდა გამოიტანოს Failure.,


const Promise = new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 101);
    console.log("Generated number:", num);
    if (num > 50) {
        resolve("Success");
    } else {
        reject("Failure");
    }
});

Promise
    .then(result => console.log(result))
    .catch(error => console.log(error));