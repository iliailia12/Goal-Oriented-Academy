//დავალება NUM 2: შექმენი პირობა, რომელიც შეამოწმებს, არის თუ არა სია ცარიელი და თუ არა, იპოვოს რიცხვების ჯამი.

function sumOfNumbers(numbers) {
    if (numbers.length === 0) {  
        return 0;
    } else {
        return numbers.reduce((accumulator, current) => accumulator + current, 0); 
    }
}

