const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching users', error: err });
    }
});

// Create a new user
router.post('/', async (req, res) => {
    const { name, email, phone } = req.body;

    // Validation can be added here (e.g., checking for missing fields)
    if (!name || !email || !phone) {
        return res.status(400).json({ message: 'Please provide all fields' });
    }

    try {
        const newUser = new User({ name, email, phone });
        await newUser.save();
        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (err) {
        res.status(500).json({ message: 'Error creating user', error: err });
    }
});

module.exports = router;
