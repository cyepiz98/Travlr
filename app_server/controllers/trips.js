const Trip = require('../models/travlr');

// GET all trips
const tripsList = async (req, res) => {
  try {
    const trips = await Trip.find({});
    res.status(200).json(trips);
  } catch (err) {
    console.log("🔥 ERROR in tripsList:", err);
    res.status(500).json({ error: err.message });
  }
};

// GET trip by code
const tripsFindByCode = async (req, res) => {
  try {
    const trip = await Trip.findOne({ code: req.params.tripCode });
    res.status(200).json(trip);
  } catch (err) {
    console.log("ERROR in tripsFindByCode:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  tripsList,
  tripsFindByCode
};

