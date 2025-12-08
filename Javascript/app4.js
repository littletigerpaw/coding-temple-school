for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let i = 1;

while (i <= 3) {
  console.log("iteration:", i);
  i++;
}

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(`i=${i}, j=${j}`);
  }
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  if (i == 3) continue;
  console.log(i);
}

for (i = 10; i > 0; i--) console.log(i);
