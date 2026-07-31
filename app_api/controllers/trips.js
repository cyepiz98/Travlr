const mongoose = require('mongoose');
const Trip = require('../models/travlr');   // Register model

// GET: /trips - lists all trips
const tripsList = async (req, res) => {
  try {
    const q = await Trip.find({}).exec();
    return res.status(200).json(q);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// GET: /trips/:tripCode - find trip by code
const tripsFindByCode = async (req, res) => {
  try {
    const trip = await Trip.findOne({ code: req.params.tripCode }).exec();
    if (!trip) {
      return res.status(404).json({ message: "Trip not found" });
    }
    return res.status(200).json(trip);
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = {
  tripsList,
  tripsFindByCode
};
