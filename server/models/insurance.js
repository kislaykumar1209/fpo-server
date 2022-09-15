const mongoose = require("mongoose");

const insuranceSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      //   default: req.userId
    },

    lifeInsurance: {
      type: String,
      required: true,
    },

    healthInsurance: {
      type: String,
      required: true,
    },

    microPension: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Insurance = mongoose.model("Insurance", insuranceSchema);
module.exports = { Insurance, insuranceSchema };
