const express = require('express');
const router = express.Router();

const students = [
{ id: 1, name: "Alice" },
{ id: 2, name: "Bob" },
{ id: 3, name: "Charlie" }
];

router.get('/',(req,res)=>{
    const studentName = students.map(s => s.name).join(', ')
    res.send(`Students : ${studentName}`);
})

router.get('/:id',(req,res)=>{
    const studentId= parseInt(req.params.id);
    const findStudent = students.find(s => s.id === studentId);
    if(findStudent){
        res.send(`Student : ${findStudent.name} `);
    }
    else{
        res.send("Student Not Found")
    }
})

module.exports = router;