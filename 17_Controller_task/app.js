const express = require('express');
//Routes files 
const userRoutes = require('./Routes/userRoutes');
const productRoutes = require('./Routes/productRoutes');
const cartRoutes = require('./Routes/cartRoutes');
const app = express();
const port = 3000;


app.use('/users',userRoutes);
app.use('/products',productRoutes);
app.use('/cart',cartRoutes);

app.get('/',(req,res)=>{
    res.send('hii express working fine');
})




app.listen(port,()=>{
    console.log("Sever is running ")
})