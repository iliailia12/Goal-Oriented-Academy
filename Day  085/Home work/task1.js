const day = (prompt("შეიყვანეთ კვირის დღე (1-7): "));

let dayName;

switch (day) {
    case 1:
        dayName = "ორშაბათი";
        break;
    case 2:
        dayName = "სამშაბათი";
        break;
    case 3:
        dayName = "ოთხშაბათი";
        break;
    case 4:
        dayName = "ხუთშაბათი";
        break;
    case 5:
        dayName = "პარასკევი";
        break;
    case 6:
        dayName = "შაბათი";
        break;
    case 7:
        dayName = "კვირა";
        break;
    default:
        dayName = "არასწორი დღე";
}

console.log(dayName);