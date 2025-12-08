//example 1
function greetEveryone(names) {
  for (let i = 0; i < names.length; i++) {
    console.log("hi, " + names[i]);
  }
}

greetEveryone(["ali", "sara", "john"]);

//example 2

function filterPositives(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
      result.push(numbers[i]);
    }
  }
  return result;
}
console.log(filterPositives([-1, 2, -3, 4])); //[2,4]

//example 3

function sumNumbers(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}
console.log(sumNumbers([10, 20, 30]));

//example 4

function isEven(num) {
  return num % 2 === 0;
}

console.log(isEven(6));
console.log(isEven(7));
//why do i % 2. because even numbers are divisible by two with no remainder
