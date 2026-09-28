const getProducts = (req,res)=>{
        res.send('Fetching all products');
}

const postProducts = (req,res)=>{
    res.send('Adding a new User');
}

const getProductsById = (req,res)=>{
    res.send(`Fetching user with ID: ${req.params.userid}`);
}



module.exports={
    getProducts,
    postProducts,
    getProductsById
};