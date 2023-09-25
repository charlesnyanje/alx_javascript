function setCookies() {
  const firstnameInput = document.getElementById('firstname');
  const emailInput = document.getElementById('email');

  document.cookie = `firstname=${firstnameInput.value}`;
  document.cookie = `email=${emailInput.value}`;
}

function showCookies() {
  const cookies = document.cookie.split(';');
  const cookiesOutput = document.getElementById('output');

  const p = document.createElement('p');
  p.innerHTML = 'Cookies: ';

  cookies.forEach((cookie) => {
    const [name, value] = cookie.trim().split('=');
    p.innerHTML += `${name}=${value}, `;
  });

  cookiesOutput.innerHTML = ''; 
  cookiesOutput.appendChild(p);
}

// Attach event listeners to buttons
document.getElementById('login').addEventListener('click', setCookies);
document.getElementById('showcookies').addEventListener('click', showCookies);
