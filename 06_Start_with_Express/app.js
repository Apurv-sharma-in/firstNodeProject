//start with express use {npm install express --save}
const http = require("http");
const express = require('express');

const app = express();
app.use((req,res,next)=>{
    console.log("Output form middleware 1 ");
    res.send(`
        <h1>Server is up and running on port 3000! Ready to handle requests.</h1>
        `)
    next();
});
app.use((req,res,next)=>{
    console.log("Output form middleware 2 ");
});




app.listen(3000,()=>{
    console.log("Server is up and running on port 3000! Ready to handle requests.")
})

// const server = http.createServer(app);
//user these two line the express will give a new fucntion

// server.listen(3000,()=>{
//     console.log("Server is running ");
// })