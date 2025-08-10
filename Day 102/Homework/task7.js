// Description: Write a function that takes an array as an argument and creates a new array containing only the 
// even-indexed elements of the original array using a for loop.


function evenIndexedElements(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += 2) {
        newArr.push(arr[i]);
    }
    return newArr;
}


