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

// POST: /trips - add a new trip
const tripsCreate = async (req, res) => {
  try {
    const trip = await Trip.create(req.body);
    return res.status(201).json(trip);
  } catch (err) {
    return res.status(400).json(err);
  }
};

// PUT: /trips/:tripCode - update an existing trip
const tripsUpdateTrip = async (req, res) => {
  try {
    const q = await Trip.findOneAndUpdate(
      { code: req.params.tripCode },
      {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
      },
      { new: true } // return updated document
    ).exec();

    if (!q) {
      return res.status(400).json({ message: "Trip not found" });
    }

    return res.status(201).json(q);

  } catch (err) {
    return res.status(500).json(err);
  }
};

// DELETE: /trips/:tripCode - delete a trip by code
const tripsDeleteTrip = async (req, res) => {
  try {
    const trip = await Trip.findOneAndDelete({ code: req.params.tripCode }).exec();

    if (!trip) {
      return res.status(404).json({ message: "Trip not found" });
    }

    return res.status(204).json(null); // No content, successful delete
  } catch (err) {
    return res.status(500).json(err);
  }
};


module.exports = {
  tripsList,
  tripsFindByCode,
  tripsCreate,
  tripsUpdateTrip,
  tripsDeleteTrip
};
