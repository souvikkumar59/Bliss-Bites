const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  description: String,
  image: String,
});

module.exports = mongoose.model('MenuItem', menuItemSchema);
