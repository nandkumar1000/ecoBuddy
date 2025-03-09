const express = require('express');
const router = express.Router({ mergeParams: true });
const connectionDatbase = require("../config/mongoose");
const communityData = require("../model/community");
// for showing community route
router.get("/community", async (req, res) => {
  try {
    const Communities = await communityData.find();
    res.render("./listings/Community.ejs", { Communities });
  } catch (error) {
    req.flash("error", "Error deleting community.");
    res.redirect('/');
  }
});
module.exports = router