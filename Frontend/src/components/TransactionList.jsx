import React, { useState, useEffect } from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import axios from 'axios';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('/api/transactions')
      .then(response => setTransactions(response.data))
      .catch(error => console.error('Error fetching transactions:', error));
  }, []);
console.log('dd',transactions);

  return (
    <div>
      <Typography variant="h6">Transaction History</Typography>
      <List>
        {transactions.map(transaction => (
          <ListItem key={transaction._id}>
            <ListItemText
              primary={`Book: ${transaction.bookName}, User: ${transaction.userName}`}
              secondary={`Issued: ${transaction.issueDate}, Returned: ${transaction.returnDate || 'Pending'}`}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TransactionList;
