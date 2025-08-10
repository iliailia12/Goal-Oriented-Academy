// Description: Write a function that takes two arrays as arguments, concatenates them, and then pushes a new value to the 
// end of the concatenated array. The function should return the new array.

function concatenateAndPush(arr1, arr2, value) {

  const concatenatedArray = arr1.concat(arr2);

  concatenatedArray.push(value);

  return concatenatedArray;
}