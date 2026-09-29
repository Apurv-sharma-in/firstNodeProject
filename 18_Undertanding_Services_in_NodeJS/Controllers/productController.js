const productService = require('../Services/productService');
const getAllProduct = (req,res)=>{
    const result = productService.getProducts();
    res.send(result);
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