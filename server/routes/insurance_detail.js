const express = require("express");
const insuranceRouter = express.Router();
const auth = require("../middlewares/auth");
const { Insurance } = require("../models/insurance");

insuranceRouter.post("/api/add-insurance", auth, async (req, res) => {
  try {
    const { lifeInsurance, healthInsurance, microPension } = req.body;
    let insurance = new Insurance({
      userId: req.user,
      lifeInsurance,
      healthInsurance,
      microPension,
    });
    insurance = await insurance.save();
    res.json(insurance);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = insuranceRouter;
