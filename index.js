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
    // console.log(facilities);
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

// Render the Edit Review Form
app.get('/facility/:facilityId/reviews/:reviewId/edit', async (req, res) => {
  try {
    const { facilityId, reviewId } = req.params;
    const review = await Review.findById(reviewId);

    if (!review) {
      return res.status(404).render('listings/error.ejs', { message: 'Review not found' });
    }

    res.render('listings/reviewedit.ejs', { facilityId, review });
  } catch (error) {
    console.error('Error fetching review for editing:', error);
    res.status(500).render('listings/error.ejs');
  }
});

// Handle Review Update Logic
app.put('/facility/:facilityId/reviews/:reviewId', async (req, res) => {
  try {
    const { facilityId, reviewId } = req.params;
    const { rating, comment } = req.body;

    await Review.findByIdAndUpdate(reviewId, { rating, comment });
    res.redirect(`/facility/${facilityId}`);
  } catch (error) {
    console.error('Error updating review:', error);
    res.status(500).render('listings/error.ejs');
  }
});
// Handle Review Deletion
app.delete('/facility/:facilityId/reviews/:reviewId', async (req, res) => {
  try {
    const { facilityId, reviewId } = req.params;

    await Review.findByIdAndDelete(reviewId);
    res.redirect(`/facility/${facilityId}`);
  } catch (error) {
    console.error('Error deleting review:', error);
    res.status(500).render('listings/error.ejs');
  }
});





// for register 
app.get("/register", (req, res) => {
  res.render("listings/register.ejs");
});

// for login route
app.get("/login", (req, res) => {
  res.render("listings/login.ejs");
})
// for manageportal 
app.get("/manageportal", (req, res) => {
  res.render("listings/manageportal.ejs");
});

// for universal error
app.get('*', (req, res) => {
  res.render("listings/error.ejs");
})

// server starting
app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})