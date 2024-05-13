const container = document.querySelector(".container");

makeGrid(16); //sets a nice default grid 16 for first time when loading the page
// a function that makes a grid
function makeGrid(numDivs) {
  //clears the current grid
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  //creates the new grid
  for (let i = 0; i < numDivs * numDivs; i++) {
    const square = document.createElement("div");
    const size = 500 / numDivs;
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    container.appendChild(square);
    container.classList.add("container");
    square.classList.add("square");
  }
}

//makes the boxes remain colored after cursor hovers over
const fillGrid = document.querySelectorAll(".square");
function addHoverEvent() {
  fillGrid.forEach((square) => {
    square.addEventListener("mouseover", () => {
      square.classList.add("colored");
    });
  });
}

addHoverEvent();

//makes the button that is in the HTML be actually clickable and then makes it a window prompt
const btn = document.querySelector(".changeSize");
btn.addEventListener("click", () => {
  let reset = prompt("Please pick a number between 0 and 100", "16");

  makeGrid(reset);
  //creates a grid with the number from reset
});

//makes the reset button clickable and clear the current grid
function resetGrid() {
  document.querySelectorAll(".square").forEach(function (square) {
    square.style.backgroundColor = "white";
    square.classList.remove("colored");
  });
}
