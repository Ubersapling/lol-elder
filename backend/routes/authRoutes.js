const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const router = express.Router();

require('dotenv').config();

const secretKey = process.env.JWT_SECRET;

router.post("/register", async(req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: "24h" });
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/login", async(req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username});
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      return res.status(401).send({ error: "Login failed!" });
    }
    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: "24h" });
    res.send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
