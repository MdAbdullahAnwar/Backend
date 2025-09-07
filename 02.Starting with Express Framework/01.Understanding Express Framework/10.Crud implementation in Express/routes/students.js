const express = require('express');

const { students } = require('../data');
 
const router = express.Router();

router.get('/',(req,res)=>{
    const names = students.map(student => student.name).join(', ');
    res.status(200).send(`Students: ${names}`);
});

router.get('/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if(student){
        res.status(200).send(`Student: ${student.name}`);
    }else{
        res.status(404).send(`Student Not Found`);
    }
});

router.post('/',(req,res)=>{
    let { name } = req.body;

    if(!name){
        return res.status(400).json({ message: "Name is required" });
    }

    let newStudent = { id: students.length+1, name }
    students.push(newStudent);
    res.status(201).json({
        message: "New Student Added",
        newStudent
    });
});

module.exports = router;