const mongoose = require("mongoose");

const cropSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      //   default: req.userId
    },
    landInAcre: {
      type: String,
      required: true,
    },
    cultivation: {
      type: String,
      required: true,
    },

    farm1: {
      type: Number,
      required: true,
    },
    farm2: {
      type: Number,
      // required: true,
    },
    farm3: {
      type: Number,
      // required: true,
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Crop = mongoose.model("Crop", cropSchema);
module.exports = { Crop, cropSchema };
