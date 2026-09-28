const express = require('express');
const router = express.Router();
const cartControllers = require('../controllers/cartControllers');


router.get('/:id',cartControllers.getCartItemById);

router.post('/:id',cartControllers.postCartItemByID);



module.exports = router;