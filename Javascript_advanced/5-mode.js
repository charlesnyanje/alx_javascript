// Function to change the page style
function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size + "px";
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

// Function to set up the page
function main() {
  const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  // Add event listeners to buttons
  document.getElementById("spookyButton").addEventListener("click", spooky);
  document.getElementById("darkModeButton").addEventListener("click", darkMode);
  document
    .getElementById("screamModeButton")
    .addEventListener("click", screamMode);
}

// Call the main function
main();
