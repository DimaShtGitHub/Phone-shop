const router = require('express').Router();
const {
  isAdmin,
  admLogin,
  adminPage,
  addPage,
  addDevice,
  editPage,
  delDevice,
  editDevice,
  updStatus
} = require('../controllers/admin.control');
router.get('/', isAdmin, adminPage);
router.get('/add', isAdmin, addPage)
router.get('/edit', isAdmin, editPage);

router.post('/', admLogin);
router.post('/add', isAdmin, addDevice);

router.delete('/edit/:id', isAdmin, delDevice);
router.patch('/edit/:id', isAdmin, editDevice)
router.patch('/order/:id', isAdmin, updStatus)

module.exports = router;
