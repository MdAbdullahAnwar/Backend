const express = require('express');

const app = express();

const booksRouter = require('./routes/books');

app.use('/books',booksRouter);

app.use((req,res)=>{
    res.status(404).send(
        `<h1>Page - Not Found</h1>`
    )
})

app.listen(3000,()=>{
    console.log("Server Running on http://localhost:3000");
})