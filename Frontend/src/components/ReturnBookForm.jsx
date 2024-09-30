import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import axios from 'axios';

const ReturnBookForm = () => {
  const [bookName, setBookName] = useState('');
  const [userName, setUserName] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/transactions/return', { bookName, userName, returnDate })
      .then(() => {
        alert('Book returned successfully');
        setBookName('');
        setUserName('');
        setReturnDate('');
      })
      .catch(error => console.error('Error returning book:', error));
  };

  return (
    <Box>
      <Typography variant="h6">Return Book</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Book Name"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
          required
        />
        <TextField
          label="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
          sx={{ ml: 2 }}
        />
        <TextField
          label="Return Date"
          value={returnDate}
          onChange={(e) => setReturnDate(e.target.value)}
          type="date"
          required
          sx={{ ml: 2 }}
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Return Book
        </Button>
      </form>
    </Box>
  );
};

export default ReturnBookForm;
