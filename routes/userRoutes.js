const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Prefix all routes with '/api'
router.get('/users', userController.getAllUsers);
router.post('/register', userController.createUser);

module.exports = router;