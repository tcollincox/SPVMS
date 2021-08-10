const express = require('express');
const router = express.Router();
const Opportunity = require('../models/Opportunity');

router.get('/', async (req,res) =>{
  try{
    const opportunitities = await Opportunity.find();
    res.json(opportunitities);
  }
  catch(err){
    res.json({message:err});
  }
});

router.get('/Id/:opportunityId', async (req,res) => {
  try{
    const opportunity = await Opportunity.find({_id: req.params.opportunityId});
    res.json(opportunity);
  }
  catch(err){
    res.json({message:err});
  }
});

router.post('/Post', async (req,res) => {
  const opportunity = new Opportunity({
    title: req.body.title,
    description: req.body.description,
    skills: req.body.skills,
    center: req.body.center,
    maxPeople: req.body.maxPeople
  });
  try{
    const savedOpportunity = await opportunity.save();
    res.json(savedOpportunity);
  } catch(err){
    res.json({message:err});
  }
});

router.delete('/Delete/:opportunityId', async (req,res) => {
  try{
    const opportunity = await Opportunity.deleteOne({_id: req.params.opportunityId});
    res.json(opportunity);
  }
  catch(err){
    res.json({message:err});
  }
});

module.exports = router;