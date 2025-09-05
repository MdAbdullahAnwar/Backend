const http = require('http');
const routes = require('./routes')

// 1 
// routes.anotherFunction();
// const server = http.createServer(routes.requestHandler);

// 2
// routes.testFunction();
// const server = http.createServer(routes.handler);

// 3
// routes.testFunction();
// const server = http.createServer(routes.handler);

// 4
routes.testFunction();
const server = http.createServer(routes.handler);

const port = 3000;

server.listen(port,()=>{
    console.log("Server Running");
})