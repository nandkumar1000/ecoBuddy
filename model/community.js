const mongoose = require("mongoose");

const communittySchema = new mongoose.Schema({

  question: {
    type: String,
  },
  answer: {
    type: String,
  },
  Community_Date: {
    type: Date,
    default: Date.now(),
  },

});
module.exports = mongoose.model("Community", communittySchema);