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

// Attach event listeners to buttons
document.getElementById("login").addEventListener("click", setCookies);
document.getElementById("showcookies").addEventListener("click", showCookies);
