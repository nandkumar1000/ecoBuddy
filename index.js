const express = require('express');
const app = express();
const port = 8080;

const connectionDatbase = require("./config/mongoose");
// require path
const path = require('path');
// require datbases data connecting
const dataconnect = require("./model/Facillites");
const Review = require('./model/Feedback')
// Templating engine
const ejsMate = require("ejs-mate");
app.engine("ejs", ejsMate);

// flash
const flash = require("connect-flash");
app.use(flash());
// session
const session = require("express-session");

// Middleware for PUT operations
const methodOverride = require('method-override');
app.use(methodOverride("_method"));

// Middleware for serving static files
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
// home
app.get("/", (req, res) => {
  res.render("listings/home.ejs")
})
app.get("/home", (req, res) => {
  res.render("listings/home.ejs")
})
// about route
app.get("/about", (req, res) => {
  res.render("listings/about.ejs");
})
// faciliateshow route
app.get("/facilitate", async (req, res) => {
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
app.get("/facilitatecreate", (req, res) => {
  res.render("listings/facilitycreate.ejs");
});

// for showing data
app.post("/facilitatecreate", async (req, res) => {
  try {
    req.flash('success', 'Facility added successfully!');
    res.redirect("/facilitate")
  } catch (error) {
    console.error("Error fetching facilities:", error);
    req.flash('error', 'Error adding facility. Please try again later.');
    res.status(500).render("listings/error.ejs");
  }
});
// Route to show specific facility details with reviews
app.get("/facilitate/:id", async (req, res) => {
  try {
    const facility = await dataconnect.findById(req.params.id);
    const reviews = await Review.find({ facilityId: req.params.id });
    if (!facility) {
      return res.status(404).render("listings/error.ejs", { message: "Facility not found!" });
    }
    res.render("listings/facilityshow.ejs", { facility, reviews });
  } catch (error) {
    console.error("Error fetching facility:", error);
    res.status(500).render("listings/error.ejs", { message: "Server error. Please try again later." });
  }
});

// Route to edit a specific facility
app.get("/facilitate/:id/edit", async (req, res) => {
  try {
    const facility = await dataconnect.findById(req.params.id);
    if (!facility) {
      return res.status(404).render("listings/error.ejs", { message: "Facility not found for editing!" });
    }
    res.render("listings/facilityedit.ejs", { facility });
  } catch (error) {
    console.error("Error fetching facility for edit:", error);
    res.status(500).render("listings/error.ejs", { message: "Server error. Please try again later." });
  }
});
// Rout to update a specific facility
app.post('/facilitate/:id/edit', async (req, res) => {
  try {
    const facilityId = req.params.id;
    const { Facility_Title, Facility_Description, Facility_Category, Facility_Address, Facility_Status, Facility_Image } = req.body;

    const updatedFacility = await dataconnect.findByIdAndUpdate(facilityId, {
      Facility_Title,
      Facility_Description,
      Facility_Category,
      Facility_Address,
      Facility_Status,
      Facility_Image: Facility_Image,
    }, { new: true });

    if (!updatedFacility) {
      return res.status(404).render("listings/error.ejs", { message: "Facility not found!" });
    }
    req.flash("success", "Facility Updated successfully!");
    res.redirect(`/facilitate/${updatedFacility._id}`);
  } catch (error) {
    console.error("Error updating facility:", error);
    res.status(500).render("listings/error.ejs", { message: "Server error. Please try again later." });
  }
});

// Route to Delete a specific facility
app.delete('/facilitate/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedFacility = await dataconnect.findByIdAndDelete(id);

    if (!deletedFacility) {
      req.flash('error', 'Facility not found for deletion!');
      return res.redirect('/facilitate');
    }
    req.flash('success', 'Facility deleted successfully!');
    res.redirect('/facilitate');
  } catch (error) {
    console.error('Error deleting facility:', error);
    res.status(500).render('listings/error.ejs', { message: 'Server error. Please try again later.' });
  }
});


//  review or feedback
app.post('/facilitate/:id/reviews', async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const facilityId = req.params.id;
    const userId = req.user._id;
    const newReview = new Review({
      rating,
      comment,
      facilityId,
      userId
    });
    await newReview.save();

    res.redirect(`/facilitate/${facilityId}`);
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(500).render('listings/error.ejs', { message: 'Server error. Please try again later.' });
  }
});

// edit review
app.get('/facilitate/:facilityId/reviews/:reviewId/edit', async (req, res) => {
  try {
    const { facilityId, reviewId } = req.params;
    const review = await Review.findById(reviewId);
    if (!review) {
      return res.status(404).render('listings/error.ejs', { message: 'Review not found!' });
    }

    res.render('listings/editReview.ejs', { review, facilityId });
  } catch (error) {
    console.error('Error fetching review for edit:', error);
    res.status(500).render('listings/error.ejs', { message: 'Server error. Please try again later.' });
  }
});
// update review
app.post('/facilitate/:facilityId/reviews/:reviewId', async (req, res) => {
  try {
    const { facilityId, reviewId } = req.params;
    const { rating, comment } = req.body;
    const updatedReview = await Review.findByIdAndUpdate(
      reviewId,
      { rating, comment },
      { new: true }
    );

    if (!updatedReview) {
      return res.status(404).render('listings/error.ejs', { message: 'Review not found!' });
    }
    req.flash("success", "Review Updated successfully!");
    res.redirect(`/facilitate/${facilityId}`);
  } catch (error) {
    console.error('Error updating review:', error);
    res.status(500).render('listings/error.ejs', { message: 'Server error. Please try again later.' });
  }
});
// delete review
app.post('/facilitate/:facilityId/reviews/:reviewId?_method=DELETE', async (req, res) => {
  try {
    const { facilityId, reviewId } = req.params;

    const deletedReview = await Review.findByIdAndDelete(reviewId);

    if (!deletedReview) {
      return res.status(404).render('listings/error.ejs', { message: 'Review not found!' });
    }
    req.flash("success", "Review Deleted successfully!");
    res.redirect(`/facilitate/${facilityId}`);
  } catch (error) {
    console.error('Error deleting review:', error);
    res.status(500).render('listings/error.ejs', { message: 'Server error. Please try again later.' });
  }
});

// for log in and log out 
// for register 
app.get("/register", (req, res) => {
  res.render("listings/register.ejs");
});

// for login route
app.get("/login", (req, res) => {
  res.render("listings/login.ejs");
})

// for all operation of management portal
// for manageportal 
app.get("/manageportal", (req, res) => {
  res.render("listings/manageportal.ejs");
});
// for active users
app.get("/manage-users", (req, res) => {
  res.render("listings/manage-users.ejs");
})
// for view-reports
app.get("/view-reports", (req, res) => {
  res.render("listings/view-reports.ejs")
})
// for track projects
app.get("/track-projects", (req, res) => {
  res.render("listings/track-projects.ejs")
})
// for settings
app.get("/settings", (req, res) => {
  res.render("listings/setting.ejs")
})

// for universal error
app.get('*', (req, res) => {
  res.render("listings/error.ejs");
})

// server starting
app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})