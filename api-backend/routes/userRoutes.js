// userRoutes.js (Backend)
const express = require('express');
const User = require('../models/User'); // Assuming you have a User model defined

const router = express.Router();

router.post('/users', async (req, res) => { // Updated route
    try {
        // Extract user data from the request body
        const { username, email, phone } = req.body;

        // Create a new user instance
        const newUser = await User.create({ username, email, phone });

        // Send a success response with the saved user data
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        // If an error occurs during user creation, send an error response
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Failed to create user' });
    }
});

module.exports = router;
