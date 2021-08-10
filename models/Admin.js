const mongoose = require('mongoose');


const AdminSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Admins', AdminSchema);