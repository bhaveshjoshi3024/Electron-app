const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
  name: String,
  age: Number,
  date: String,
  time: String,
  city: String,
  address: String,
  images: [String],
  video: String
});

module.exports = mongoose.model('Form', formSchema);
