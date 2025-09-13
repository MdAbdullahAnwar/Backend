const express = require('express');
const app = express();

app.use(express.json());

const studentRoutes = require('./routes/studentRoute');

app.use('/api', studentRoutes);

app.get('/',(req,res)=>{
    res.send("Server is Created");
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})