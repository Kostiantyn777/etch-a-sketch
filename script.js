const body = document.querySelector("body");

const askButton = document.createElement("button");
askButton.classList.add("ask-button");
body.appendChild(askButton);

const container = document.createElement("div");
container.id = "container";
body.appendChild(container);

let getAllSquares = document.querySelectorAll(".square");
console.log(getAllSquares);

function createGrid(rows, columns) {
  getAllSquares = document.querySelectorAll(".square");
  console.log(getAllSquares);
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


function setPixelatedTrailThroughGrid() {
  getAllSquares.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.style.backgroundColor = "green";
    });

    item.addEventListener("mouseout", () => {
      item.style.backgroundColor = "#fff";
    });
  });
}

// Add event listeners to squares
setPixelatedTrailThroughGrid();

function removeAllSquares() {
  console.log(getAllSquares);
  getAllSquares.forEach((square) => {
    square.remove();
  });
}

askButton.addEventListener("click", () => {
  let getAnswerFromUser = +prompt(
    "Please type the number (FROM 2 to 100) of squares per side for the new grid"
  );

  if (getAnswerFromUser >= 2 && getAnswerFromUser <= 100) {
    createGrid(getAnswerFromUser, getAnswerFromUser);
    removeAllSquares();
    // setPixelatedTrailThroughGrid();
  }
});
