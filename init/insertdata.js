const mongoose = require('mongoose');
const connection = require('../config/mongoose.js')
const initialdata = require('./data.js');
const seconddata = require('./DATA2.JS')
const User = require('../model/Facillites.js');


// User.insertMany(initialdata);
User.insertMany(seconddata);