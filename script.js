const body = document.querySelector("body");

const container = document.createElement("div");
container.id = "container";
body.appendChild(container);

//Get viewport Height and Width
const viewportHeight = window.innerHeight;
const viewportWidth = window.innerWidth;

const squareHeight = 16;
const squareWidth = 16;
console.log(squareHeight);

const numberOfRows = Math.floor(viewportHeight / squareHeight);
const numberOfColumns = Math.floor(viewportWidth / squareWidth);

//Create the Grid
for (let row = 0; row < numberOfRows; row++) {
  for (let column = 0; column < numberOfColumns; column++) {
    const squareItem = document.createElement("div");
    squareItem.classList.add("square");
    container.appendChild(squareItem);
  }
}
