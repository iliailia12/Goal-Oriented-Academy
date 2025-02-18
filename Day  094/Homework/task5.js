// switch
// გააკეთეთ მეოთხე დავალება Switch - ით.


function financialPlanning(age, gender, income) {
    switch (true) {
        case (age >= 18 && gender === 'female' && income > 5000):
            console.log('თქვენი ფინანსური მგომარეობა უზრუნველყოფილია');
            break;
        case (age >= 18 && gender === 'female' && income > 3000 && income <= 5000):
            console.log('ფინანსური პოზიცია სტაბილურია. უკეთესი გეგმაა საჭირო.');
            break;
        case (age >= 18 && gender === 'female' && income <= 3000):
            console.log('გჭირდებათ ფინანსური გეგმის გაუმჯობესება');
            break;
        case (age >= 18 && gender === 'male' && income > 6000):
            console.log('თქვენ მზად ხართ ინვესტიციებისთვის!');
            break;
        case (age >= 18 && gender === 'male' && income > 4000 && income <= 6000):
            console.log('შემოსავალი სტაბილურია');
            break;
        case (age >= 18 && gender === 'male' && income <= 4000):
            console.log('გჭირდებათ ფინანსური გეგმის გაუმჯობესება');
            break;
        case (age < 18):
            console.log('მიიღეთ განათლება და შემდეგ დაიწყეთ ინვესტიცია');
            break;
        default:
            console.log('Invalid input');
    }
}


financialPlanning(25, 'female', 5500); 
