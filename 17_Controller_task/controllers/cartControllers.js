const getCartForUser = (req,res)=>{
    res.send(`Fetches the cart for a user. ${req.params.id}`);
}
const addProductToCart = (req,res)=>{
    let {id} = req.params;
    res.send(` Adds a product to the user's cart: ${id}`);
}

module.exports={
    getCartForUser,
    addProductToCart
}
