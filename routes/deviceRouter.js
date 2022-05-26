const express = require('express');
const {Device, Type} = require('../db/models');
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
  const type = await Type.findOne({where: {id: req.params.id}})
  let selectType = {}
  createSelectLink(type, selectType)
  res.render('categories/allDevices', {allDev, type, selectType})
})


// получение всех новых или оригиналов 
router.get('/new/:id', async (req, res) => {
  const newDev = await Device.findAll({where: {type_id: req.params.id, new_device: true}});
  const type = await Type.findOne({where: {id: req.params.id}});
  let selectType = {};
  createSelectLink(type, selectType);
  res.render('categories/newDevices', {newDev, type, selectType})
})


// получение всех б/у или реплик 
router.get('/bu/:id', async (req, res) => {
  const buDev = await Device.findAll({where: {type_id: req.params.id, new_device: false}});
  const type = await Type.findOne({where: {id: req.params.id}});
  let selectType = {};
  createSelectLink(type, selectType);
  res.render('categories/buDevices', {buDev, type, selectType})
})




// router.get('/:id', async (req, res) => {
  
//   res.render('', {})
// })

module.exports = router;
