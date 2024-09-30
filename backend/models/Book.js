const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: String,
  category: String,
  rentPerDay: Number
});

module.exports = mongoose.model('Book', bookSchema);
