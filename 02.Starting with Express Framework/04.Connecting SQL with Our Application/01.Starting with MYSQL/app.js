const express = require('express');
const mysql = require("mysql2");

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Abd@2109',
    database: 'testdb'
})

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }

    console.log('Connection has been Created');

    const creationQuery = `create table student(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(20),
        email VARCHAR(25)
    )`

    connection.execute(creationQuery,(err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }

        console.log("Table is Created");
    })
})

app.get('/',(req,res)=>{
    res.send("Server is Created");
})

app.listen(3000,(err)=>{
    if(err){
        console.log(err);
        return;
    }

    console.log("Server is Running on http://localhost:3000");
})