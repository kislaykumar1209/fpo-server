const mongoose = require("mongoose");

const farmerSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      //   default: req.userId
    },
    landDetail: {
      type: String,
      required: true,
    },
    landInAcre: {
      type: String,
      required: true,
    },
    mainCrop: {
      type: String,
      required: true,
    },
    supplierCode: {
      type: Number,
      required: true,
    },
    last3ProdReport: [
      {
        type: String,
        required: true,
      },
    ],

    totalMember: {
      type: Number,
      required: true,
    },

    annualIncome: {
      type: Number,
      required: true,
    },
    toilet: {
      type: String,
      default: "Yes",
    },
    electricity: {
      type: String,
      default: "Yes",
    },

    mnregaCard: {
      type: Number,
      required: true,
    },
    prevFPO: {
      type: String,
      required: true,
    },
    bearerFPO: {
      type: String,
      default: "No",
    },
    date: {
      type: String,
      required: true,
    },
    shareCapital: {
      type: String,
      required: true,
    },
    produceSolid: {
      type: String,
      required: true,
    },
    transactionWork: {
      type: String,
      required: true,
    },
    memberFPO: {
      type: String,
      default: "No",
    },
    advisoryService: {
      type: String,
      default: "No",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Farmer = mongoose.model("Farmer", farmerSchema);
module.exports = { Farmer, farmerSchema };
