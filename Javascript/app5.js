//1
for (i = 1; i <= 10; i++) {
  console.log(i);
}
//2
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
//3
for (i = 10; i > 0; i--) {
  console.log(i);
}
//4
let sum = 0;
for (let i = 1; i <= 5; i++) {
  sum += i;
}
console.log("sum:", sum);
//5
for (let i = 1; i <= 5; i++) {
  let square = i * i;
  console.log("square:", square);
}

let number = 1;
let sqaure = number * number;
console.log("square:", sqaure);

number = 2;
let square2 = number * number;
console.log("square:", square2);

number = 3;
let square3 = number * number;
console.log("square:", square3);

number = 4;
let square4 = number * number;
console.log("square:", square4);

number = 5;
let square5 = number * number;
console.log("square:", square5);
//6
let animals = ["cat", "dog", "rabbit", "parrot"];
for (let cat of animals) {
  console.log("Animal:", cat);
}

let animal = ["cat", "dog", "rabbit", "parrot"];
for (let i = 0; i < animal.length; i++) {
  console.log(animal[i]);
}
//7
let names = ["ali", "sara", "john"];
console.log("Names:", names);

function greet(ali) {
  return "Hello, " + ali + "!";
}
console.log(greet("ali"));

function greet(sara) {
  return "Hello, " + sara + "!";
}
console.log(greet("sara"));

function greet(john) {
  return "Hello, " + john + "!";
}
console.log(greet("john"));

let name = ["ali", "sara", "john"];
for (let i = 0; i < name.length; i++) {
  console.log("hello", name[i]);
}
//8
let original = [1, 2, 3, 4];
let doubled = [];
for (let i = 0; i < original.length; i++) {
  doubled.push(original[i] * 2);
}
console.log("doubled:", doubled);
//9
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
//10
let count = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

//skip 5
for (i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}

//stop 7

for (let i = 1; i <= 10; i++) {
  if (i === 7) {
    break;
  }
  console.log(i);
}
