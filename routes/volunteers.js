const express = require('express');
const Volunteer = require('../models/Volunteer');
const router = express.Router();

router.get('/', async (req,res) =>{
  try{
    const volunteers = await Volunteer.find();
    res.json(volunteers);
  }
  catch(err){
    res.json({message:err});
  }
});

router.get('/Id/:volunteerId', async (req,res) => {
  try{
    const volunteer = await Volunteer.find({_id: req.params.volunteerId});
    res.json(volunteer);
  }
  catch(err){
    res.json({message:err});
  }
});

router.post('/Post', async (req,res) => {
  const volunteer = new Volunteer({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: req.body.password,
    approvalStatus: req.body.approvalStatus,
    preferredCenters: req.body.preferredCenters,
    skills: req.body.skills,
    avalibilityTimes: req.body.avalibilityTimes,
    address: req.body.address,
    homePhone: req.body.homePhone,
    cellPhone:req.body.cellPhone,
    workPhone:req.body.workPhone,
    email:req.body.email,
    educationalBackground:req.body.educationalBackground,
    licenses:req.body.licenses,
    emergencyContactName:req.body.emergencyContactName,
    emergencyContactPhone:req.body.emergencyContactPhone,
    emergencyContactEmail:req.body.emergencyContactEmail,
    emergencyContactAddress:req.body.emergencyContactAddress,
    driverLicenseOnFile:req.body.driverLicenseOnFile,
    SocialSecurityOnFile:req.body.SocialSecurityOnFile,
    approvalStatus:req.body.approvalStatus,
  });
  try{
    const savedVolunteer = await volunteer.save();
    res.json(savedVolunteer);
  } catch(err){
    res.json({message:err});
  }
});

router.delete('/Delete/:volunteerId', async (req,res) => {
  try{
    const volunteer = await Volunteer.deleteOne({_id: req.params.volunteerId});
    res.json(volunteer);
  }
  catch(err){
    res.json({message:err});
  }
});



module.exports = router;