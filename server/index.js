const express = require("express");
// import 'package:express/express.dart' it is same in express
const mongoose = require("mongoose");

//Imports From Other Files
const authRouter = require("./routes/auth.js");
const bankRouter = require("./routes/bank_detail.js");
const cropRouter = require("./routes/crop_detail.js");
const farmerRouter = require("./routes/farmer_profile.js");
const insuranceRouter = require("./routes/insurance_detail.js");
const personalRouter = require("./routes/personal_detail.js");

//INIT
const PORT = process.env.PORT || 3000;
const app = express();

const DB = "mongodb+srv://FPO:nahibatyega@cluster0.qatkixf.mongodb.net/FPO1";

//middleware
app.use(express.json());
app.use(authRouter);
app.use(personalRouter);
app.use(bankRouter);
app.use(insuranceRouter);
app.use(cropRouter);
app.use(farmerRouter);

//Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Connected at port ${PORT}`);
});
