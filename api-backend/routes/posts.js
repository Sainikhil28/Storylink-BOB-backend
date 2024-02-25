// routes/posts.js

const express = require('express');
const router = express.Router();
const pool = require('../db'); // Import your MySQL connection pool

// POST route for creating a new post
router.post('/', (req, res) => {
    const { title, description, category, image } = req.body;

    // Execute the SQL query to insert the post into the database
    pool.query('INSERT INTO posts (title, description, category, image) VALUES (?, ?, ?, ?)', [title, description, category, image], (error, results, fields) => {
        if (error) {
            console.error('Error saving post to database:', error);
            res.status(500).json({ error: 'Error saving post to database' });
        } else {
            res.status(201).json({ message: 'Post created successfully' });
        }
    });
});

module.exports = router;
