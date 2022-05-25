const formAdd = document.admAdd

formAdd.addEventListener('submit', async (event) => {
  event.preventDefault();

  const {
    name: {value: name},
    price: {value: price},
    category: {value: category}
  } = event.target
  console.log(name, price, category)

  const req = await fetch('/admin/add', {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify({name, price, category})
  })

  if (req.ok) {
    document.querySelector('.msg').innerText = 'Added!'
  } else {
    document.querySelector('.msg').innerText = (await req.json()).message
  }
})
