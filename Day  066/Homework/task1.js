//დავალება NUM 1: შექმენი ფუნქცია, რომელიც მიიღებს რიცხვს და პირობით შეამოწმებს, არის თუ არა ის კენტი ან ლუწი.

function checkOddEven(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}


console.log(checkOddEven(5));  
console.log(checkOddEven(10)); 