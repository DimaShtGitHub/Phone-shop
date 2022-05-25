const {Admin, Order, Device, Type} = require('../db/models')

exports.isAdmin = (req, res, next) => {
  console.log('test')
  if (!req.session?.isAdmin) return res.render('adm/login')
  next();
}

exports.admLogin = async (req, res) => {
  let admin;
  try {
    admin = await Admin.findOne({
      where: {login: req.body.login}
    })
  } catch (err) {
    console.log(err)
    return res.send(500).json(err)
  }
  if (admin && admin.password === req.body.password) {
    req.session.admin = admin.login;
    req.session.isAdmin = true;
    res.status(200).json({message: 'ok'});
  } else {
    res.status(401).json({message: 'wrong password'});
  }
}

exports.adminPage = async (req, res) => {
  const allOrders = await Order.findAll({include: Device, raw: true});
  const orders = allOrders.map(el => { return {
    id: el.id,
    name: el['Device.name'],
    new_dev: el.new_dev
  }});
  res.render('adm/admin', {orders});
}

exports.addPage = async (req, res) => {
  const cats = await Type.findAll({attributes: ['name'], raw: true})
  res.render('adm/add', {cats})
}

exports.addDevice = async (req, res) => {
  console.log(req.body)
  try {
    const cat = await Type.findOne({where: {name: req.body.category}})
    const newDevice = await Device.create({name: req.body.name, price: req.body.price, type_id: cat.id})
  } catch (err) {
    return res.status(500).json({message: err.message})
  }
  res.status(200).end();
}

exports.editPage = async (req, res) => {
  const devices = await Device.findAll({include: Type, raw: true});
  const cats = await Type.findAll({attributes: ['name']});
  const items = devices.map(el => {return {id: el.id, name: el.name, price: el.price, cat: el['Type.name']}})
  res.render('adm/edit', {items, cats})
}

exports.delDevice = async (req, res) => {
  console.log(req.params.id)
  try {
    await Device.destroy({
      where: {id: req.params.id}
    })
  } catch (err) {
    res.status(500).json({message: err.message})
  }
  res.status(200).end();
}

exports.editDevice = async (req, res) => {
  try {
    const cat = await Type.findOne({where: {name: req.body.cat}})
    await Device.update({name: req.body.name, price: req.body.price, type_id: cat.id}, {where: {id: req.params.id}})
  } catch (err) {
    res.status(500).json({message: err.message})
  }
  res.status(200).end();
}
