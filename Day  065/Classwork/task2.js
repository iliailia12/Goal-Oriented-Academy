let isTrue1 = true;
let isTrue2 = Boolean(true);
let isFalse1 = false;
let isFalse2 = Boolean(0);

let inverted1 = !isTrue1;  //კონსოლ ლოგიდან გამომიტანა false
let inverted2 = !isTrue2;  //კონსოლ ლოგიდან გამომიტანა  false
let inverted3 = !isFalse1; //კონსოლ ლოგიდან გამომიტანა  true
let inverted4 = !isFalse2; //კონსოლ ლოგიდან გამომიტანა  true
//კოდის რაღაც ნაწილი გამოვიყენე დავალება 1 ი დან და კონსოლ ლოგი ჩემი ერთ ერთი პროექტიდან
console.log(`isTrue1: ${isTrue1}, Inverted: ${inverted1}`);
console.log(`isTrue2: ${isTrue2}, Inverted: ${inverted2}`);
console.log(`isFalse1: ${isFalse1}, Inverted: ${inverted3}`);
console.log(`isFalse2: ${isFalse2}, Inverted: ${inverted4}`);
