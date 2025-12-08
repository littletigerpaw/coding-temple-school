const createBoxButton = document.getElementById("createBox");
const removeBoxesButton = document.getElementById("removeBoxes");
const boxContainer = document.getElementById("boxContainer");

function getRandomColor() {
  const colors = [
    "#e74c3c",
    "#3498db",
    "#2ecc71",
    "#f1c40f",
    "#9b59b6",
    "#e67e22",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function createBox() {
  const box = document.createElement("div");
  // create a bew div

  box.classList.add("box");
  // add the box class for styling
  box.style.backgroundColor = getRandomColor();

  //apply a random color

  box.innerText = document.querySelectorAll(".box").length + 1;

  //display box number

  boxContainer.appendChild(box);
  //append the new box inside the container
}

function removeAllBoxes() {
  boxContainer.innerHTML = "";
  // clears the container inner content
}

// event listeners for buttin clicks

createBoxButton.addEventListener("click", createBox);

removeBoxesButton.addEventListener("click", removeAllBoxes);
