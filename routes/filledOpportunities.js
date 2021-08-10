const express = require('express');
const router = express.Router();
const FilledOpportunity = require('../models/FilledOpportunity');

router.get('/', async (req,res) =>{
  try{
    const filledOpportunitities = await FilledOpportunity.find();
    res.json(filledOpportunitities);
  }
  catch(err){
    res.json({message:err});
  }
});

router.get('/Id/:filledOpportunityId', async (req,res) => {
  try{
    const filledOpportunity = await FilledOpportunity.find({_id: req.params.filledOpportunityId});
    res.json(filledOpportunity);
  }
  catch(err){
    res.json({message:err});
  }
});

router.post('/Post', async (req,res) => {
  const filledOpportunitities = new FilledOpportunity({
    title: req.body.title,
    center: req.body.center,
    opportunityId: req.body.opportunityId,
    volunteerId: req.body.volunteerId,
    volunteerFirstName: req.body.volunteerFirstName,
    volunteerLastName: req.body.volunteerLastName,
  });
  try{
    const savedFilledOpportunitities = await filledOpportunitities.save();
    res.json(savedFilledOpportunitities);
  } catch(err){
    res.json({message:err});
  }
});

router.delete('/Delete/:filledOpportunityId', async (req,res) => {
  try{
    const filledOpportunity = await FilledOpportunity.deleteMany({_id: req.params.filledOpportunityId});
    res.json(filledOpportunity);
  }
  catch(err){
    res.json({message:err});
  }
});

router.delete('/DeleteByVolunteer/:volunteerId', async (req,res) => {
  try{
    const filledOpportunity = await FilledOpportunity.deleteMany({volunteerId: req.params.volunteerId});
    res.json(filledOpportunity);
  }
  catch(err){
    res.json({message:err});
  }
});

router.delete('/DeleteByOpportunity/:opportunityId', async (req,res) => {
  try{
    const filledOpportunity = await FilledOpportunity.deleteMany({opportunityId: req.params.opportunityId});
    res.json(filledOpportunity);
  }
  catch(err){
    res.json({message:err});
  }
});



module.exports = router;