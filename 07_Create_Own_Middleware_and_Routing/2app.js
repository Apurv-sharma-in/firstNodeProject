//explain by Mentor in this file and task is in app.js 
const http = require('http');
const express = require('express');
const app = express();
let port = 3000;


//Authentication Middleware
app.use((req,res,next)=>{
    console.log("Authentication middleware called.")   
    next(); 
})
app.use('/library-2',(req,res,next)=>{
    console.log("Book Recommandation.")    
    next() ;
})
app.use('/library-3',(req,res,next)=>{
    console.log("Choose you book.")    
    next() ;
})

app.get('/library-2',(req,res)=>{
    res.send("<h1> Library 2 Entered</h1>")
})
app.get('/library-3',(req,res)=>{
    res.send("<h1> Library 3 Entered</h1>")
})

app.listen(port,()=>{
    console.log("Server is Running");
})



