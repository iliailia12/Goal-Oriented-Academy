// Task 3: Playlist Management
// Objective: To manage a music playlist using various array methods.

// Instructions:

// Create an array called playlist with the following initial elements:

// Write a function called addSong that takes a song title as input, adds it to the beginning of the playlist using unshift, and returns the updated playlist.

// Write a function called removeLastSong that uses pop to remove the last song from the playlist and returns the updated playlist.

// Write a function called moveSongs that uses copyWithin to move the first two songs to the end of the playlist and returns the updated playlist.

// Write a function called combinePlaylists that takes a second playlist array as input, concatenates it with the current playlist using concat, and returns the combined playlist.


// Task 2:  Student Grades Management
// Objective: To manage student grades using various array methods.

// Instructions:

// Create an array called students and an array called grades with the following initial elements:

// Write a function called addStudent that takes a student name and grade as input, adds them to the respective arrays using unshift, and returns the updated arrays.

// Write a function called removeLastStudent that uses pop to remove the last student and their grade from the arrays and returns the updated arrays.

// Write a function called replaceGrade that uses splice to replace the grade of a student by their index in the array and returns the updated grades array.

// Write a function called updateGrades that uses fill to update all grades to a specific value and returns the updated grades array.





// Task 1
// JavaScript Array Methods Task: Comprehensive Exercise

// Objective: To practice using the concat, copyWithin, fill, pop, shift, unshift, join, slice, and splice array methods.


// Instructions:

// Create three arrays: arr1, arr2, and arr3 with the following elements:

// Concatenate arr1 and arr2 into a new array called mergedArray.

// Use the copyWithin method to copy the first three elements of mergedArray to the positions starting from index 5.

// Use the fill method to replace elements from index 6 to the end with the number 0.

// Remove the last element from mergedArray using the pop method.

// Remove the first element from mergedArray using the shift method.

// Add the elements 100 and 200 to the beginning of mergedArray using the unshift method.

// Use the splice method to remove the elements at indices 2 and 3, and replace them with the elements of arr3.

// 9, Use the slice method to create a new array slicedArray that contains the last five elements of mergedArray.

// Use the join method to create a string from slicedArray, with elements separated by a comma 







let playlist = [
    "Song1",
    "Song2",
    "Song3",
    "Song4",
    "Song5"
];

let students = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve"
    ];
    let numbers = [1, 2, 3, 4, 5];
    let mergedArray = [...playlist, ...students];
    console.log(mergedArray);
    mergedArray.copyWithin(5, 0, 3);
    console.log(mergedArray);
    mergedArray.fill(0, 6);
    console.log(mergedArray);
    mergedArray.pop();