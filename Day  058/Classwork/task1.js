let myFavoriteCharacter = {
    name: "ჰარი პოტერი", // პერსონაჟის სახელი
    age: 17, // ასაკი
    house: "გრიფინდორი", // სახლის სახელი
    wand: "ოლივანდერის სელის ხე", // ჯადოსნური ჯოხი
    patronus: "ყავლი" // პატრონის სახელი
};

// დაბეჭდეთ კუთვნილებები ცალ-ცალკე კონს ოლ ლოგი
console.log(myFavoriteCharacter.name); // "ჰარი პოტერი" ეს ფეიკ პერსონაჟია 
console.log(myFavoriteCharacter.age); // 17 ზუსტად არ ვიცი გარტყმაზე დავწერე
console.log(myFavoriteCharacter.house); // "გრიფინდორი" სლიზერინი უნდა ყოფილიყო
console.log(myFavoriteCharacter.wand); // "ოლივანდერის სელის ხე" ეს არ ვიცი რაა მარა დავწერე მაინც
console.log(myFavoriteCharacter.patronus); // "სინათლე"  რომელსაც ჯოხიდან უსვებს

// შეცვალეთ ორი კუთვნილება
myFavoriteCharacter.age = 18; // ასაკის შეცვლა
myFavoriteCharacter.patronus = "ღამურა"; // პატრონის შეცვლა

// დაბეჭდეთ ობიექტი მთლიანად
console.log(myFavoriteCharacter);

// დაამატეთ ახალი კუთვნილება
myFavoriteCharacter.bff = "რონი ვეზლი"; // ახლო მეგობრის სახელი

// წაშალეთ ძველი კუთვნილება
delete myFavoriteCharacter.wand; // ჯადოსნური ჯოხის წაშლა

// დაბეჭდეთ საბოლოო ობიექტი
console.log(myFavoriteCharacter);
