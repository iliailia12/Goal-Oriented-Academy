function filterEvenNumbers(arr) {
    const evenNumbers = [];
    for (const number of arr) {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        }
    }
    return evenNumbers;
}

function filterEvenNumbersWithFilter(arr) {
    return arr.filter(number => number % 2 === 0);
}

