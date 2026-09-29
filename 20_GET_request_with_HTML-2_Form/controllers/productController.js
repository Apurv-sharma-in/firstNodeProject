const path = require('path');

const getProduct = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','product.html'));
}
const postProduct = (req,res)=>{
    res.send('Product Added SuccessFully');
}

module.exports ={
    getProduct,
    postProduct
}