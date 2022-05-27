const formAdd = document.admAdd
const moreImg = document.getElementById('more')

let count = 0;

moreImg.addEventListener('click', (event) => {
  event.preventDefault();

  const uploadBtn = document.createElement('li')
  uploadBtn.innerHTML = `<input type="file" name="img${count}">`
  count += 1;
  const btnx = document.querySelector('.buttons')
  btnx.prepend(uploadBtn);
})

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
