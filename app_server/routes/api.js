var express = require('express');
var router = express.Router();
var tripsController = require('../controllers/trips');

// GET list of trips
router.get('/trips', tripsController.tripsList);

// GET single trip by code
router.get('/trips/:tripCode', tripsController.tripsFindByCode);

module.exports = router;
