const categ = document.querySelector('.categ')
const navbar = document.querySelector('.menu-point')


categ?.addEventListener('click', async (event) => {
  const categoryId = event.target.id
  window.location.href = `/device/${categoryId}`;
})

navbar?.addEventListener('click', async (event) => {
  window.location.href = `/`;
})
