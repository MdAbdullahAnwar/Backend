const express = require('express');

const router = express.Router();

router.get('/',(req,res)=>{
    res.send('Orders List');
})

router.post('/',(req,res)=>{
    res.send('Orders Created');
})

module.exports = router;