exports.isAdmin = (req, res, next) => {
  if (!req.session.isAdmin) return res.render('adm-login')
  next();
}

exports.admLogin = async (req, res) => {
  const admin = await Admin.findOne({where: {login: req.body.login}})
  if (admin && admin.password === res.body.password) {
    req.session.admin = admin.login;
    req.session.isAdmin = true;
    res.status(200).json({message: 'ok'});
  } else {
    res.status(401).json({message: 'wrong password'});
  }
}

exports.adminPage = (req, res) => {
  res.render('admin');
}
