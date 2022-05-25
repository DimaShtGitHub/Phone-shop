const loginForm = document.admLogin;

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const {
    login: {value: login},
    password: {value: password}
  } = event.target;

  const req = await fetch('/admin', {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({login, password})
  })

  if (!req.ok) {
    document.querySelector('.msg').innerText = (await req.json()).message
  } else {
    window.location.href = '/admin'
  }
})
