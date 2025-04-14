// # 2. შექმენით 2 ობიექტი. პირველი ობიექტი უნდა მოიცავდეს ინფორმაციას თქვენს თავზე, ხოლო მეორე ობიექტი უნდა მ
// ოიცავდეს ინფორმაციას მანქანაზე. 
// თქვენი დავალებაა, რომ დაშალოთ ობიექტი და ამოიღოთ თვისებები.



const myInfo ={
    name:"ilia",
    age:14,
    location:"yvareli",
    hobby:"programming",
    favFood:"xinkali",
    favSport:"football",
}



const carInfo ={
    brand:"lexux",
    model:"idk",
    year:2011,
    color:"black",
}

const{name,age,location,hobby,favFood,favSport} = myInfo
const{brand,model,year,color} = carInfo

console.log{name,age,location,hobby,favFood,favSport}
console.log{brand,model,year,color}