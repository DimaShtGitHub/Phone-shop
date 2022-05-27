const express = require('express');
const {Device, Type, Galerey} = require('../db/models');
const router = express.Router();


function createSelectLink(type, selectType) {
  if (type.name === 'iPhone') {
    selectType.first = 'новые'
    selectType.second = 'б/у'
    selectType.third = 'все'
  }
  if (type.name === 'Аксессуары') {
    selectType.first = 'оригинал'
    selectType.second = 'реплика'
    selectType.third = 'все'
  }
}


router.get('/', async (req, res) => {
  const headphones = await Device.findAll({where: {type_id: 1}});
  const accessories = await Device.findAll({where: {type_id: 2}});
  const phones = await Device.findAll({where: {type_id: 3}});
  const laptops = await Device.findAll({where: {type_id: 4}});
  res.render('', {headphones, accessories, phones, laptops});
})

// получение всех девайсов
router.get('/:id', async (req, res) => {
  const allDev = await Device.findAll({where: {type_id: req.params.id}});
  for (let i = 0; i < allDev.length; i++) {
    allDev[i].images = await Galerey.findAll({where:{device_id : allDev[i].id}});
  }
  const type = await Type.findOne({where: {id: req.params.id}})
  let selectType = {}
  createSelectLink(type, selectType)
  res.render('categories/allDevices', {allDev, type, selectType})
})


// получение всех новых или оригиналов 
router.get('/new/:id', async (req, res) => {
  const newDev = await Device.findAll({where: {type_id: req.params.id, new_device: true}});
  for (let i = 0; i < newDev.length; i++) {
    newDev[i].images = await Galerey.findAll({where:{device_id : newDev[i].id}});
  }
  const type = await Type.findOne({where: {id: req.params.id}});
  let selectType = {};
  createSelectLink(type, selectType);
  res.render('categories/newDevices', {newDev, type, selectType})
})


// получение всех б/у или реплик 
router.get('/bu/:id', async (req, res) => {
  const buDev = await Device.findAll({where: {type_id: req.params.id, new_device: false}});
  for (let i = 0; i < buDev.length; i++) {
    buDev[i].images = await Galerey.findAll({where:{device_id : buDev[i].id}});
  }
  const type = await Type.findOne({where: {id: req.params.id}});
  let selectType = {};
  createSelectLink(type, selectType);
  res.render('categories/buDevices', {buDev, type, selectType})
})




// router.get('/:id', async (req, res) => {
  
//   res.render('', {})
// })

module.exports = router;
