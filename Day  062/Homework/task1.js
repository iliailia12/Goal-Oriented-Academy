//1
function multiply() {
    const num1 = parseFloat(prompt("გთხოვთ, შეიყვანოთ პირველი რიცხვი:"));
    const num2 = parseFloat(prompt("გთხოვთ, შეიყვანოთ მეორე რიცხვი:"));
    return num1 * num2;
}

// 2
function subtract() {
    const num1 = parseFloat(prompt("გთხოვთ, შეიყვანოთ პირველი რიცხვი:"));
    const num2 = parseFloat(prompt("გთხოვთ, შეიყვანოთ მეორე რიცხვი:"));
    return num1 - num2;
}

//3
function divide() {
    const num1 = parseFloat(prompt("გთხოვთ, შეიყვანოთ პირველი რიცხვი:"));
    const num2 = parseFloat(prompt("გთხოვთ, შეიყვანოთ მეორე რიცხვი:"));
    return num1 / num2;
}

// 4
function fullName() {
    const firstName = prompt("გთხოვთ, შეიყვანოთ თქვენი სახელი:");
    const lastName = prompt("გთხოვთ, შეიყვანოთ თქვენი გვარი:");
    return `${firstName} ${lastName}`;
}

//5
function minutesToSeconds() {
    const minutes = parseFloat(prompt("გთხოვთ, შეიყვანოთ წუთების რაოდენობა:"));
    return minutes * 60;
}

// 6
function rectangleArea() {
    const length = parseFloat(prompt("გთხოვთ, შეიყვანოთ მართკუთხა სიგრძე:"));
    const width = parseFloat(prompt("გთხოვთ, შეიყვანოთ მართკუთხა სიგანე:"));
    return length * width;
}

// 7
function concatenateStrings() {
    const string1 = prompt("გთხოვთ, შეიყვანოთ პირველი სტრიქონი:");
    const string2 = prompt("გთხოვთ, შეიყვანოთ მეორე სტრიქონი:");
    return string1 + string2;
}

// 8
function power() {
    const base = parseFloat(prompt("გთხოვთ, შეიყვანოთ ძირითადი რიცხვი:"));
    const exponent = parseFloat(prompt("გთხოვთ, შეიყვანოთ ექსპონენტი:"));
    return Math.pow(base, exponent);
}

// 9
function circumference() {
    const radius = parseFloat(prompt("გთხოვთ, შეიყვანოთ წრის რადიუსი:"));
    return 2 * Math.PI * radius;
}

// 10
function nextNumber() {
    const number = parseInt(prompt("გთხოვთ, შეიყვანოთ რიცხვი:"));
    return number + 1;
}
