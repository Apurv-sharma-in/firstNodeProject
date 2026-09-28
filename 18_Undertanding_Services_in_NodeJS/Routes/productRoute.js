const express = require('express');
const router = express.Router();
const productController = require('../Controllers/productController');

router.get('/',productController.getAllProduct);

router.post('/',productController.addProduct);

router.get('/:id',productController.getProductByID);

module.exports = router;