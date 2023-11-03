const body = document.querySelector("body");

const askButton = document.createElement("button");
askButton.classList.add("ask-button");
body.appendChild(askButton);

const container = document.createElement("div");
container.id = "container";
body.appendChild(container);

askButton.addEventListener("click", removeAllSquares);

function createGrid(rows, columns) {
  // Calculate the width and height of the squares
  let squareWidth = 660 / columns;
  let squareHeight = 660 / rows;

  for (let row = 0; row < rows; row++) {
    for (let column = 0; column < columns; column++) {
      const squareItem = document.createElement("div");
      squareItem.classList.add("square");

      // Set the adjusted width and height for each square
      squareItem.style.width = squareWidth + "px";
      squareItem.style.height = squareHeight + "px";

      container.appendChild(squareItem);
    }
  }
}
// Initial creation of the grid
createGrid(16, 16);

const getAllSquares = document.querySelectorAll(".square");

getAllSquares.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundColor = "green";
  });

  item.addEventListener("mouseout", () => {
    item.style.backgroundColor = "#fff";
  });
});

function removeAllSquares() {
  getAllSquares.forEach((square) => {
    container.removeChild(square);
  });
}
