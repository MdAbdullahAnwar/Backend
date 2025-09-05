const express = require('express');

const app = express();

app.use((req,res,next)=>{
    console.log("Output from Middleware 1");
    req.myMessage = "<h1>Node JS</h1>";
    next();
})

app.use((req,res,next)=>{
    console.log("Output from Middleware 2");
    res.send(
        `
        ${req.myMessage}
        <h1>Express</h1>
        `
    )
})

app.listen(3000,()=>{
    console.log("Server Running at http://localhost:3000")
});