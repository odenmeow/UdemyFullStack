const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const authRoute = require("./routes").auth;
const courseRoute = require("./routes").course;
const passport = require("passport");
require("./config/passport")(passport);
mongoose
  .connect("mongodb://127.0.0.1:27017/MernDB")
  .then(() => {
    console.log("成功連接到MongoDB..");
  })
  .catch((e) => {
    console.log(e);
  });
// middleWares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", authRoute);

// 只有登入系統的人，instructor才能夠製作，student才能註冊課程
// courseRoute應要被JWT保護
// 如果 req.header 沒有jwt則 req就應該被視為unauthorized
app.use(
  "/api/courses",
  passport.authenticate("jwt", { session: false }),
  courseRoute
);

app.listen(8080, () => {
  console.log("Backend on port 8080");
});
