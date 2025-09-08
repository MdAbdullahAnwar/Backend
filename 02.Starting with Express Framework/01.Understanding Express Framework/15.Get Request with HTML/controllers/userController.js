const getUsers = (req,res)=>{
    res.status(200).send('Fetch all users');
}


const getUsersById = (req,res)=>{
    let id = req.params.id;
    res.status(200).send(`Fetching user with ID: ${id}`);
}


const postUsers = (req,res)=>{
    res.status(201).send('Add a new user');
}


module.exports = {
    getUsers,
    getUsersById,
    postUsers
}