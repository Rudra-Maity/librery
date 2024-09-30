const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// Get all books
router.get('/', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

router.post('/add', async (req, res) => {
    try {
        const { name, category, rentPerDay } = req.body;
        
        const newBook = new Book({
            name,
            category,
            rentPerDay
        });
        
        await newBook.save();
        res.status(201).json({ message: 'Book added successfully', book: newBook });
    } catch (error) {
        res.status(400).json({ message: 'Error adding book', error });
    }
});

// Search books by name or term
router.get('/search', async (req, res) => {
    const { name } = req.query;
    const books = await Book.find({ name: { $regex: name, $options: 'i' } });
    res.json(books);
});

// Get books by rent range
router.get('/rent-range', async (req, res) => {
    const { minRent, maxRent } = req.query;
    const books = await Book.find({ rentPerDay: { $gte: minRent, $lte: maxRent } });
    res.json(books);
});

// Get books by category + name/term + rent range
router.get('/filter', async (req, res) => {
    const { name, category, minRent, maxRent } = req.query;
    const books = await Book.find({
        name: { $regex: name, $options: 'i' },
        category,
        rentPerDay: { $gte: minRent, $lte: maxRent }
    });
    res.json(books);
});

module.exports = router;
