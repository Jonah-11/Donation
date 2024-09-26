const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

// Register route
router.post('/register', (req, res, next) => {
    console.log('Received POST request to /register');
    next();
}, authController.register);

// Login route
router.post('/login', (req, res, next) => {
    console.log('Received POST request to /login');
    next();
}, authController.login);

module.exports = router;
