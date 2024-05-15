const container = document.querySelector(".container");

// a function that makes a grid
function makeGrid(numDivs) {
  //clears the current grid if any
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

  //function that defines that all the squares created in this run of the makegrid function can have a mouseover effect
  const fillGrid = document.querySelectorAll(".square");
  function addHoverEvent() {
    fillGrid.forEach((square) => {
      square.addEventListener("mouseover", () => {
        square.classList.add("colored");
      });
    });
  }

  addHoverEvent(); //adds hoverevent to the squares created in this run of the makegrid function
}

makeGrid(16); //sets a nice default grid 16 for first time when loading the page

//makes the button that is in the HTML be actually clickable and then makes it a window prompt
const btn = document.querySelector(".changeSize");
btn.addEventListener("click", () => {
  let reset = prompt("Please pick a number between 0 and 100", "16"); //sets input of the user to a variable called reset
  if (reset === null) {
    return;
  }
  while (reset > 100 || reset < 0) {
    reset = prompt("You must pick a number between 0 and 100! TRY AGAIN", "16");
  }
  makeGrid(reset);
});

//makes the reset button clickable and clear the current grid
function resetGrid() {
  document.querySelectorAll(".square").forEach(function (square) {
    //picks each square and runs an anyomyous function on those squares
    square.classList.remove("colored"); //removes the coloured CSS allowing the squares to go back to their default setting of white until they are hovered again and have coloured reapply
  });
}
