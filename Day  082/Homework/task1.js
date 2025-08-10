// <!-- # 5. ამოცანა:
// 1. მომხმარებელს შემოატანინეთ 3 რიცხვი.
// 2. გამოიანგარიშე ამ სამი რიცხვის ჯამი და საშუალო.
// 3. ჯამი და საშუალო გამოიტანე როგორც `console.log()`-ში, ასევე `alert()`-ში. -->


let num1 = parseFloat(prompt("შეიყვანეთ პირველი რიცხვი:"));
let num2 = parseFloat(prompt("შეიყვანეთ მეორე რიცხვი:"));
let num3 = parseFloat(prompt("შეიყვანეთ მესამე რიცხვი:"));

let sum = num1 + num2 + num3;
let average = sum / 3;

console.log(sum);
console.log(average);
alert(sum +average);