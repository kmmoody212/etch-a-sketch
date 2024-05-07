const container = document.querySelector(".container");

function makeGrid(numDivs) {
  for (let i = 0; i < numDivs * numDivs; i++) {
    const square = document.createElement("div");
    container.appendChild(square);
    container.classList.add("container");
    square.classList.add("square");
  }
}

makeGrid(16);
