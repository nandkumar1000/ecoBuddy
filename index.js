const express = require('express');
const app = express();
const port = 8080;
// require mongoose
const connectionDatbase = require("./config/mongoose");
// require router 
const listingsRouter = require('./router/facility.js');
const ReviewRouter = require('./router/review.js')
const navigateRoute = require('./router/navigateRoute.js')

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

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Middleware for PUT operations
const methodOverride = require('method-override');
const { profile } = require('console');
app.use(methodOverride("_method"));

// Middleware for serving static files
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
// google authentication
// require userSchema from model folder for google auth
const googleoauthuser = require('./model/oauthusergoogle');
require('dotenv').config();
// passport
const passport = require('passport')
// session
const session = require("express-session");
// googlestrategy
const GoogleStrategy = require('passport-google-oauth20').Strategy;
app.use(session({ secret: "secret", resave: false, saveUninitialized: true, }));
app.use(passport.initialize());
app.use(passport.session());
passport.use(
  new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080",
  },
    async (accessToken, refreshToken, profile, done) => {
      try {

        let user = await User.findOne({ googleId: profile.id });
        if (!user) {

          user = new User({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            photo: profile.photos[0].value,
          });
          await user.save();
        }
        return done(null, user);
      } catch (err) {
        console.error("Error during user authentication:", err);
        return done(err, null);
      }
    }
  )

);
// serialize user from the session
passport.serializeUser((user, done) => done(null, user));
// Deserialize user from the session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});
app.use('/', listingsRouter);
app.use('/', ReviewRouter)
app.use('/navigate', navigateRoute)
// default route
app.get("/", (req, res) => {
  res.render("listings/home.ejs")
})
// Routes
app.get("/authgoogle", (req, res) => {
  res.send("<a href='/auth/google'>Login with Google</a>");
});

app.get("/auth/google", passport.authenticate('google', { scope: ["profile", "email"] }));

app.get("/auth/google/callback", passport.authenticate('google', { failureRedirect: "/authgoogle" }),
  (req, res) => {
    res.redirect("/profile");
  }
);

app.get("/profile", (req, res) => {
  if (req.isAuthenticated()) {
    res.send(`
      <h1>Welcome, ${req.user.displayName}</h1>
      <img src="${req.user.photo}" alt="Profile Picture">
      <p>Email: ${req.user.email}</p>
      <a href="/logout">Logout</a>
    `);
  } else {
    res.redirect("/authgoogle");
  }
});


app.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/authgoogle");
  });
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


// for universal error
app.get('*', (req, res) => {
  res.render("listings/error.ejs");
})

// server starting
app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})