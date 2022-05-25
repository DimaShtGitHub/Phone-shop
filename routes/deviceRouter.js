const express = require('express');
const {Device, Type} = require('../db/models');
const router = express.Router();

router.get('/', async (req, res) => {
  const headphones = await Device.findAll({where: {type_id: 2}});
  const accessories = await Device.findAll({where: {type_id: 4}});
  const phones = await Device.findAll({where: {type_id: 1}, raw:true});
  const laptops = await Device.findAll({where: {type_id: 3}});
  console.log(headphones);
  console.log(accessories);
  console.log(phones);
  console.log(laptops);
  res.render('device', {phones});
})

router.get('/:id', async (req, res) => {
  
  res.render('', {})
})

module.exports = router;
