/* eslint-disable */

'use strict';

var Cart = [];

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
// table.addEventListener('click', removeItemFromCart);

function loadCart() {
  Cart = JSON.parse(localStorage.getItem('cart')) || [];
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var cartClear = document.getElementsByTagName('tr');
  // cartClear.remove();
  // Cart = [];
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  console.log(Cart);
  // TODO: Find the table body
  var tableBody = document.getElementsByTagName('tbody')[0];
  // TODO: Iterate over the items in the cart
  if (Cart.length !== 0) {
    for (var i = 0; i < Cart.length; i++) {
      // TODO: Create a TR
      var tableRow = document.createElement('tr');
      var itemData = document.createElement('td');
      var quantityData = document.createElement('td');
      var removeButton = document.createElement('td');
      removeButton.setAttribute('id', Cart[i].item);
      removeButton.addEventListener('click', removeItemFromCart);
      itemData.textContent = Cart[i].item;
      quantityData.textContent = Cart[i].quantity;
      removeButton.textContent = 'X';
      tableRow.appendChild(removeButton);
      tableRow.appendChild(quantityData);
      tableRow.appendChild(itemData);
      tableBody.appendChild(tableRow);
    }
    var deleteTableButton = document.createElement('button');
    deleteTableButton.textContent = 'Delete Cart';
    var table = document.getElementById('cart');
    table.appendChild(deleteTableButton);
  }
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
}

function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, rebuild the Cart array without that item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
}

// This will initialize the page and draw the cart on screen
renderCart();
