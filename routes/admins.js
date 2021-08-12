const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');

//Gets all admin
router.get('/', async (req,res) =>{
  try{
    const admins = await Admin.find();
    res.json(admins);
  }
  catch(err){
    res.json({message:err});
  }
});

router.post('/', async (req,res) => {
  const admin = new Admin({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: req.body.password
  });
  try{
    const savedAdmin = await admin.save();
    res.json(savedAdmin);
  } catch(err){
    res.json({message:err});
  }
});



module.exports = router;