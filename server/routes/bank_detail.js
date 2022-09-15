const express = require("express");
const bankRouter = express.Router();
const auth = require("../middlewares/auth");
const { Bank } = require("../models/bank");

bankRouter.post("/api/add-bank", auth, async (req, res) => {
  try {
    const { accountNo, ifsc, branchName, bankName, panNumber, panName, pan } =
      req.body;

    let bank = new Bank({
      userId: req.user,
      accountNo,
      ifsc,
      branchName,
      bankName,
      panNumber,
      panName,
      pan,
    });

    bank = await bank.save();
    res.json(bank);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = bankRouter;
