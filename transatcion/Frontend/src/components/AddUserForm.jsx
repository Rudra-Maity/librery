import React, { useState } from 'react';
import { Button, TextField, Box, Typography } from '@mui/material';
import axios from 'axios';

const AddUserForm = () => {
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/users', { name: userName })
      .then(() => {
        alert('User added successfully');
        setUserName('');
      })
      .catch(error => console.error('Error adding user:', error));
  };

  return (
    <Box>
      <Typography variant="h6">Add User</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="User Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Add User
        </Button>
      </form>
    </Box>
  );
};

export default AddUserForm;
