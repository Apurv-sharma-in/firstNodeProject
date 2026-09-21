const http = require("http");

const server = http.createServer((req,res)=>{
    if(req.url ==="/"){
        res.end(`
            <h1>Hii this is new Poject</h1>
            `)
    }
})

server.listen(3000,()=>{
    console.log("server is running")
})