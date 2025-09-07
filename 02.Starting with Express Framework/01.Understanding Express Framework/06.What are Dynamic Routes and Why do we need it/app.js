const express = require('express');

const app = express();

const port = 3000;

app.get('/',(req,res)=>{
    res.status(200).send(`<h1>Hello World!</h1>`)
})

app.get('/contact/:userId',(req,res)=>{
    const userId = req.params.userId;
    const name = req.query.name;
    const age = req.query.age;
    res.status(200).send(`<h1>Hello from Contact Page for user${userId} named as ${name} of age ${age}</h1>`)
})

app.get('/welcome/:username',(req,res)=> {
    const username = req.params.username;
    const role = req.query.role;
    res.status(200).send(
        `<h1>Welcome ${username}, your role is ${role}</h1>`
    )
})

app.get('/about',(req,res)=>{
    res.status(200).send(`<h1>Hello from About Page!</h1>`)
})

app.use((req,res)=>{
    res.status(404).send(
        `<h1>404 - Page Not Found</h1>`
    )
})

app.listen(port,()=>{
    console.log(`Server is Running on http://localhost:${port}`)
})