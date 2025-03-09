const mongoose = require('mongoose');
const connection = require('../config/mongoose.js')
const initialdata = require('./data.js');
const seconddata = require('./DATA2.JS')
const communityData = require('./CommunityData.js')
const User = require('../model/Facillites.js');
const communityUser = require('../model/community.js')

// User.insertMany(initialdata);
// seconddata.insertMany(DATA2);

// communityUser.insertMany(communityData);