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
    const infoOld = event.target.parentNode.querySelector('.dev-info')
    const catHtml = document.querySelectorAll('.cats')
    let options = ''
    for (let el of catHtml) {
      options += `<option ${(catOld.innerHTML === el.innerHTML) ? 'selected' : ''}>${el.innerHTML}</option>`
    }

    const nodePar = event.target.parentNode

    nodePar.innerHTML = `
      <form class="update">
      <input type="text" name="name" value="${nameOld.innerHTML}">
      <input type="text" name="info" value="${infoOld.innerHTML}">
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
        info: {value: info},
        price: {value: price},
        cat: {value: cat}
      } = e.target

      console.log(name, price, cat, info)

      const req = await fetch(`/admin/edit/${devId}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({name, price, cat, info})
      })

      if (req.ok) {
        nodePar.innerHTML = `
          <div class="dev-name">${name}</div>
          <div class="dev-info">${info}</div>
          <div class="dev-price">${price}</div>
          <div class="dev-cat">${cat}</div>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        `
      } else {
        nodePar.innerHTML = `
          <div class="error">Error!</div>
          <div class="dev-name">${nameOld}</div>
          <div class="dev-info">${infoOld}</div>
          <div class="dev-price">${priceOld}</div>
          <div class="dev-cat">${cat}</div>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
          `
      }
    })
  }
})
