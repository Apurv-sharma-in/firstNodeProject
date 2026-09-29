const express = require('express');
const app = express();

const productRouter = require('./Routes/productRoute');
app.use(express.json());

app.use('/product',productRouter);


app.listen(3000,()=>{
    console.log('Server Is Running');
})