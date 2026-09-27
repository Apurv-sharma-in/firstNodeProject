const express = require('express');
const app = express();
const port = 3000;
const homeRoute = require('./Routes/home');
const studentRoute = require('./Routes/student');
const courseRoute = require('./Routes/course');

app.use('/',homeRoute);
app.use('/students',studentRoute);
app.use('/courses',courseRoute);

app.use('/*splat',(req,res)=>{
    res.send(`<h1>Page Not Found</h1>`)
})


app.listen(port , ()=>{
    console.log("Sever is Running :)");
})