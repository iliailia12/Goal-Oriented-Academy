// შექმენით ფუნქცია, რომელიც შეამოწმებს რიცხვს
//  არის თუ არა დადებითი, უარყოფითი ან ნულის ტოლი.

function checkNumber(number) {
    if (number > 0) {
        console.log("ეს რიცხვი არის დადებითი");
    } else if (number < 0) {
        console.log("ეს რიცხვი არის უარყოფითი");
    } else {
        console.log("ეს რიცხვი არის ნულის ტოლი");
    }
}