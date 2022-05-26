console.log("Привет!");
const btnz = document.querySelectorAll("#btnZakaz");
const orderAdd = document.orderAdd;

let dev_id;
for (const btn of btnz) {
  btn.addEventListener('click', async (event) => {
       event.preventDefault();
      dev_id = event.target.parentNode.parentNode.id
    })
}


for (let i = 0; i < orderAdd.length; i++) {
  orderAdd[i]?.addEventListener("submit", async (event) => {
    event.preventDefault();
    console.log(event.target);
    const device_id = dev_id
    const name = event.target.name.value;
    const number = event.target.number.value;
    const comment = event.target.message.value;
    console.log({ device_id,name, number, comment });
    const response = await fetch('/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ device_id,name, number, comment }),
    });
    const result = await response.json();
  });
}
