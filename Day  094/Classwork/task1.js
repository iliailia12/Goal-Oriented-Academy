let subject1 = prompt("შეიყვანეთ პირველი საგნის ქულა: ");
let subject2 =prompt("შეიყვანეთ მეორე საგნის ქულა: ");
let subject3 = prompt("შეიყვანეთ მესამე საგნის ქულა: ");

let averageScore = (subject1 + subject2 + subject3) / 3;

let grade;
if (averageScore > 90 && averageScore < 100) {
    grade = 'A';
} else if (averageScore > 70 && averageScore < 80) {
    grade = 'B';
} else if (averageScore > 50 && averageScore < 65) {
    grade = 'C';
} else if (averageScore > 25 && averageScore < 50) {
    grade = 'D';
} else {
    grade = 'წადი ისწავლე და მერე მოდი';
}

