const express = require('express');
const router = express.Router();

const tripsController = require('../controllers/trips');

// GET + POST /api/trips
router.route('/trips')
  .get(tripsController.tripsList)
  .post(tripsController.tripsCreate);

// GET + PUT /api/trips/:tripCode
router.route('/trips/:tripCode')
  .get(tripsController.tripsFindByCode)
  .put(tripsController.tripsUpdateTrip);

module.exports = router;
