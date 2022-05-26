const express = require('express');
const {Order} = require('../db/models');
const router = express.Router();

router.post('/', async (req, res) => {
  const { device_id,name, number, comment } = req.body;
  const status_id = 1
  const new_dev = true
  const order = await Order.create({ device_id,status_id,new_dev,name, number, comment });
  console.log(device_id,name, number, comment);
  res.json(order.dataValues);
});





module.exports = router;
