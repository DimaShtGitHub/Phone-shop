const router = require('express').Router();
const {isAdmin, admLogin} = require('../controllers');

router.get('/admin', isAdmin, adminPage);

