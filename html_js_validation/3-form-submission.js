// form-validation.js

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Retrieve the form field values
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
  
    // Retrieve the values entered in the form fields
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
  
    // Validate the form fields
    if (name === "" || email === "") {
      // Display an error message if any required fields are empty
      displayErrorMessage("Please fill in all required fields");
    } else {
      // If all validations pass, display a success message
      displaySuccessMessage("Form submitted successfully!");
      // You can also submit the form here if needed
      // For example: document.getElementById("submitForm").submit();
    }
  }
  
  function displayErrorMessage(message) {
    // Create an error message element
    const errorElement = document.createElement("p");
    errorElement.className = "error-message";
    errorElement.textContent = message;
  
    // Insert the error message before the form
    const form = document.getElementById("submitForm");
    form.parentNode.insertBefore(errorElement, form);
  }
  
  function displaySuccessMessage(message) {
    // Create a success message element
    const successElement = document.createElement("p");
    successElement.className = "success-message";
    successElement.textContent = message;
  
    // Insert the success message before the form
    const form = document.getElementById("submitForm");
    form.parentNode.insertBefore(successElement, form);
  }
  
  // Add an event listener to the form for the "submit" event
  const form = document.getElementById("submitForm");
  form.addEventListener("submit", handleFormSubmit);
  