// Select container
const container = document.querySelector(".container");

// Reset button
const reset = document.querySelector(".reset");

reset.addEventListener("click", () => {
  //   container.innerHTML = "";
  createGrid();
});

//Create grid

const createGrid = () => {
  //Size prompt
  let side = prompt("Number of squares per side (max 100)");

  //Check that side size is under 100
  if (side > 100 || side !== "number" || side === 0) {
    alert("Size must be a number under 100 and over 0!");
  } else {
    console.log(side);
    // Calculate grid size
    const gridSize = side * side;

    //Calculate pixel size
    const pixelSize = 400 / side;

    // Loop over to create divs
    for (let i = 0; i < gridSize; i++) {
      const pixel = document.createElement("div");

      // Get the size of each div
      pixel.style.height = `${pixelSize}px`;
      pixel.style.width = `${pixelSize}px`;

      // Append to the container
      container.appendChild(pixel);

      // Event listener when mouse goes over div
      pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = "black";
      });
    }
  }
};

createGrid();
