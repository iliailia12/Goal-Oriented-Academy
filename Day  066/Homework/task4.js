function findLargestNumber(numbers) {
    if (numbers.length === 0) return null; 

    let largest = numbers[0];  

    for (let num of numbers) {
        if (num > largest) {
            largest = num;  
        }
    }

    return largest;  
}

