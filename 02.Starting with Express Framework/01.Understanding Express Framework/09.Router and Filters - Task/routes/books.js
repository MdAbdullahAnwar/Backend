const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).send("Here is the list of books!");
});

router.post('/',(req,res)=>{
    res.status(201).send("Book has been added!")
});

module.exports = router;