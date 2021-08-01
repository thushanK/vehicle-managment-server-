const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Vehicle = new Schema({
    vehicleNumber: {
        type: String,
        required: true,
        unique: true,
      },
      vehicleType: {
        type: String,
        required: true,
      },
      vehicleChaseNumber: {
        type: String,
        required: true,
      },
      vehicleEngineNumber: {
        type: String,
        required: true,
      },
      manufactureDate: {
        type: String,
        required: true,
      },
      vehicleColor: {
        type: String,
        required: true,
      },
      vehiclePurchaseDate: {
        type: String,
        required: true,
      },
      vehicleOpenMileage: {
        type: String,
        required: true,
      },
      insuranceType: {
        type: String,
        required: true,
      },
      vehicleRegisteredDistrict: {
        type: String,
        required: true,
      },
      nextLicenseRenewalDate: {
        type: String,
        required: true,
      },
      vehiclePreviousOwner: {
        type: String,
        required: true,
      },
      NIC: {
        type: String,
        required: true,
        
      },
      contactNumber: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      // allocation: {
      //   type: Boolean,
      //   required: true,
      //   default: false 
      // },
      // employeeName: {
      //   type: String
        
      // },
      // employeeContact: {
      //   type: String
        
      // },
});

module.exports = mongoose.model('vehicle', Vehicle);