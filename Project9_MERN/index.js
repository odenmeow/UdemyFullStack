const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect("mongodb://localhost:27017/MernDB")
  .then(() => {
    console.log("成功連接到MongoDB..");
  })
  .catch((e) => {
    console.log(e);
  });
// middleWares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(8080, () => {
  console.log("Backend on port 8080");
});
