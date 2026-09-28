const express = require('express');
const router= express.Router();
const userControllers = require('../controllers/userControllers');


router.get('/',userControllers.getProducts);

router.post('/',userControllers.postProducts);

router.get('/:userid',userControllers.getProductsById);


module.exports = router;