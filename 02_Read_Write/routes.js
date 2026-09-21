const fs = require("fs");

const requestHandler = (req,res)=>{

   const url = req.url;
    const method = req.method;
    
    if(req.url ==='/'){
        //form 
        
        res.setHeader('Content-type','text/html');
        
        res.end(
            `
            <form action="/message" method ="POST">
            <label>Name:</label>
            <input type="text" name = "userName" ></input>
            <button type="submit">Add </button>
            </form>
            `
        )
    }else{
        if(req.url ==='/message'){
            res.setHeader('content-type','text/html');

            let datachunks =[];
            req.on('data',(chunks)=>{
                console.log(chunks);
                datachunks.push(chunks);
            })
            
            req.on('end',()=>{
                const combinedBuffer = Buffer.concat(datachunks);
                console.log(combinedBuffer.toString());
                let value = combinedBuffer.toString().split("=")[1];
                console.log(value);


                fs.writeFile('value.txt',value,(err)=>{

                    res.statusCode = 302;
                    res.setHeader('Location','/');
                    res.end();

                })
            })
        }else{
            if(req.url === '/html'){
            fs.readFile('value.txt',(err,data)=>{
                console.log(data);
                res.end(`
                    <h1>${data.toString()}</h1>
                    `)
            })
        }
        }
    }

}
const anotherfucntion = ()=>{
    console.log("Hii another fucntion")
}

module.exports={
    requestHandler,
    anotherfucntion
};