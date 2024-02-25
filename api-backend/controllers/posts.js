// controllers/posts.js

import { db } from '../db.js';

export const createPost = (req, res) => {
    const { title, description, img, uid } = req.body;

    db.query('INSERT INTO posts (title, description, img, uid) VALUES (?, ?, ?, ?)', [title, description, img, uid], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        return res.status(201).json({ message: 'Post created successfully' });
    });
};
