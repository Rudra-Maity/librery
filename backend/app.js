const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors=require('cors')

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/library', { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => console.log('MongoDB connected'))
   .catch(err => console.log(err));

// Import Routes
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const path = require('path');
app.use(cors())
app.use(express.static(path.join(__dirname,'..','Frontend','dist')))

app.use('/api/users', userRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/transactions', transactionRoutes);
app.get('*',(req,res)=>{
   res.sendFile(path.join(__dirname,'..','Frontend','dist','index.html'))
})

app.listen(5000, () => {
   console.log('Server is running on port 5000');
});
