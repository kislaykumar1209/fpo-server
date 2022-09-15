const mongoose = require("mongoose");

const bankSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      //   default: req.userId
    },
    accountNo: {
      type: String,
      required: true,
    },
    ifsc: {
      type: String,
      required: true,
    },
    branchName: {
      type: String,
      required: true,
    },
    bankName: {
      type: String,
      required: true,
    },
    panNumber: {
      type: String,
      required: true,
    },
    panName: {
      type: String,
      required: true,
    },
    pan: [
      {
        type: String,
        required: true,
      },
    ],

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Bank = mongoose.model("Bank", bankSchema);
module.exports = { Bank, bankSchema };
