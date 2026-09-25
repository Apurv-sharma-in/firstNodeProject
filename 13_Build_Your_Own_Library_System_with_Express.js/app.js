const express = require('express');
const app  = express();
const port = 3000;
const bookrouter = require('./Routes/books');

app.use('/books',bookrouter);



app.listen(port,()=>{
    console.log('Server is Running');
})