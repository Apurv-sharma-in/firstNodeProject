const getProducts = (req,res)=>{
    res.send(' Fetch all products');
};
const postProdcuts = (req,res)=>{
    res.send(' Add a new product');
};
const getProductsByID = (req,res)=>{
    let {id} = req.params;
    res.send(`Fetching product with ID: ${id}`);
};

module.exports={
    getProducts,
    postProdcuts,
    getProductsByID
};