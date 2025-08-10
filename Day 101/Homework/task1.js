// დავალება 1: უნივერსიტეტის მონაცემები
// შექმენით university ობიექტი, რომელიც შეიცავს შემდეგ თვისებებს:

 
// name - უნივერსიტეტის სახელი
// departments - ფაკულტეტების რაოდენობა
// website - უნივერსიტეტის ვებსაიტი
// ratings - ჩაშენებული ობიექტი, სადაც იქნება 3 სტუდენტის შეფასება


// შემდეგ:

 
// გამოიტანეთ ობიექტის ყველა თვისება და მნიშვნელობა.

// შეამოწმეთ, გააჩნია თუ არა scholarship თვისება.

// დაამატეთ studentsCount ახალი ობიექტის გაერთიანებით.

// გაყინეთ ობიექტი და სცადეთ მისი შეცვლა.

// შეამოწმეთ, გაყინულია თუ არა ობიექტი.


let university = {
    name: "Caucasus University",    
    departments: 5,
    website: "cu.edu.ge",
    ratings: { student1: 4.5, student2: 4.8, student3: 4.2 }
}

console.log("University name: " + university.name);
console.log("Departments: " + university.departments);
console.log("Website: " + university.website);

if (university.ratings.scholarship) {
    console.log("Scholarship exists");
} else {
    console.log("Scholarship does not exist");
    }

}

