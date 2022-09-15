const express = require("express");
const personalRouter = express.Router();
const auth = require("../middlewares/auth");
const { Personal } = require("../models/personalInfo");

personalRouter.post("/api/add-personal", auth, async (req, res) => {
  try {
    const {
      name,
      gender,
      fhname,
      address,
      dob,
      age,
      aadharNo,
      aadharFront,
      aadharBack,
      selfieLocation,
      selfieHome,
    } = req.body;

    let personal = new Personal({
      userId: req.user,
      name,
      gender,
      fhname,
      address,
      dob,
      age,
      aadharNo,
      aadharFront,
      aadharBack,
      selfieLocation,
      selfieHome,
    });

    personal = await personal.save();
    res.json(personal);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = personalRouter;
