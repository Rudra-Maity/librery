const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  issueDate: Date,
  returnDate: Date,
  rent: Number
});

module.exports = mongoose.model('Transaction', transactionSchema);
