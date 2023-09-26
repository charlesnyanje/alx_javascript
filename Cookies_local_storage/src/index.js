function setCookies() {
  const firstnameInput = document.getElementById("firstname").value;
  const emailInput = document.getElementById("email").value;

  const expirationDate = new Date(Date.now() + 10 * 24 * 60 * 60 * 1000);

  const expires = `expires=${expirationDate.toUTCString()}`;

  document.cookie = `firstname=${firstnameInput}; ${expires}; path=/`;
  document.cookie = `email=${emailInput}; ${expires}; path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.trim().split("=");
    if (cookieName === name) {
      return decodeURIComponent(cookieValue);
    }
  }
  return "";
}

function showCookies() {
  const cookies = document.cookie.split(";");

  const firstnameCookie = getCookie("firstname");
  const emailCookie = getCookie("email");
  const cookiesOutput = document.getElementById("output");

  const p = document.createElement("p");
  p.innerHTML = `Email: ${emailCookie} - Firstname: ${firstnameCookie}`;

  cookies.forEach((cookie) => {
    const [name, value] = cookie.trim().split("=");
    p.innerHTML += `${name}=${value}, `;
  });

  cookiesOutput.innerHTML = "";
  cookiesOutput.appendChild(p);
}

function showForm() {
  const welcomeMessage = document.getElementById('welcome-message');
  if (welcomeMessage) {
    welcomeMessage.remove();
  }

  const loginForm = document.getElementById('login-form');
  loginForm.style.display = 'block';
}

function hideForm() {
  const loginForm = document.getElementById('login-form');
  loginForm.style.display = 'none';
}

function deleteCookiesAndShowForm() {
  document.cookie = 'firstname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  showForm();
}

function showWelcomeMessageOrForm() {
  const firstnameCookie = getCookie('firstname');
  const welcomeMessage = document.createElement('h1');
  welcomeMessage.id = 'welcome-message';

   if (firstnameCookie) {
    welcomeMessage.innerHTML = `Welcome ${firstnameCookie} <a href="#" id="logout-link">(logout)</a>`;
    welcomeMessage.style.fontWeight = 'normal';
    welcomeMessage.style.fontStyle = 'italic';
    welcomeMessage.style.marginRight = '10px';

    welcomeMessage.querySelector('#logout-link').addEventListener('click', () => {
      deleteCookiesAndShowForm();
      welcomeMessage.remove();
    });
  } else {
    showForm();
  }

  const body = document.body;
  //body.innerHTML = '';
  body.appendChild(welcomeMessage); 
}

// Attach event listeners to buttons
document.getElementById('login').addEventListener('click', setCookies);
document.getElementById('showcookies').addEventListener('click', showCookies);
document.getElementById('login-button').addEventListener('click', () => {
  hideForm();
  setCookies();
  showWelcomeMessageOrForm();
});

// Call showWelcomeMessageOrForm to initialize the page
showWelcomeMessageOrForm();
