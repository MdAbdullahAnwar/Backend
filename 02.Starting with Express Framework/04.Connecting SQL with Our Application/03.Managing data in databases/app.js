const express = require('express');
const db = require('./utils/db-connection');
const studentRoutes = require('./routes/studentsRoutes');

const app = express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Server is Created");
})

app.use('/students',studentRoutes);

app.listen(3000,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Server is Running on http://localhost:3000");
})