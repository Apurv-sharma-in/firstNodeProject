const getAllProducts = (req,res)=>{
    res.send('Fetches all products.');
};
const addProduct = (req,res)=>{
    res.send(' Add a new product');
};
const getProductById = (req,res)=>{
    let {id} = req.params;
    res.send(`Fetches a specific product by ID.: ${id}`);
};

module.exports={
    getAllProducts,
    addProduct,
    getProductById
};