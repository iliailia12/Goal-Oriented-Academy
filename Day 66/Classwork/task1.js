let age = prompt("შეიყვანეთ თქვენი ასაკი:");
 age = parseInt(age);
 // აქ ასაკის გამოთვლის რაღაც ამჯერად ჩემიდ დავწეწრე ბრო კოდი არ მიხმარია
 if (age >= 18) {
     console.log("თქვენ სრულწლოვანი ხართ.");
 } else {
     let yearsLeft = 18 - age;
     console.log(`თქვენ არ ხართ სრულწლოვანი. გაკლიათ ${yearsLeft} წელი.`);
 }
 