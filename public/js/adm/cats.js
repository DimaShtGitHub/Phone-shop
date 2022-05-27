const block = document.querySelector('.adm-items')

block.addEventListener('click', (event) => {
  if (event.target.classList.contains('adm-btn')) {
    const parent = event.target.parentNode
    const catName = parent.querySelector('div').innerText
    const oldImg = parent.querySelector('div').src

    parent.innerHTML = `
    Change img for ${catName}:<br>
    <form class="updCat">
      <input type="file" name="img">
      <button type="submit">Upload</button>
    </form>
    `

    parent.querySelector('.updCat').addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(parent.querySelector('.updCat'))

      const req = await fetch(`/admin/cat/${parent.id}`, {
        method: "PATCH",
        body: formData
      })

      if (req.ok) {
        const res = await req.json();
        parent.innerHTML = `
      <img src="${res.img}" class="adm-img">
      <div>catName</div>
      <button class="adm-btn">Edit</button>`
      } else {
        const res = await req.json();
        parent.innerHTML = `
          <img src="${oldImg}" class="adm-img">
          <div>catName</div>
          <div style="color: red">Error!<br>${res.message}</div>
          <button class="adm-btn">Edit</button>
        `
      }
    })
  }
})
