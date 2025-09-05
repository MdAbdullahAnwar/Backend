const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("Server Created");

    if(req.url === '/'){
        res.setHeader('Content-Type','text/html');

        res.end(
            `
            <h1>JavaScript</h1>
            <h1>React.js</h1>
            <h1>Redux</h1>
            <h1>Next.js</h1>
            <h1>Node.js</h1>
            <h1>Express</h1>
            `
        )
    }
})

const port = 3000;

server.listen(port,()=>{
    console.log("Server Running");
})