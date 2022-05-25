const formAdd = document.admAdd

formAdd.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = new FormData(formAdd)

  const req = await fetch('/admin/add', {
    method: "POST",
    body: formData
  })

  if (req.ok) {
    document.querySelector('.msg').innerText = 'Added!'
  } else {
    document.querySelector('.msg').innerText = (await req.json()).message
  }
})
