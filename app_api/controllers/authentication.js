const mongoose = require('mongoose');
const User = require('../models/users');

// REGISTER
const register = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.status(400).json({ message: "All fields required" });
  }

  try {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: ""
    });

    user.setPassword(req.body.password);

    const savedUser = await user.save();

    const token = user.generateJWT();
    return res.status(200).json({ token });

  } catch (err) {
    return res.status(400).json(err);
  }
};

// LOGIN
const login = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({ message: "All fields required" });
  }

  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user || !user.validPassword(req.body.password)) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = user.generateJWT();
    return res.status(200).json({ token });

  } catch (err) {
    return res.status(400).json(err);
  }
};

module.exports = {
  register,
  login
};
