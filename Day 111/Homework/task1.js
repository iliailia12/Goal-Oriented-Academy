// Access Child Elements
// Create a new <ul> element with three <li> child elements, each containing text "Item 1", "Item 2", and "Item 3."
// Append the <ul> element to the body of the document.
// Access and log the first and last child elements of the <ul> element.



const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.textContent = 'Item 1';
const li2 = document.createElement('li');
li2.textContent = 'Item 2';
const li3 = document.createElement('li');
li3.textContent = 'Item 3';
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
document.body.appendChild(ul);
 
const firstChild = ul.children[0];

const lastChild = ul.children[2];
 
console.log(firstChild.textContent);
console.log(lastChild.textContent);
