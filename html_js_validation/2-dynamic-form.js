document.addEventListener("DOMContentLoaded", function () {
  // Function to generate input fields based on selected value
  function generateInputFields(num) {
    const inputContainer = document.getElementById("inputContainer");
    inputContainer.innerHTML = ""; // Clear previous inputs

    for (let i = 1; i <= num; i++) {
      const input = document.createElement("input");
      input.type = "text";
      input.name = "field" + i;
      input.placeholder = "Field " + i;
      inputContainer.appendChild(input);
    }
  }

  // Function to validate form before submission
  function validateForm(event) {
    const numFields = document.getElementById("numFields").value;
    const inputContainer = document.getElementById("inputContainer");
    const inputs = inputContainer.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].value.trim() === "") {
        alert("Please fill in all fields");
        event.preventDefault(); // Prevent form submission
        return;
      }
    }
  }

  // Add event listener for form submission
  const dynamicForm = document.getElementById("dynamicForm");
  dynamicForm.addEventListener("submit", validateForm);

  // Add event listener for dropdown change
  const numFieldsDropdown = document.getElementById("numFields");
  numFieldsDropdown.addEventListener("change", function () {
    const selectedValue = parseInt(numFieldsDropdown.value);
    generateInputFields(selectedValue);
  });

  // Initialize input fields based on the default value of the dropdown
  generateInputFields(parseInt(numFieldsDropdown.value));
});
