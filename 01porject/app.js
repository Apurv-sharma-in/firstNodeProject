const http = require(`http`);
const server =http.createServer((req,res)=>{
    console.log("Server is Created");

    res.setHeader('Content-Type','text/html');
    if (req.url === '/') {
        res.statusCode = 200;
        res.end('Hello World');
    } 
    else if (req.url === '/pizza') {
        res.statusCode = 200;
        res.end('This is your pizza');
    } 
    else if (req.url === '/home') {
        res.statusCode = 200;
        res.end('Welcome home');
    } 
    else if (req.url === '/about') {
        res.statusCode = 200;
        res.end('Welcome to About Us');
    } 
    else if (req.url === '/node') {
        res.statusCode = 200;
        res.end('Welcome to my Node Js project');
    } 
    else {
        res.statusCode = 404;
        res.end('Page Not Found');
    }


})

let port = 3000;
server.listen(port, ()=>{
    console.log("Server is Running");
});