 
// Remove Elements
// Create a new <div> element with the text "This is a div."
// Append this <div> element to the body of the document.
// Remove the <div> element from the body of the document.
 
var div = document.createElement("div");
div.textContent = "This is a div.";
document.body.appendChild(div);
div.appendChild(document.createTextNode("This is a text node."));
div.parentNode.removeChild(div);
