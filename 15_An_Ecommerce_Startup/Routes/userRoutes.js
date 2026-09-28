const express = require('express');
const router= express.Router();




router.get('/',(req,res)=>{
    res.send('Fetching all products');
});

router.post('/',(req,res)=>{
    res.send('Adding a new User');
});

router.get('/:userid',(req,res)=>{
    res.send(`Fetching user with ID: ${req.params.userid}`);
});


module.exports = router;