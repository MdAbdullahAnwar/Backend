const express = require('express');

const router = express.Router();

const usersController = require('../controllers/userController');


router.get('/',usersController.getUsers);

router.get('/:id',usersController.getUsersById);

router.post('/',usersController.postUsers);


module.exports = router;