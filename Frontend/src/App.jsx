import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, Typography, Grid } from '@mui/material';
import AddBookForm from './components/AddBookForm';
import AddUserForm from './components/AddUserForm';
import BookList from './components/BookList';
import UserList from './components/UserList';
import IssueBookForm from './components/IssueBookForm';
import ReturnBookForm from './components/ReturnBookForm';
import TransactionList from './components/TransactionList';

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/books">Books</Button>
          <Button color="inherit" component={Link} to="/users">Users</Button>
          <Button color="inherit" component={Link} to="/issue">Issue Book</Button>
          <Button color="inherit" component={Link} to="/return">Return Book</Button>
          <Button color="inherit" component={Link} to="/transactions">Transactions</Button>
        </Toolbar>
      </AppBar>

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/issue" element={<IssueBookForm />} />
          <Route path="/return" element={<ReturnBookForm />} />
          <Route path="/transactions" element={<TransactionList />} />
        </Routes>
      </Container>
    </Router>
  );
};

const Home = () => (
  <Typography variant="h4" gutterBottom>
    Library Management System
  </Typography>
);

const BooksPage = () => (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Typography variant="h4" gutterBottom>Books</Typography>
    </Grid>
    <Grid item xs={12}>
      <AddBookForm />
    </Grid>
    <Grid item xs={12}>
      <BookList />
    </Grid>
  </Grid>
);

const UsersPage = () => (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Typography variant="h4" gutterBottom>Users</Typography>
    </Grid>
    <Grid item xs={12}>
      <AddUserForm />
    </Grid>
    <Grid item xs={12}>
      <UserList />
    </Grid>
  </Grid>
);

export default App;
