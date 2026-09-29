const express = require('express');
const app = express();
const productRouter = require('./routes/productRoutes');



app.use("/api",productRouter);






app.listen(3000,()=>{
    console.log('Server is Running');
})