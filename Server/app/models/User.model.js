const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    Name: {
        type: String,
        required: true,
        unique: true,
      },
      NIC: {
        type: String,
        required: true,
      },
      contactNumber: {
        type: String,
        required: true,
      },
      
    
});

module.exports = mongoose.model('user', User);