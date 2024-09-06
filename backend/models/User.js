const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: { // Ensure this field name is consistent with your code
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', UserSchema);
