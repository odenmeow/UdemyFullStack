const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRouter = require("./routes/auth-routes");
mongoose
  .connect("mongodb://127.0.0.1:27017/GoogleDB")
  .then(() => {
    console.log("Connecting to mongodb..");
  })
  .catch((e) => {
    console.log(e);
  });
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/auth", authRouter);
app.get("/", (req, res) => {
  return res.render("index");
});

app.listen(8080, () => {
  console.log("server run on port 8080");
});
