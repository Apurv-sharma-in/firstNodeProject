const express = require('express');
const router = express.Router();
const productControllers = require('../controllers/productControllers')

router.get('/',productControllers.getProducts)

router.post('/',productControllers.postProdcuts)

router.get('/:id',productControllers.getProductsByID)

module.exports = router;