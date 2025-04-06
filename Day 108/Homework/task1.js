// # Level 108:
//    # write me one more task about date object

//     #  - 1.  Create a function that displays the current date and time in the format YYYY-MM-DD HH:MM:SS.

//     #  - 2. Create a function that takes a user's birthdate as input and calculates their age in years, months, and days. ---- display result on webpage

//    #  - 3.  Write a function that takes a date as input and displays the corresponding day of the week (e.g., "Monday", "Tuesday").









//    # -----------------

// # Using setInterval

// # - 4. Create a timer that starts counting from 0 and updates every second.

// # - 5. Write a function that displays the current time (hours, minutes, and seconds) and updates every second using setInterval.

// # -  6. Write a function that logs a random number between 0 and 1 to the console every second using setInterval.







// # -----------------

// # Using setTimeout 

// # - 7.  Delayed Message
//        - Write a function that displays a message after a user-defined delay.
//        - Allow the user to input the message and the delay in milliseconds.

// # - 8. Write a function that logs a simple greeting message to the console after a short delay.

// # - 9.  Delayed Chain of Functions
//        - Write a series of functions that each log a different message to the console.

//        - Use setTimeout to execute these functions in sequence, with a delay between each function call.










//        # ---------------------

// # Task that combines Date Object and setInterval
// #  - 10. Personalized Dynamic Greeting

//       - Create a function that uses the current time to display a personalized greeting message based on the time of day:

//       - "Good Morning" if the time is before 12 PM.

//       - "Good Afternoon" if the time is between 12 PM and 6 PM.

//      - "Good Evening" if the time is after 6 PM.

//      - Update the greeting message every second using setInterval.









function greet()  {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timeOfDay;
    if (hours < 12) {
        timeOfDay = "morning";
        } else if (hours < 18) {
            timeOfDay = "afternoon";
            } else {
                timeOfDay = "evening";
            }
            let greeting = `Good ${timeOfDay}, it's ${hours}:${minutes}:${seconds}`;
            console.log(greeting);
            setTimeout(greet, 1000);
            }
            greet();
            console.log(greet());
            return greeting;
        