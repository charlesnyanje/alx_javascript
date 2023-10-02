// Function to validate the email format
function validateEmail() {
    // Get the input element by its ID
    const emailInput = document.getElementById("email");

    // Get the value entered in the email input field
    const emailValue = emailInput.value;

    // Regular expression to validate the email format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Get the error element by its ID
    const errorElement = document.getElementById("error");

    // Check if the email format is correct
    if (emailRegex.test(emailValue)) {
        // Clear any previous error message
        errorElement.textContent = "";
        // Allow the form submission
        return true;
    } else {
        // Display an error message
        errorElement.textContent = "Please enter a valid email address.";
        // Prevent the form from submitting
        return false;
    }
}

// Add an event listener to the form for form submission
const emailForm = document.getElementById("emailForm");
emailForm.addEventListener("submit", function (event) {
    // Validate the email format when the form is submitted
    if (!validateEmail()) {
        // Prevent the default form submission behavior if the email format is not valid
        event.preventDefault();
    }
});
