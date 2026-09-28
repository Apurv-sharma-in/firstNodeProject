const express = require('express');
const router = express.Router();
const cartControllers = require('../controllers/cartControllers');


router.get('/:id',cartControllers.getCartForUser);

router.post('/:id',cartControllers.addProductToCart);



module.exports = router;