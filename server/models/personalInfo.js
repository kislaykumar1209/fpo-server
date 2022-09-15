const mongoose = require("mongoose");

const personalSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      //   default: req.userId
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    fhname: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
    },
    aadharFront: [
      {
        type: String,
        required: true,
      },
    ],
    aadharBack: [
      {
        type: String,
        required: true,
      },
    ],
    selfieLocation: [
      {
        type: String,
        required: true,
      },
    ],
    selfieHome: [
      {
        type: String,
        required: true,
      },
    ],
    aadharNo: {
      type: Number,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    dob: {
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

const Personal = mongoose.model("Personal Detail", personalSchema);
module.exports = { Personal, personalSchema };
