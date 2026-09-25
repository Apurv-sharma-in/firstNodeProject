const express = require('express');
const app = express();
const port = 4000;

app.use((req,res,next)=>{
    const method = req.method;
    const url = req.url;

    console.log(`${method} request made to ${url}`);
    next();
});

app.get('/products',(req,res)=>{
        res.send("Here is the list of all products");
});
app.post('/products',(req,res)=>{
        res.send("A new product has been added.");
});
app.get('/categories',(req,res)=>{
        res.send("Here is the list of all categories.");
});
app.post('/categories',(req,res)=>{
        res.send("A new category has been created.");
});




app.listen(port,()=>{
    console.log(`Server is Running on ${port}`);
})