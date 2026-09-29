const {sendErrorResponse,sendResponse} = require('../utils/response');
const getCartItemById = (req,res)=>{
    res.send(`Fetching cart for user with ID: ${req.params.id}`);
     return sendResponse(res,200);
}
const postCartItemByID = (req,res)=>{
    let {id} = req.params;
    res.send(`Adding product to cart for user with ID: ${id}`);
 return sendResponse(res,200);
}

module.exports={
    getCartItemById,
    postCartItemByID
}
