// server.js (Backend)

import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
import usersRoute from './auth/users.js'; // Import the users route

const app = express();
const port = 8800;

app.use(cors());
app.use(express.json());

// Create MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'dashboard'
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.log('Error connecting to MySQL:', err);
        throw err;
    }
    console.log('Connected to MySQL database');
});

// Use the users route for handling user-related operations
app.use('/api-backend/auth/users', usersRoute);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
