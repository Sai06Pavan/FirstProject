const express = require('express');
const router = express.Router();
const authCheck = require('../middleware/auth').authCheck;
const UserController = require('../controllers/userController');

const userController = new UserController();

router.get('/profile', authCheck, userController.getUserData);
router.get('/settings', authCheck, userController.getUserSettings);

module.exports = router;