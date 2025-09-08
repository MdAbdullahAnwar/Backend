const express = require('express');

const router = express.Router();

const productsController = require('../controllers/productController'); 


router.get('/',productsController.getProducts);

router.get('/:id',productsController.getProductsById);

router.post('/',productsController.postProducts);


module.exports = router;