import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import axios from 'axios';

const IssueBookForm = () => {
  const [bookName, setBookName] = useState('');
  const [userName, setUserName] = useState('');
  const [issueDate, setIssueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/transactions/issue', { bookName, userName, issueDate })
      .then(() => {
        alert('Book issued successfully');
        setBookName('');
        setUserName('');
        setIssueDate('');
      })
      .catch(error => console.error('Error issuing book:', error));
  };

  return (
    <Box>
      <Typography variant="h6">Issue Book</Typography>
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
          label="Issue Date"
          value={issueDate}
          onChange={(e) => setIssueDate(e.target.value)}
          type="date"
          required
          sx={{ ml: 2 }}
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Issue Book
        </Button>
      </form>
    </Box>
  );
};

export default IssueBookForm;
