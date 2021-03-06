/* eslint-disable */
/* global Product, Cart */

'use strict';

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i in Product.allProducts) {
    var option = document.createElement('option');
    option.textContent = Product.allProducts[i].name;
    selectElement.appendChild(option);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  saveCartToLocalStorage();
  updateCounter();
  updateCartPreview();
}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, create a new Cart item instance
  var selectElement = document.getElementById('items');
  var quantityElement = document.getElementById('quantity');

  var newItem = new Cart(selectElement.value, quantityElement.value);
}

// TODO: Save the contents of the cart to Local Storage
function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(Cart.allItems));
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  var quantityElement = document.getElementById('quantity');
  var itemCount = document.getElementById('itemCount');
  if (itemCount.textContent !== '') {
    itemCount.textContent =
      parseInt(itemCount.textContent) + parseInt(quantityElement.value);
    console.log(quantityElement.value);
  } else {
    itemCount.textContent = parseInt(quantityElement.value);
  }
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  var selectElement = document.getElementById('items');
  var quantityElement = document.getElementById('quantity');
  var cartPreview = document.getElementById('cartContents');
  var cartItem = document.createElement('p');
  cartItem.classList.add('animate-added-cart');
  cartItem.textContent = `${selectElement.value} added to cart! ${
    quantityElement.value
  } item(s)`;
  cartPreview.appendChild(cartItem);
}
// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
