const express = require("express");
const farmerRouter = express.Router();
const auth = require("../middlewares/auth");
const { Farmer } = require("../models/farmer");

farmerRouter.post("/api/add-farmer", auth, async (req, res) => {
  try {
    const {
      landDetail,
      landInAcre,
      mainCrop,
      supplierCode,
      last3ProdReport,
      totalMember,
      annualIncome,
      toilet,
      electricity,
      mnregaCard,
      prevFPO,
      bearerFPO,
      date,
      shareCapital,
      produceSolid,
      transactionWork,
      memberFPO,
      advisoryService,
    } = req.body;

    let farmer = new Farmer({
      userId: req.user,
      landDetail,
      landInAcre,
      mainCrop,
      supplierCode,
      last3ProdReport,
      totalMember,
      annualIncome,
      toilet,
      electricity,
      mnregaCard,
      prevFPO,
      bearerFPO,
      date,
      shareCapital,
      produceSolid,
      transactionWork,
      memberFPO,
      advisoryService,
    });

    farmer = await farmer.save();
    res.json(farmer);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = farmerRouter;
