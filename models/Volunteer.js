const mongoose = require('mongoose');

const VolunteerSchema = mongoose.Schema({
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
  },
  preferredCenters:[{
    type:String
  }],
  skills:[{
    type:String
  }],
  avalibilityTimes:[{
    type:String
  }],
  address:{
    type: String,
  },
  homePhone:{
    type: String,
  },
  cellPhone:{
    type: String,
  },
  workPhone:{
    type: String,
  },
  email:{
    type: String,
  },
  educationalBackground:{
    type: String,
  },
  licenses:[{
    type:String
  }],
  emergencyContactName:{
    type:String
  },
  emergencyContactPhone:{
    type:String
  },
  emergencyContactEmail:{
    type:String
  },
  emergencyContactAddress:{
    type:String
  },
  driverLicenseOnFile:{
    type:Boolean
  },
  SocialSecurityOnFile:{
    type:Boolean
  },
  approvalStatus:{
    type:String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Volunteers', VolunteerSchema);