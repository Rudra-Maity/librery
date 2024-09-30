import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/books')
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  }, []);
console.log(books);

  return (
    <div>
      <Typography variant="h6">Book List</Typography>
      <List>
        {books.map(book => (
          <ListItem key={book._id}>
            <ListItemText
              primary={book.bookName}
              secondary={`Category: ${book.category}, Rent per Day: $${book.rentPerDay}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default BookList;
