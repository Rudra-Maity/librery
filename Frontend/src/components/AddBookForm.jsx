import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import axios from 'axios';

const AddBookForm = () => {
  const [bookName, setBookName] = useState('');
  const [category, setCategory] = useState('');
  const [rentPerDay, setRentPerDay] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/books/add', { bookName, category, rentPerDay })
      .then(() => {
        alert('Book added successfully');
        setBookName('');
        setCategory('');
        setRentPerDay('');
      })
      .catch(error => console.error('Error adding book:', error));
  };

  return (
    <Box>
      <Typography variant="h6">Add Book</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Book Name"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
          required
        />
        <TextField
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          sx={{ ml: 2 }}
        />
        <TextField
          label="Rent per Day"
          value={rentPerDay}
          onChange={(e) => setRentPerDay(e.target.value)}
          type="number"
          required
          sx={{ ml: 2 }}
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Add Book
        </Button>
      </form>
    </Box>
  );
};

export default AddBookForm;
