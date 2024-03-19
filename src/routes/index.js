const express = require("express");
const userController = require('../controller/UserController');
const router = express.Router();

router.post('/users', userController.create);
router.get('/users', userController.findAll);

module.exports = router;
