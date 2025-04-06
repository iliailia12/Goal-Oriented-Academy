const racxa = parseInt(prompt("შეიყვანეთ ამინდის ტიპი (1-4): "));

let racxaType;

switch (racxa) {
    case 1:
        wracxaType = "მზიანი";
        break;
    case 2:
        racxaType= "წვიმიანი";
        break;
    case 3:
        racxaType = "მოღრუბლული";
        break;
    case 4:
        racxaType= "ქარიანი";
        break;
    default:
        racxaType = "არ არის დადგენილი";
}

console.log(racxaType);