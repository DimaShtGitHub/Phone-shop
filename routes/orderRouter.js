const express = require('express');
const {Order} = require('../db/models');
const {Status} = require('../db/models');
const {Device} = require('../db/models');
const router = express.Router();

router.post('/', async (req, res) => {
  const { device_id,name, number, comment } = req.body;
  const status_id = 1
  const new_dev = true
  const url = (Math.random().toString(36).substring(2,7)) + (Math.random().toString(36).substring(2,7));
  const order = await Order.create({ device_id,status_id,new_dev,name, number, comment, url });
  console.log(device_id,name, number, comment);
  res.json(order.dataValues);
});

router.get('/:url', async (req, res) => {
  const uniqUrl = req.params.url;
  const status = await Order.findOne({where: {url: uniqUrl}})
  const myStatus = await Status.findOne({where: {id: status.status_id}})
  const device = await Device.findOne({where: {id: status.device_id}})
  res.render('myStatus', { uniqUrl, myStatus, device })
})






module.exports = router;
