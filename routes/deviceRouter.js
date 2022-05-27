const express = require('express');
const {Device, Type, Galerey} = require('../db/models');
const router = express.Router();

router.get('/', async (req, res) => {
  const headphones = await Device.findAll({where: {type_id: 1}});
  const accessories = await Device.findAll({where: {type_id: 2}});
  const phones = await Device.findAll({where: {type_id: 3}});
  const laptops = await Device.findAll({where: {type_id: 4}});
  res.render('', {headphones, accessories, phones, laptops});
})

router.get('/:id', async (req, res) => {
  const devices = await Device.findAll({where: {type_id: req.params.id}});
  for (let i = 0; i < devices.length; i++) {
    devices[i].images = await Galerey.findAll({where:{device_id : devices[i].id}});
  }

  const type = await Type.findOne({where: {id: req.params.id}})
  res.render('categories/devices', {devices, type})
})


// router.get('/:id', async (req, res) => {
  
//   res.render('', {})
// })

module.exports = router;
