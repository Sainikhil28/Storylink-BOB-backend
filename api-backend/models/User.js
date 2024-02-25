// models/User.js

const { DataTypes } = require('sequelize');
const sequelize = require('../database'); // Assuming you have set up your Sequelize connection in a separate file

const User = sequelize.define('User', {
    // Define attributes of the User model
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

// Sync the model with the database (this will create the table if it doesn't exist)
User.sync()
    .then(() => {
        console.log('User table created successfully');
    })
    .catch(err => {
        console.error('Error creating User table:', err);
    });

module.exports = User;
