import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
import axios from 'axios';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);
console.log(users);

  return (
    <div>
      <Typography variant="h6">User List</Typography>
      <List>
        {users.map(user => (
          <ListItem key={user._id}>
            <ListItemText primary={user.name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default UserList;
