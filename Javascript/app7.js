// 1
let number = 17;

if (number > 0) {
  console.log("number is posotive");
} else if (number < 0) {
  console.log("number is negative");
} else {
  console.log("number is zero");
}
//3
let score = 25;

if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 50) {
  console.log("Grade C");
} else if (score >= 0) {
  console.log("Grade F");
}

//5
let numbers = 4;
if (Number.isInteger(numbers)) {
  if (Number.isInteger(Math.sqrt(numbers))) {
    console.log("number is a perfect square");
  }
}
//6
let isonline = true;

let messege = isonline ? "you are online" : "you are offline";
console.log(messege);

let weekday = true;
let messege2 = weekday ? " it's a weekday" : " it's a weekend";
console.log(messege2);

let day = "saturday";

if (
  day == "monday" ||
  day == "tuesday" ||
  day == "wednesday" ||
  day == "thursday" ||
  day == "friday"
) {
  console.log(" it's a weekday");
} else {
  console.log(" it's a weekend");
}

let num = 20;
if (num % 2 === 0 && num % 5 === 0) {
  console.log("valid number");
}
