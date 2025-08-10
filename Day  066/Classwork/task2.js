//დავალება: for-ლუპის დახმარებით ჩაწერეთ ლისტში 1-დან 30-მდე რიცხვები,
// და შემდეგ შექმენით ახალი ლისტი 
//სადაც ჩაწერთ იმ ლისტში მყოფ რიცხვებიდან მარტო ლუწ რიცხვებს 


let numbers = [];
for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}
let evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evenNumbers.push(numbers[i]);
    }
}
//დაწერილია ილიას მიერ 
//რესურსები ბრო კოდი იფ და ფორი დანარჩენი დავწერე მე
console.log( numbers);
console.log(evenNumbers);
