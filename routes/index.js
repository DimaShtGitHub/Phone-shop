const express = require('express');
const router = express.Router();
const {Device, Type} = require('../db/models');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', async (req, res) => {
  const categories = await Type.findAll();
  console.log(categories)
  res.render('index', {categories})
})

module.exports = router;
