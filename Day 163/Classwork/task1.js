// <!-- LEVEL 163
// გააკეთეთ პროექტი სადაც გექნებათ 3 input და ღილაკზე დაკლიკებისას უნდა გამოიტანოთ კონსოლში, გამოიტანოთ localStorage - ში და alertBox -  ში
// ეს ყველაფერი გასტილეთ css - ით
// 1 input - name
// 2 input - email
// 3 input - age
// თუ age < 18 გამოიტანეთ alertbox  - ში რომ მომხმარებელი ვერ დარეგისტრირდება
//  -->

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const submitButton = document.getElementById('submit');


submitButton.addEventListener('click', function() {
    const name = nameInput.value;
    const email = emailInput.value;
    const age = ageInput.value;

    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('age', age);

    
    if (age < 18) {
        alert('You cannot register because you are under 18.');
    } else {
        alert('Registration successful!');
    }   
});

