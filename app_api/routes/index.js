const express = require('express');
const router = express.Router();
const authenticateJWT = require('../config/authenticate');
const tripsController = require('../controllers/trips');
const authController = require('../controllers/authentication');

router.route('/register').post(authController.register);
router.route('/login').post(authController.login);   

// existing trip routes...
router.route('/trips')
  .get(tripsController.tripsList)
  .post(authenticateJWT, tripsController.tripsCreate);

router.route('/trips/:tripCode')
  .get(tripsController.tripsFindByCode)
  .put(authenticateJWT, tripsController.tripsUpdateTrip)
  .delete(authenticateJWT, tripsController.tripsDeleteTrip);

module.exports = router;
