// Create a global variable called score. Write a function increaseScore that adds 10 to score. Call it twice and log the final value.,
// ,
// Write a function secretCode that declares a local variable code with value '1234'. Try to console.log(code) outside the function. What happens?,
// ,
// Declare a global variable name = "World". Inside a function greet, declare a local variable name = "Alice". Log name inside the function and outside.,
// ,
// Create a function counterGame that declares a variable counter = 0. Every time you call the function, increase counter by 1 and log it. Why does it always print 1?,
// ,
// Without declaring variables properly (i.e., missing let, const, or var), assign a value inside a function and log it outside. What do you notice?,
// ,
// კომენტარის გამოყენებით, ახსენით თუ არ არის გლობალური ცვლადი(თქვენი სიტყვებით),
// ,
// კომენტარის გამოყენებით, ახსენით თუ არ არის ლოკალური ცვლადი(თქვენი სიტყვებით),
// ,
 
// Create a module file called mathUtils.js. Inside it, define two functions: add(a, b) and subtract(a, b). Export both functions. Then, create another file called app.js and import the functions to use them.,
// ,
// Create a file logger.js that exports a default function which logs any message you pass to it. Then, import and use it in another file named main.js.,
// ,
// Create a file userService.js where you define:


// 2. 
function secretCode() {
    let code = '1234';
}
secretCode();


// 4.
function counterGame() {
    let counter = 0;
    counter += 1;
    console.log(counter);
}
counterGame(); 
counterGame(); 


// 5. 
function testGlobal() {
    testVar = 42; 
}
testGlobal();
console.log(testVar); // 42


// 6. რა არის გლობალური ცვლადი
// გლობალური ცვლადი არის ცვლადი, რომელიც გამოცხადებულია ფუნქციის გარეთ და ხელმისაწვდომია მთელ სკრიპტში.

// 7. რა არის ლოკალური ცვლადი
// ლოკალური ცვლადი არის ცვლადი, რომელიც გამოცხადებულია ფუნქციის ან ბლოკის შიგნით და ხელმისაწვდომია მხოლოდ იმ ბლოკში.