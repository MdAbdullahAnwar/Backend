const express = require('express');

const app = express();

let port = 3000;

app.use((req,res,next)=>{
    req.user = "Guest";
    next();
})

app.get("/welcome",(req,res)=>{
    res.send(
        `
        <h1>Welcome, ${req.user}!</h1>
        `
    )
})

app.listen(port,()=>{
    console.log("Server is Running at http://localhost:3000");
})