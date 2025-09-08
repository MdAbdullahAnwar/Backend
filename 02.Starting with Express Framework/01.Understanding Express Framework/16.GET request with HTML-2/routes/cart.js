const express = require('express');

const router = express.Router();

const cartController = require('../controllers/cartController');


router.get('/',cartController.getCart);

router.get('/:userId',cartController.getCartById);

router.post('/',cartController.postCart);

router.post('/:userId',cartController.postCartById);


module.exports = router;