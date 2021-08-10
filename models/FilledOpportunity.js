const mongoose = require('mongoose');

const FilledOpportunitySchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  center:{
    type: String,
    required: true
  },
  opportunityId:{
    type: String,
    required: true
  },
  volunteerId:{
    type: String,
    required: true
  },
  volunteerFirstName:{
    type: String,
    required: true
  },
  volunteerLastName:{
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('FilledOpportunities', FilledOpportunitySchema);