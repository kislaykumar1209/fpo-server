const express = require("express");
const cropRouter = express.Router();
const auth = require("../middlewares/auth");
const { Crop } = require("../models/crop");

cropRouter.post("/api/add-crop", auth, async (req, res) => {
  try {
    const { landInAcre, cultivation, farm1, farm2, farm3 } = req.body;

    let crop = new Crop({
      userId: req.user,
      landInAcre,
      cultivation,
      farm1,
      farm2,
      farm3,
    });

    crop = await crop.save();
    res.json(crop);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = cropRouter;
