const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    console.log("Server Created");

    let url = req.url;
    let method = req.method;

    if(url === '/'){
        res.setHeader('Content-Type','text/html');

        res.end(
            `
            <h1>Form</h1>
            <form action='/message' method='POST'>
                <label for='naam'>Name</label>
                <input id='naam' name='username' placeholder='Type Something...'></input>
                <button type='submit'>Add</button>
            </form>
            `
        )
    }else{
        if(url === '/message'){
            res.setHeader('Content-Type','text/html');

            let dataChunks = [];
            req.on('data',(chunks)=>{
                console.log(chunks);
                dataChunks.push(chunks);
            })

            req.on('end',()=>{
                const combinedBuffer = Buffer.concat(dataChunks);
                console.log(combinedBuffer);

                let value = combinedBuffer.toString();
                console.log(value);

                const formValue = value.split('=')[1];
                console.log(formValue);

                fs.writeFile('formValue.txt',formValue,(err)=>{
                    res.statusCode = 302;
                    res.setHeader('location','/');
                    res.end();
                })
            })
        }
    }


})

const port = 4000;

server.listen(port,()=>{
    console.log('Server Running at Local Host 4000');
})