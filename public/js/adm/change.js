const newBoxes = document.querySelectorAll('.new')
const orders = document.querySelector('.orders')

for (let box of newBoxes) {
  box.innerText = (box.innerText === 'true') ? 'Новый' : 'Б/У'
}

orders.addEventListener('click', (event) => {
  if (event.target.classList.contains('edit')) {
    const par = event.target.parentNode
    const devId = event.target.parentNode.id;

    const statHtml = document.querySelectorAll('.stat')
    let options = ''
    for (let el of statHtml) {
      options += `<option>${el.innerHTML}</option>`
    }

    par.querySelector('.status').innerHTML = `
    <select class="upd-status">
      ${options}
    </select> 
    `
    par.querySelector('.edit').remove()
    par.innerHTML += `<button class="save">Save</button>`

    par.querySelector('.save').addEventListener('click', async (e) => {
      const status = par.querySelector('.upd-status').value

      const req = await fetch(`/admin/order/${devId}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({status, id: devId})
      })

      if (req.ok) {
        par.querySelector('.upd-status').remove()
        par.querySelector('.status').innerHTML = status
        par.querySelector('.save').remove();
        par.innerHTML += `<button class="edit">change status</button>`
      } else {
        alert((await req.json()).message)
      }
    })
  }
})



