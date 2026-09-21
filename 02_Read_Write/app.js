const http = require("http");
const routes = require("./routes")
const server = http.createServer(routes);
routes.anotherfucntion();

let port = 3000;
server.listen(port,()=>{
    console.log("server is Running");
} )