const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const authRoute = require("./routes").auth;
const courseRoute = require("./routes").course;
const passport = require("passport");
const cors = require("cors");
const port = process.env.PORT || 8080;
require("./config/passport")(passport);
mongoose
  .connect(process.env.MONGODB_CLOUDE_URL)
  .then(() => {
    console.log("成功連接到MongoDB..");
  })
  .catch((e) => {
    console.log(e);
  });
// middleWares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/user", authRoute);

// 只有登入系統的人，instructor才能夠製作，student才能註冊課程
// courseRoute應要被JWT保護
// 如果 req.header 沒有jwt則 req就應該被視為unauthorized
app.use(
  "/api/courses",
  passport.authenticate("jwt", { session: false }),
  courseRoute
);

app.listen(port, () => {
  console.log("Backend on port 8080");
});
