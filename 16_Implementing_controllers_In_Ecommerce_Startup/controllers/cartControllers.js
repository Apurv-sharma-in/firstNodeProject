const getCartItemById = (req,res)=>{
    res.send(`Fetching cart for user with ID: ${req.params.id}`);
}
const postCartItemByID = (req,res)=>{
    let {id} = req.params;
    res.send(`Adding product to cart for user with ID: ${id}`);
}

module.exports={
    getCartItemById,
    postCartItemByID
}
