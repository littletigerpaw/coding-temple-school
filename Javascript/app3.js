let groceries = ["bread", "milk", "eggs", "cheese"];

console.log("First item :", groceries[0]);
groceries.push("butter");
console.log("updated list:", groceries);
groceries[1] = "almond milk";
console.log("Modified list:", groceries);

let fruits = ["apple", "banana", "carrot"];
console.log(fruits.length);

fruits.push("kiwi");
console.log(fruits);

fruits.pop();
console.log(fruits);

console.log(fruits.includes("banana"));

console.log(fruits.includes("ramen"));

console.log(fruits.indexOf("carrot"));

let tasks = ["study", "exercise", "call girlfriend"];

console.log("task count:", tasks.length);
tasks.push("read book");
console.log("after adding", tasks);
tasks.pop();
console.log("after removing:", tasks);
console.log("Have i called girlfriend?", tasks.includes("call girlfriend"));
console.log("index of exercise:", tasks.indexOf("exercise"));

let meats = ["chicken", "beef", "pork"];
console.log(meats.length);
meats[2] = "lamb";
console.log("updated list", meats);
meats.pop(2);
console.log("after removing:", meats);
meats.unshift("turkey");
console.log("updated list:", meats);

let numbers = [3, 6, 9, 12];
console.log(numbers.length);

numbers.push("15");
numbers[1] = null;
console.log("updated list:", numbers);

let colors = ["red", "blue", "green"];
colors[2] = "black";
console.log("updated colors:", colors);

let favourites = ["ribs", "pizza", "chicken"];
console.log(favourites.length);
favourites.push("burgers");
console.log("i like " + favourites[0] + " and " + favourites[3]);
