// 1
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

// 2
function add_numbers(num1, num2 = 0) {
    return num1 + num2;
}

// 3
function calculate_area(length, width = 1) {
    return length * width;
}

// 4
function convert_temperature(temperature, scale = "C") {
    if (scale === "C") {
        return (temperature * 9/5) + 32; 
    } else if (scale === "F") {
        return (temperature - 32) * 5/9; 
    } else {
        throw new Error("Scale must be 'C' or 'F'");
    }
}

// 5
function add_to_shopping_list(item, quantity = 1) {
    return `${quantity} x ${item}`;
}

// 6
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}

// 7
function create_message(name, greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

// 8
function apply_discount(price, discount = 0.10) {
    return price - (price * discount);
}

// 9
function introduce(name, age = "unknown", country = "unknown") {
    return `Hi, I'm ${name}, I'm ${age} years old and I'm from ${country}.`;
}

//10
function calculatePrice(price, salesTax = 0.05) {
    const finalPrice = price + (price * salesTax);
    return finalPrice;
}

11
function findMax(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    } else if (num2 >= num1 && num2 >= num3) {
        return num2;
    } else {
        return num3;
    }
}
12
function passOrFail(score) {
    if (score >= 50) {
        return "Pass";
    } else {
        return "Fail";
    }
}

13
function sumOfNumbers(numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}


14
function countEvens(integers) {
    let count = 0;
    for (let number of integers) {
        if (number % 2 === 0) {
            count++;
        }
    }
    return count;
}
