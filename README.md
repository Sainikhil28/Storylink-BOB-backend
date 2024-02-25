# Storylink-BOB-backend

# Backend Project 


## MySQL Setup
1. Install MySQL database server.
2. Create a new database named `blog`.
3. Set up necessary tables for users, write, dashboard, etc.

### Storylink Database Schema Overview

## User Table:
id: Primary key, auto-incremented integer.
username: Username of the user (string).
email: Email address of the user (string).
password: Encrypted password of the user (string).
img: Image URL or reference for user profile picture (string).

 ## Posts Table:
pid: Primary key, auto-incremented integer.
uid: Foreign key referencing the id column of the User table, representing the user who created the post (integer).
Add other attributes relevant to the posts table.

 ## Comments Table:
cid: Primary key, auto-incremented integer.
uid: Foreign key referencing the id column of the User table, representing the user who posted the comment (integer).
pid: Foreign key referencing the pid column of the Posts table, indicating the post to which the comment belongs (integer).
Include other attributes necessary for comments.

## Node.js Setup
1. Install Node.js runtime environment.
2. Initialize a new Node.js project using `npm init`.
3. Install required dependencies such as Express, Sequelize, bcrypt, jsonwebtoken, etc.
4. Set up routes, controllers, and models for user authentication, story management, etc.
5. Implement CRUD operations for managing stories, comments, and user profiles.

## Installed Dependencies
- Express: For building the web server and handling HTTP requests.
- Sequelize: For ORM (Object-Relational Mapping) to interact with the MySQL database.
- bcrypt: For hashing passwords and enhancing user authentication security.
- jsonwebtoken: For generating and verifying JWT (JSON Web Tokens) for user authentication.
- dotenv: For managing environment variables.
- nodemon: For automatically restarting the server during development.

## Project Overview
- Storylink backend serves as the server-side logic for managing user accounts, stories, comments, and authentication.
- It provides RESTful APIs for creating, retrieving, updating, and deleting stories and comments.
- User authentication is implemented using JWT tokens to secure endpoints and manage user sessions.
- Sequelize ORM simplifies database interactions and ensures data integrity with MySQL.
- The backend is built using Node.js and Express, offering a scalable and efficient runtime environment for handling requests.
- Detailed documentation and API specifications are provided for seamless integration with the frontend application.

## Contributors
Sai Nikhil S

## Output
<img width="759" alt="s9" src="https://github.com/Sainikhil28/Storylink-BOB-backend/assets/96835217/ce77c69b-8415-48af-9b7b-b000712e5265">

<img width="957" alt="image" src="https://github.com/Sainikhil28/Storylink-BOB-backend/assets/96835217/9ca3d898-27a1-4c7a-b30d-3f77e2336bd4">

<img width="958" alt="image" src="https://github.com/Sainikhil28/Storylink-BOB-backend/assets/96835217/07c50de4-c967-41cf-b0f9-db93648459a0">



