// Description: Write a function that takes an array as an argument and returns the sum of
//  all elements in the array using a for loop.


function sumOfElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}