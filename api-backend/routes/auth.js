// routes/auth.js

import express from 'express';
import { register, login, logout } from '../controllers/auth.js';

const router = express.Router();

// Define the route to handle POST requests to /auth/register
router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

export default router;
