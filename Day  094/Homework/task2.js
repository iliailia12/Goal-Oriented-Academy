// Prompt
// Task: Create a function that prompts the user 
// for an email address, and then displays the text 'access granted'
//  after the user enters it.

function promptEmail() {
    const email = prompt("Please enter your email address:");
    if (email) {
        alert("Access granted");
    }
}


promptEmail();