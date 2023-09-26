// Import the js-cookie library
import Cookies from 'js-cookie';

function setCookiesAndShowWelcomeMessage() {
  const firstnameInput = document.getElementById('firstname').value;
  const emailInput = document.getElementById('email').value;

  // Calculate the expiration date in milliseconds (10 days from now)
  const expirationDate = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);

  // Set the cookies using js-cookie
  Cookies.set('firstname', firstnameInput, { expires: expirationDate });
  Cookies.set('email', emailInput, { expires: expirationDate });

  showWelcomeMessageOrForm();
}

function showWelcomeMessageOrForm() {
  const firstnameCookie = Cookies.get('firstname');
  const body = document.body;

  if (firstnameCookie) {
    // Create a welcome message using JavaScript
    const welcomeMessage = document.createElement('h1');
    welcomeMessage.textContent = `Welcome ${firstnameCookie} `;
    
    // Create a logout link using JavaScript
    const logoutLink = document.createElement('a');
    logoutLink.textContent = '(logout)';
    logoutLink.style.fontWeight = 'normal';
    logoutLink.style.fontStyle = 'italic';
    logoutLink.style.marginLeft = '10px';
    logoutLink.href = '#';
    
    // Add a click event to the logout link
    logoutLink.addEventListener('click', () => {
      deleteCookiesAndShowForm();
      welcomeMessage.remove();
    });

    // Append the logout link to the welcome message
    welcomeMessage.appendChild(logoutLink);

    // Replace the body content with the welcome message
    //body.innerHTML = '';
    body.appendChild(welcomeMessage);
  } else {
    showForm();
  }
}

function showForm() {
  const welcomeMessage = document.querySelector('h1');
  if (welcomeMessage) {
    welcomeMessage.remove();
  }

  const loginForm = document.getElementById('login-form');
  loginForm.style.display = 'block';
}

function deleteCookiesAndShowForm() {
  // Delete cookies using js-cookie
  Cookies.remove('firstname');
  Cookies.remove('email');

  showForm();
}

// Attach event listener to the Log In button
document.getElementById('login').addEventListener('click', setCookiesAndShowWelcomeMessage);

// Attach event listener to the Show the cookies button
document.getElementById('showcookies').addEventListener('click', showCookies);

// Call showWelcomeMessageOrForm to initialize the page
showWelcomeMessageOrForm();
