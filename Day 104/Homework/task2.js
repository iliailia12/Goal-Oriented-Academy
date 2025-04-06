let cartItems = ['apple', 'banana', 'orange'];
let prices = [1.2, 0.5, 0.8];


function addItem(item, price) {
  cartItems.unshift(item);
  prices.unshift(price);
  return { cartItems, prices };
}


function removeFirstItem() {
  cartItems.shift();
  prices.shift();
  return { cartItems, prices };
}


function replaceItem(index, newItem, newPrice) {
  if (index >= 0 && index < cartItems.length) {
    cartItems.splice(index, 1, newItem);
    prices.splice(index, 1, newPrice);
  }
  return { cartItems, prices };
}

function createReceipt() {
  return cartItems.join(', ');
}


function applyDiscount(discountPrice) {
  prices.fill(discountPrice);
  return prices;
}


console.log(addItem('grape', 1.5));
console.log(removeFirstItem());
console.log(replaceItem(1, 'kiwi', 0.7));
console.log(createReceipt());
console.log(applyDiscount(0.99));