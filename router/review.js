const express = require('express');
const router = express.Router();
const connectionDatbase = require("../config/mongoose");
const Review = require('../model/Feedback')


// route for review
router.post('/facilitate/reviews/:id', async (req, res) => {


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
router.get('/facilitate/:facilityId/reviews/:reviewId/edit', async (req, res) => {
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
router.post('/facilitate/:facilityId/reviews/:reviewId', async (req, res) => {
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
router.delete('/facilitate/:facilityId/reviews/:reviewId', async (req, res) => {
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

module.exports = router