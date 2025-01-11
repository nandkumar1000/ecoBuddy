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
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
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
    res.redirect("/facilitate")
  } catch (error) {
    console.error("Error fetching facilities:", error);
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
    res.render("./listings/facilityspec.ejs", { facility, reviews });
  } catch (error) {
    console.error("Error fetching facility:", error);
    res.status(500).render("listings/error.ejs", { message: "Server error. Please try again later." });
  }
});

// Route to edit a specific facility
app.get("/facilitate/edit/:id", async (req, res) => {
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
app.post('/facilitate/update/:id', async (req, res) => {
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
app.delete('/facilitate/delete/:id', async (req, res) => {
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

// route for review
app.post('/facilitate/reviews/:id', async (req, res) => {


  try {
    const { rating, comment } = req.body;

    // Ensure that both rating and comment are provided
    if (!rating || !comment) {
      return res.status(400).send('Both rating and comment are required.');
    }

    const newReview = new Review({
      Feedback_Rating: rating,
      Feedback_Message: comment,
      facilityId: req.params.id
    });

    await newReview.save();
    res.redirect(`/facilitate/${req.params.id}`);
  } catch (error) {
    console.error('Error adding review:', error);
    res.status(500).send('Server error. Please try again later.');
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
      { Feedback_Rating: rating, Feedback_Message: comment },
      { new: true }
    );

    if (!updatedReview) {
      return res.status(404).render('listings/error.ejs', { message: 'Review not found!' });
    }
    res.redirect(`/facilitate/${facilityId}`);
  } catch (error) {
    console.error('Error updating review:', error);
    res.status(500).render('listings/error.ejs', { message: 'Server error. Please try again later.' });
  }
});

// Delete review
app.delete('/facilitate/:facilityId/reviews/:reviewId', async (req, res) => {
  try {
    const { facilityId, reviewId } = req.params;

    const deletedReview = await Review.findByIdAndDelete(reviewId);

    if (!deletedReview) {
      return res.status(404).render('listings/error.ejs', { message: 'Review not found!' });
    }

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
// for blog
app.get("/blog", (req, res) => {
  res.render("listings/blog.ejs");
});
// for FAQ
app.get("/FAQ", (req, res) => {
  res.render("listings/FAQ.ejs");
})
// for contact 
app.get("/contact", (req, res) => {
  res.render("listings/contact.ejs");
});
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
// for privacy-policy
app.get("/privacy-policy", (req, res) => {
  res.render("listings/privacy-policy.ejs")
})
// for terms-of-service
app.get("/terms-of-service", (req, res) => {
  res.render("listings/terms-of-service.ejs")
})
// for make-money
app.get("/make-money", (req, res) => {
  res.render("listings/make-money.ejs")
})

// for universal error
app.get('*', (req, res) => {
  res.render("listings/error.ejs");
})

// server starting
app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})