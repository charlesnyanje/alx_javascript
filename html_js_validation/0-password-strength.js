// Function to validate the password
function validatePassword() {
    const passwordInput = document.getElementById('password');
    const errorElement = document.getElementById('error')

    const lengthRegex = /.{8,}/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*]/;

    if (!lengthRegex.test(passwordInput.value)) {
        errorElement.textContent = 'Password must be at least 8 characters long.';
        return false;
    }
    
    if (!uppercaseRegex.test(passwordInput.value)) {
        errorElement.textContent = 'Password must contain at least one uppercase letter.';
        return false;
    }

    if (!lowercaseRegex.test(passwordInput.value)) {
        errorElement.textContent = 'Password must contain at least one lowercase letter.';
        return false;
    }

    if (!digitRegex.test(passwordInput.value)) {
        errorElement.textContent = 'Password must contain at least one numeric digit.';
        return false;
    }

    if (!specialCharRegex.test(passwordInput.value)) {
        errorElement.textContent = 'Password must contain at least one special character (e.g., !@#$%^&*).';
        return false;
    }

    
    errorElement.textContent = '';
    return true;
}


const passwordForm = document.getElementById('passwordForm');
passwordForm.addEventListener('submit', function (event) {
    if (!validatePassword()) {
        event.preventDefault();
    }
});
