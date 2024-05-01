const container = document.querySelector(".container");

function makeGrid(numDivs) {
  for (let i = 0; i < numDivs; i++) {
    const square = document.createElement("div");
    container.appendChild(square);
    square.classList.add("square");
  }
}

makeGrid(256);
