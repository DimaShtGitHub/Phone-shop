const itemsBox = document.querySelector('.items');

itemsBox.addEventListener('click', async (event) => {
  if (event.target.classList.contains('delete')) {
    const devId = event.target.parentNode.id

    const req = await fetch(`/admin/edit/${devId}`, {
      method: "DELETE"
    })

    if (req.ok) {
      console.log('ok')
      event.target.parentNode.remove();
    } else {
      alert((await req.json()).message)
    }
    return
  }
  if (event.target.classList.contains('edit')) {
    const devId = event.target.parentNode.id

    const nameOld = event.target.parentNode.querySelector('.dev-name');
    const priceOld = event.target.parentNode.querySelector('.dev-price');
    const catOld = event.target.parentNode.querySelector('.dev-cat');
    const catHtml = document.querySelectorAll('.cats')
    let options = ''
    for (let el of catHtml) {
      options += `<option ${(catOld.innerHTML === el.innerHTML) ? 'selected' : ''}>${el.innerHTML}</option>`
    }

    const nodePar = event.target.parentNode

    nodePar.innerHTML = `
      <form class="update">
      <input type="text" name="name" value="${nameOld.innerHTML}">
      <input type="number" name="price" value="${priceOld.innerHTML}">
      <select name="cat">
        ${options}
      </select>
      <button type="submit">save</button>
      </form>
    `

    nodePar.querySelector('.update').addEventListener('submit', async (e) => {
      e.preventDefault();

      const {
        name: {value: name},
        price: {value: price},
        cat: {value: cat}
      } = e.target

      console.log(name, price, cat)

      const req = await fetch(`/admin/edit/${devId}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({name, price, cat})
      })

      if (req.ok) {
        nodePar.innerHTML = `
          <div class="dev-name">${name}</div>
          <div class="dev-price">${price}</div>
          <div class="dev-cat">${cat}</div>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        `
      } else {
        nodePar.innerHTML = `
          <div class="error">Error!</div>
          <div class="dev-name">${name}</div>
          <div class="dev-price">${price}</div>
          <div class="dev-cat">${cat}</div>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
          `
      }
    })
  }
})


// const uploadImg = document.fileUpload

// uploadImg.addEventListener('submit', async (event) => {
//   event.preventDefault();
//   console.log(event.target.files)
//   const formData = new FormData(uploadImg)
//
//   const req = await fetch('/admin/upload', {
//     method: "POST",
//     body: formData
//   })
// })
