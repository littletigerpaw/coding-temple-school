// Pascal Case
class UserAccount {
  constructor(name) {
    this.name = name;
  }
}

//camelCase

let userNAme = "john";
function getUserInfo() {}

//SNake case

const MAX_USERS = 100;
const API_URL = "<HTTPS://api.example.com>";

//example 5
let cartItems = ["apple", "banana", "orange"];
for (let i = 0; i < cartItems.length; i++) {
  console.log(cartItems[i]);
}
//how do i get the lenght of the array to print twice

function printCart() {
  for (let i = 0; i < cartItems.length; i++) {
    console.log("Item:" + cartItems[i]);
  }
}
printCart();

function checkCartStatus() {
  if (cartItems.length === 0) {
    console.log(" your cart is empty");
  } else {
    console.log(" you have items in your cart");
  }
}

checkCartStatus();
