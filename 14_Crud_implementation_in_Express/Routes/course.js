const express = require('express');
const router = express.Router();

const courses = [
{ id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
{ id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }
];

router.get('/',(req,res)=>{
    const courseName = courses.map(cname=> cname.name);
    res.send(`Courses : ${courseName}`);
})

router.get('/:id',(req,res)=>{
    const coursId = parseInt(req.params.id);
    const findCourse = courses.find(id => id.id === coursId);
    if(findCourse){
        res.send(`Course : ${findCourse.name} Description : ${findCourse.description}`);
        
    }
    else{
        res.send("Course Not Found");
    }
})


module.exports = router;