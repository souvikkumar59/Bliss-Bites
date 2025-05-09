const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
  number: Number,
  isOccupied: { type: Boolean, default: false },
});

module.exports = mongoose.model('Table', tableSchema);
