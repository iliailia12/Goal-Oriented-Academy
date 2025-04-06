// ობიექტის თვისებების ჯამი:
// შექმენით ობიექტი, რომელიც წარმოადგენს პროდუქტების ფასებს.
// გამოიყენეთ for...in მარყუჟი ყველა ფასის ჯამის გამოსათვლელად.


const prices = {
    apple: 1.2,
    banana: 0.5,
    cherry: 2.5,
    date : 3.0,
    elderberry: 4.0
}

let total_prices=0;
for (let key in prices) {
    total_prices += prices[key];
}
console.log("Total price of all products: " + total_prices);