const productService = require('../Services/productService');
const path = require('path');

const getAllProduct = (req,res)=>{
    const result = productService.getProducts();
    // res.send(result);
    res.sendFile(path.join(__dirname,"..","views","product.html"))
}
const getProductByID = (req,res)=>{
    const {id} = req.params;
    const result = productService.getProductsById(id);
    res.send(result);
}

const addProduct = (req, res) => {
    const result = productService.addProduct();
    res.send(result);
};

module.exports = {
    getAllProduct,
    getProductByID,
    addProduct
};