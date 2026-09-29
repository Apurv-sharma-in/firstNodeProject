const {sendErrorResponse,sendResponse} = require('../utils/response');
const getProducts = (req,res)=>{
        res.send('Fetching all products');
         return sendResponse(res,200);
}

const postProducts = (req,res)=>{
    res.send('Adding a new User');
     return sendResponse(res,200);
}

const getProductsById = (req,res)=>{
    res.send(`Fetching user with ID: ${req.params.userid}`);
 return sendResponse(res,201);
}



module.exports={
    getProducts,
    postProducts,
    getProductsById
};