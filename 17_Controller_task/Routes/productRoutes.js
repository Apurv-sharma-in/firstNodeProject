const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers')

router.get('/',productControllers.getAllProducts)

router.post('/',productControllers.addProduct)

router.get('/:id',productControllers.getProductById)

module.exports = router;