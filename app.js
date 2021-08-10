const express = require('express');
const app= express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Import Routes
const volunteerRoutes = require('./routes/volunteers');
const adminRoutes = require('./routes/admins');
const opportunityRoutes = require('./routes/opportunities');
const filledOpportunityRoutes = require('./routes/filledOpportunities');

//MiddleWares
app.use(cors());
app.use('/volunteers', volunteerRoutes);
app.use('/admins', adminRoutes);
app.use('/opportunities', opportunityRoutes);
app.use('/filledOpportunities', filledOpportunityRoutes);

//Home route
app.get('/',(req,res) => {
  res.send('We are on home');
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to DB'));

//Listen on server
app.listen(3001);