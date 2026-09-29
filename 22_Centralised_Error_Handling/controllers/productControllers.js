const {sendErrorResponse,sendResponse} = require('../utils/response');

const getProducts = (req,res)=>{
    res.send(' Fetch all products');
    return sendResponse(res,200);
};
const postProdcuts = (req,res)=>{
    res.send(' Add a new product');
    return sendResponse(res,200);
};
const getProductsByID = (req,res)=>{
    let {id} = req.params;
    res.send(`Fetching product with ID: ${id}`);
    return sendResponse(res,201);
};

module.exports={
    getProducts,
    postProdcuts,
    getProductsByID
};