// controllers/auth.js

import pool from "../db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Registration logic
export const register = (req, res) => {
    const { username, email, password } = req.body;

    // Check if user already exists in the database
    pool.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (result.length > 0) {
            return res.status(400).json({ error: 'User already exists' });
        }

        // Hash the password
        bcrypt.hash(password, 10, (err, hash) => {
            if (err) {
                return res.status(500).json({ error: 'Internal server error' });
            }

            // Store the user details in the database
            pool.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hash], (err, result) => {
                if (err) {
                    return res.status(500).json({ error: 'Internal server error' });
                }
                return res.status(201).json({ message: 'User registered successfully' });
            });
        });
    });
};

// Login logic
export const login = (req, res) => {
    const { username, password } = req.body;

    // Check if user exists in the database
    pool.query('SELECT * FROM users WHERE username = ?', [username], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (result.length === 0) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Verify password
        bcrypt.compare(password, result[0].password, (err, isMatch) => {
            if (err || !isMatch) {
                return res.status(400).json({ error: 'Wrong username or password' });
            }
            
            // Create JWT token
            const token = jwt.sign({ id: result[0].id }, "jwtkey");

            res.cookie("access_token", token, {
                httpOnly: true
            }).status(200).json({ message: 'Login successful' });
        });
    });
};

// Logout logic
export const logout = (req, res) => {
    // Clear user session or token from client-side
    // You can clear cookies or handle tokens here
    return res.status(200).json({ message: 'User logged out successfully' });
};
