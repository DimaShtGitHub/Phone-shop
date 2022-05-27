const categ = document.querySelector('.categ')
const navbar = document.querySelector('.menu-point')

// categ?.addEventListener('click', async (event) => {
//   if (event.target.closest('.one-category')) {
//     const categoryId = event.target.querySelector('.category-name').id
//     console.log(categoryId)
//     window.location.href = `/device/${categoryId}`;
//   }
// })

navbar?.addEventListener('click', async (event) => {
  window.location.href = `/`;
})


