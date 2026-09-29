const express = require('express');
const router = express.Router();
const productController =  require("../controllers/productController");

router.get('/products',productController.getProduct);

router.post('/products',productController.postProduct);


module.exports= router;