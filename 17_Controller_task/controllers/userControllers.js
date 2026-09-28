const getAllUsers = (req,res)=>{
        res.send(' Fetches all users.');
}

const addUser = (req,res)=>{
    res.send('Adds a new user');
}

const getUserById = (req,res)=>{
    res.send(` Fetches a specific user by ID: ${req.params.userid}`);
}



module.exports={
    getAllUsers,
    addUser,
    getUserById
};