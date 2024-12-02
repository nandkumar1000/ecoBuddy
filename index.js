const express = require('express');
const app = express();
const port = 8080;

const connectionDatbase = require("./config/mongoose");
// require path
const path = require('path');
// require datbases data connecting
const dataconnect = require("./model/Facillites");
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
    console.log(facilities);
    res.render("listings/facilityshow.ejs", { facilities });
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
app.post("/facilitate", async (req, res) => {
  try {
    const facilities = await dataconnect.find();
    console.log(facilities);
    res.render("listings/facilityshow.ejs", { facilities });
  } catch (error) {
    console.error("Error fetching facilities:", error);
    res.status(500).render("listings/error.ejs");
  }
});
// FOR SPECIFIC ID 
app.get("/facility/:id", async (req, res) => {
  try {
    const facility = await dataconnect.findById(req.params.id);
    const reviews = await Review.find({ facility: facility._id });
    res.render("listings/facilityshow.ejs", { facility, reviews });
  } catch (error) {
    console.error("Error fetching facility:", error);
    res.status(500).render("listings/error.ejs");
  }
});



// edit route
app.post("/edit/:id", (req, res) => {
  res.render("listings/facilityedit.ejs");
})

// for universal error
app.get('*', (req, res) => {
  res.render("listings/error.ejs");
})

// server starting
app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})