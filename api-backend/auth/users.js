// users.js

const express = require('express');
const router = express.Router();

// Import the User model
const User = require('../models/User');

// Route to handle user creation
router.post('/', async (req, res) => {
    try {
        // Extract user data from request body
        const { username, email, phone } = req.body;

        // Create a new user instance
        const newUser = new User({
            username,
            email,
            phone
        });

        // Save the new user to the database
        const savedUser = await newUser.save();

        // Send a success response with the saved user data
        res.status(201).json({ message: 'User created successfully', user: savedUser });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }
});

module.exports = router;
