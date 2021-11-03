const express = require('express');
const tourController = require('./../controllers/tourController');
const router = express.Router();

router.route('/tour-stats').get(tourController.getToursStats);

router
  .route(`/`)
  .get(tourController.getAllTours)
  .post(tourController.createTours);

router
  .route('/:id')
  .get(tourController.getTourById)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTours);

module.exports = router;
