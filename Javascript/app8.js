// name of block code that performs a task
function printSometing() {
  console.log(1);
  console.log(2);
  console.log(3);
  console.log(4);
}

printSometing();

//
function greetUser() {
  console.log("hello, welcome to the site");
}

greetUser();

//
function add(a, b) {
  let result = a + b;
  console.log(result);
}

add(2, 3);

// dry
//do not repeat yourself

function welcome(name) {
  console.log("welcome, " + name);
}

welcome("whoever");

//
function sayHi() {
  console.log("Hi");
}

function getHi() {
  return "Get Hi";
}

sayHi();
let messege = getHi();
console.log(messege);

//
function calculateArea(width, height) {
  return width * height;
}

let area1 = calculateArea(5, 10);
let area2 = calculateArea(3, 7);

console.log("area1:", area1);
console.log("Area2:", area2);

// mini challenge
function double(number) {
  return number * 2;
}
let result = double(5);
console.log(result);

//
function fullName(name) {
  console.log("Tyler " + name);
}
fullName("Faulkner");

//

function isEven(number) {
  return number % 2 === 0;
}
let checkeven = isEven(7);
console.log(checkeven);
//why do i divid by two. because even numbers are divisible by two with no remainder
// where does checkeven come from. its a variable that stores the return value of the function isEven when we pass in 7 as an argument
