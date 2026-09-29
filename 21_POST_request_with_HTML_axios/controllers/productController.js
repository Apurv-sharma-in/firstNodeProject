const path = require('path');

const getProduct = (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','product.html'));
}
const postProduct = (req,res)=>{
    const data = req.body;
    res.json({value:data.productName});
    // res.send('Product Added SuccessFully');
}

module.exports ={
    getProduct,
    postProduct
}