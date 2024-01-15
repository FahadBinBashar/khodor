const userModel = require('../models/userModel');
const bcrypt = require("bcryptjs");

function getAllUsers(req, res) {
  userModel.getAllUsers((err, users) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(users);
    }
  });
}

const createUser=async(req, res)=>{
  const body = req.body;
  const { password } = body;
  const hashPassword = await bcrypt.hash(password, 10);
  const saveData = {...body, password:hashPassword}

  console.log('Received request body:', saveData,hashPassword);
  userModel.createUser(saveData, (err, result) =>{
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