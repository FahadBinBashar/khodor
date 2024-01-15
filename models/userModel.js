// userModel.js

const db = require('../config/db');

function getAllUsers(callback) {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
}

function createUser(user, callback) {
  // Fix the variable name from `error` to `err`
  db.query('INSERT INTO users SET ?' , user, (err, results) => {
    if (err) {
      // Fix the variable name from `err` to `error`
      callback(err, null);
      return;
    } else {
      callback(null, results);
    }
  });
}


module.exports = {
  getAllUsers,
  createUser
};
