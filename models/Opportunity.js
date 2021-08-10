const mongoose = require('mongoose');

const OpportunitySchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  skills:[{
    type: String
  }],
  center:{
    type: String,
    required: true
  },
  maxPeople:{
    type:Number,
    required:true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Opportunities', OpportunitySchema);