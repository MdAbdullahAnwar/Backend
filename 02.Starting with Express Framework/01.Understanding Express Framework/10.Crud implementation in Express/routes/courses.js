const express = require('express');

const { courses } = require('../data');

const router = express.Router();

router.get('/',(req,res)=>{
    const courseNames = courses.map(course => course.name).join(', ');
    res.status(200).send(`Courses: ${courseNames}`);
});

router.get('/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const course = courses.find(c => c.id === id);

    if(course){
        res.status(200).send(`Course: ${course.name}, Description: ${course.description}`);
    }else{
        res.status(404).send("Course Not Found");
    }
});

router.post('/',(req,res)=>{
    let { name, description } = req.body;

    if(!name){
        return res.status(400).json({message:"Name is required"});
    }
    else if(!description){
        return res.status(400).json({message:"Description is required"});
    }

    let newCourse = { id: courses.length+1, name, description };
    courses.push(newCourse);
    res.status(201).json({
        message: "New Course Added",
        newCourse
    });
});

module.exports = router;