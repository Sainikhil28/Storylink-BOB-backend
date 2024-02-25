// index.js

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // Import the cors middleware
import authRoutes from './routes/auth.js'; // Import the auth routes

const app = express();
const port = 8800;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

// Define your API routes
app.use('/api-backend/auth', authRoutes); // Use the auth routes

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log("Connected !");
});
