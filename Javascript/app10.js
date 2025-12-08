// spell of greeting users

function greetUser(name) {
  console.log("Hello, " + name + ", welcome to the site!");
}

greetUser("students");

//basic addition function
function add(a, b) {
  let result = a + b;
  console.log("The sum is: " + result);
}
add(4, 5);

//messege mixer
function greet(name) {
  return "welcome, " + name + "!";
}
let messege = greet("Tyler");
console.log(messege);

//loop of five echoes

for (let i = 0; i < 5; i++) {
  console.log("Echo " + (i + 1));
}

//summon a range
function printRange(start, end) {
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
}
printRange(1, 10);

//array charm

function printArrayElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printArrayElements(["apple", "banana", "cherry"]);

//count the even spirits

function countEevens(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}
let evenCount = countEevens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log("Number of even numbers:", evenCount);

// why do i use the count++ because it increases the count by 1 each time an even number is found

//find the max relic
function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
let maximum = findMax([3, 7, 2, 9, 4]);
console.log("The maximum value is:", maximum);

// why do i start the loop at 1 because we have already assigned the first element of the array to max, so we can start checking from the second element onward

// fizzbuzz challenge

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(15);

// why do i check i % 3 === 0 && i % 5 === 0 first because numbers divisible by both 3 and 5 should print "FizzBuzz" instead of just "Fizz" or "Buzz"
