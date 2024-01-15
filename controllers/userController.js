const userModel = require('../models/userModel');

function getAllUsers(req, res) {
  userModel.getAllUsers((err, users) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(users);
    }
  });
}

function createUser(req, res){
    
    const body = req.body;
    console.log('Received request body:', body);
    userModel.createUser(body, (err, result) =>{
        if(err){
          res.status(500).json({ error: err.message }); 
        }else{
          res.status(201).json({ message: 'User registered successfully', userId: result });
        }
    });
}




module.exports = {
  getAllUsers,
  createUser
 
};