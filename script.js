const body = document.querySelector("body");

const container = document.createElement("div");
container.id = "container";
body.appendChild(container);

//Get viewport Height and Width
const viewportHeight = window.innerHeight;
const viewportWidth = window.innerWidth;

let squareHeight = 16;
let squareWidth = 16;

const numberOfRows = Math.floor(viewportHeight / squareHeight);
const numberOfColumns = Math.floor(viewportWidth / squareWidth);

// Calculate the adjusted squareWidth and squareHeight based on the number of columns and rows
squareWidth = viewportWidth / numberOfColumns;
squareHeight = viewportHeight / numberOfRows;
console.log(squareWidth);
console.log(squareHeight);

//Create the Grid
for (let row = 0; row < numberOfRows; row++) {
  for (let column = 0; column < numberOfColumns; column++) {
    const squareItem = document.createElement("div");
    squareItem.classList.add("square");

    // Set the adjusted width and height for each square
    squareItem.style.width = squareWidth + "px";
    squareItem.style.height = squareHeight + "px";

    container.appendChild(squareItem);
  }
}

const getAllSquares = document.querySelectorAll(".square");

getAllSquares.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.backgroundColor = "green";
  });

  item.addEventListener("mouseout", () => {
    item.style.backgroundColor = "#fff";
  });
});
