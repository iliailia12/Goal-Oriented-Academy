function main() {

    const name = prompt("გთხოვთ, შეიყვანოთ თქვენი სახელი:");
    const age = prompt("გთხოვთ, შეიყვანოთ თქვენი ასაკი:");
    const dailyRunningDistance = prompt("გთხოვთ, შეიყვანოთ ყოველდღიური სირბილის რაოდენობა (კილომეტრებში):");
    const workoutDaysPerWeek = prompt("გთხოვთ, შეიყვანოთ სავარჯიშო დღეების რაოდენობა კვირაში (0-დან 7-მდე):");

   
    if (age < 16 || age > 60) {
        console.log("გთხოვთ, გაიაროთ ექიმის კონსულტაცია");
    }

    
    const weeklyRunningDistance = dailyRunningDistance * workoutDaysPerWeek;

 
    if (weeklyRunningDistance < 20) {
        console.log("შესაძლებელია მეტი ვარჯიში");
    }
}

main();