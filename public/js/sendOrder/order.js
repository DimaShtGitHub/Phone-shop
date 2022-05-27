
const btnz = document.querySelectorAll("#btnZakaz");
const orderAdd = document.orderAdd;

console.log('order connect')
console.log('orderAdd', orderAdd)

let dev_id;
for (const btn of btnz) {
  btn.addEventListener('click', async (event) => {
       event.preventDefault();
      dev_id = event.target.parentNode.parentNode.id
      console.log(dev_id)
    })
}


if (HTMLCollection.prototype.isPrototypeOf(orderAdd)) {
  for (let i = 0; i < orderAdd?.length; i++) {
    orderAdd[i]?.addEventListener("submit", async (event) => {
      event.preventDefault();
      const device_id = dev_id
      const name = event.target.name.value;
      const number = event.target.number.value;
      const comment = event.target.message.value;
      const response = await fetch('/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ device_id, name, number, comment }),
      });
      const result = await response.json();
      window.location.href = `/order/${result.url}`
    });
  }
} else {
  orderAdd?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const device_id = dev_id
    const name = event.target.name.value;
    const number = event.target.number.value;
    const comment = event.target.message.value;
    const response = await fetch('/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ device_id, name, number, comment }),
    });
    const result = await response.json();
    window.location.href = `/order/${result.url}`
  });
}

