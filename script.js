// Select container
const container = document.querySelector(".container");

// Reset button
const reset = document.querySelector(".reset");

reset.addEventListener("click", () => {
  container.innerHTML = "";
  createGrid();
});

//Create grid

const createGrid = () => {
  //Size prompt
  let size = prompt("Number of squares per side (max 100)");

  //Check that size is under 100
  if (size > 100 || size === 0 || size === "") {
    alert("Size must be under 100 and over 0!");
  } else {
    console.log(size);
    // Calculate grid size
    const gridSize = size * size;

    //Calculate pixel size
    const pixelSize = 400 / size;

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
