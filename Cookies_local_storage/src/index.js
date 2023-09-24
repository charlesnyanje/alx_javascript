// Import the 'js-cookie' library for handling cookies
import Cookies from 'js-cookie';

function setCookies() {
  const firstnameInput = document.getElementById('firstname').value;
  const emailInput = document.getElementById('email').value;

  // Set cookies with 'js-cookie' library
  Cookies.set('firstname', firstnameInput);
  Cookies.set('email', emailInput);

  // Clear input fields after setting cookies
  document.getElementById('firstname').value = '';
  document.getElementById('email').value = '';
}

function showCookies() {
  const outputDiv = document.getElementById('output');
  const firstnameCookie = Cookies.get('firstname');
  const emailCookie = Cookies.get('email');

  // Create a paragraph element to display cookies
  const paragraph = document.createElement('p');
  paragraph.innerHTML = `Cookies: First Name - ${firstnameCookie}, Email - ${emailCookie}`;

  // Append the paragraph to the output div
  outputDiv.appendChild(paragraph);
}

// Export the functions for access in HTML
window.setCookies = setCookies;
window.showCookies = showCookies;
