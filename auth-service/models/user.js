const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    trim: true,
  },
  contact: {
    type: String,
    trim: true,
    require: true,
  },
  token: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
