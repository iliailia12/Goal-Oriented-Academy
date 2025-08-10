// JavaScript Bookstore Analysis with every(), some(), and forEach()
// Task:

// You are working with an array of customer order objects for an online bookstore. Each order object has the following properties:

 
// orderId: (number) A unique identifier for the order.
// customerId: (number) The ID of the customer who placed the order.
// items: (array of objects) An array of book objects in the order. Each book object has:
// title: (string) The title of the book.
// price: (number) The price of the book.
// quantity: (number) The quantity of the book ordered.
// shippingAddress: (string) The shipping address for the order.
// isDelivered: (boolean) Indicates if the order has been delivered.
 
// -

// every(): Check if all orders in the customerOrders array have at least one item in their items array (i.e., no empty orders). Store the result (a boolean) in a variable called allOrdersHaveItems. Log the result.
 
// some(): Check if there is at least one order in the customerOrders array that has not yet been delivered (isDelivered is false). Store the result (a boolean) in a variable called hasPendingDelivery. Log the result.

// forEach() (Outer Loop): Iterate through each order in the customerOrders array. For each order, log a message to the console indicating the orderId. The message should be in the format: "Processing Order ID: [orderId]".

// forEach() (Nested Loop): Within the forEach() loop from Task 3, for each order, use another forEach() loop to iterate through the items array of that order. For each item, log the title and quantity of the book in the format: " - [title] (Quantity: [quantity])".

// every() (Nested within forEach): Iterate through each order using forEach(). Inside this loop, use the every() method on the items array of the current order to check if all books in that specific order have a price greater than $10. For each order, log a message indicating whether all books in that order are expensive (price > $10). The message should be in the format: "Order [orderId] contains only expensive books: [true/false]".

// some() (Nested within forEach): Iterate through each order using forEach(). Inside this loop, use the some() method on the items array of the current order to check if at least one book in that specific order has a quantity greater than 1. For each order, log a message indicating whether the order contains any multiple copies of a book. The message should be in the format: "Order [orderId] has multiple copies of at least one book: [true/false]".
// ბატონი დავით ჯანეზაშვილი — Yesterday at 9:53 AM
