let name = "Alice";
let age = 30;
let isstudent = true;
let fruits = ["apple", "banana", "cherry"];
let person = { name: "alice", age: "30" };

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isstudent);
console.log("Fruits:", fruits);
console.log("Person:", person);

let x = 5;
let y = 3;
let sum = x + y;
console.log("sum:", sum);
let difference = x - y;
console.log("difference:", difference);
let product = x * y;
console.log("product:", product);
let quotient = x / y;
console.log("quotient:", quotient);
let remainder = x % y;
console.log("remainder:", remainder);

if (x > y) {
  console.log("x is greater than y");
} else {
  console.log("x is not greater than y");
}

for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit:", fruits[i]);
}

function greet(personName) {
  return "Hello, " + personName + "!";
}
console.log(greet(name));

while (age < 35) {
  console.log("Age is less than 35:", age);
  age++;
}

switch (fruits[0]) {
  case "apple":
    console.log("It's an apple.");
    break;
  case "banana":
    console.log("It's a banana.");
    break;
  default:
    console.log("It's some other fruit.");
}

let isvalid = true || false;
console.log("isvalid:", isvalid);
