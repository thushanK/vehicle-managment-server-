const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Location = new Schema({
    Name: {
        type: String,
        required: true,
        unique: true,
      },
      Place: {
        type: String,
        required: true,
      },
      contactNumber: {
        type: String,
        required: true,
      },
      
    
});

module.exports = mongoose.model('location', Location);