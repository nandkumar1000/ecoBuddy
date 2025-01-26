const express = require('express');
const router = express.Router({ mergeParams: true });
const connectionDatbase = require("../config/mongoose");
const dataconnect = require("../model/Facillites");
const Review = require('../model/Feedback')

// faciliateshow route
router.get("/facilitate", async (req, res) => {
  try {
    const facilities = await dataconnect.find();
    const reviews = await Review.find();
    res.render("listings/facilityshow.ejs", { facilities, reviews });
  } catch (error) {
    console.error("Error fetching facilities:", error);
    res.status(500).render("listings/error.ejs");
  }
});

// faciliate create route
router.get("/facilitatecreate", (req, res) => {
  res.render("listings/facilitycreate.ejs");
});

// for showing data
router.post("/facilitatecreate", async (req, res) => {
  try {
    let newfacility = await new dataconnect(req.body.facility)
    await newfacility.save();


    res.redirect("/facilitate")
  } catch (error) {
    console.error("Error fetching facilities:", error);
    res.status(500).render("listings/error.ejs");
  }
});
// Route to show specific facility details with reviews
router.get("/facilitate/:id", async (req, res) => {
  try {
    const facility = await dataconnect.findById(req.params.id);
    const reviews = await Review.find({ facilityId: req.params.id });
    if (!facility) {
      return res.status(404).render("listings/error.ejs", { message: "Facility not found!" });
    }
    req.flash('succes', "Successfully edited")
    res.render("./listings/facilityspec.ejs", { facility, reviews });
  } catch (error) {
    console.error("Error fetching facility:", error);
    res.status(500).render("listings/error.ejs", { message: "Server error. Please try again later." });
  }
});

// Route to edit a specific facility
router.get("/facilitate/edit/:id", async (req, res) => {
  try {
    const facility = await dataconnect.findById(req.params.id);
    const reviews = await Review.find({ facilityId: req.params.id });

    if (!facility) {
      return res.status(404).render("listings/error.ejs", { message: "Facility not found for editing!" });
    }
    res.render("listings/facilityedit.ejs", { facility, reviews });
  } catch (error) {
    console.error("Error fetching facility for edit:", error);
    res.status(500).render("listings/error.ejs", { message: "Server error. Please try again later." });
  }
});
// ROUTE TO UPDATE FACILITY
router.post('/facilitate/update/:id', async (req, res) => {
  try {
    const facilityId = req.params.id;
    const {
      Facillity_Title,
      Facillity_Description,
      Facillity_Category,
      Facillity_Adderess,
      Facillity_Status,
      Facillity_Image,
    } = req.body;

    const updatedFacility = await dataconnect.findByIdAndUpdate(facilityId, {
      Facillity_Title,
      Facillity_Description,
      Facillity_Category,
      Facillity_Adderess,
      Facillity_Status,
      Facillity_Image,
    }, { new: true });

    if (!updatedFacility) {
      return res.status(404).render("listings/error.ejs", { message: "Facility not found!" });
    }

    res.redirect(`/facilitate/${updatedFacility._id}`);
  } catch (error) {
    console.error("Error updating facility:", error);
    res.status(500).render("listings/error.ejs", { message: "Server error. Please try again later." });
  }
});


// Route to Delete a specific facility
router.delete('/facilitate/delete/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedFacility = await dataconnect.findByIdAndDelete(id);

    if (!deletedFacility) {
      return res.redirect('/facilitate');
    }
    res.redirect('/facilitate');
  } catch (error) {
    console.error('Error deleting facility:', error);
    res.status(500).render('listings/error.ejs', { message: 'Server error. Please try again later.' });
  }
});
module.exports = router