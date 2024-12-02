const mongoose = require('mongoose');
const connection = require('../config/mongoose.js')
const initialdata = require('./data.js');
const User = require('../model/Facillites.js');
// console.log(initialdata);


User.insertMany(initialdata)