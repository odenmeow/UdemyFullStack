const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const methodOverride = require("method-override");
const project1Router = require("./routes/project1");
const project2Router = require("./routes/project2");
const project3Router = require("./routes/project3");
const project4Router = require("./routes/project4");
const project5Router = require("./routes/project5");
const project6Router = require("./routes/project6");
const studentRouter = require("./routes/student-routes");
const facultyRouter = require("./routes/faculty-routes");
const yoichiRouter = require("./routes/yoichi");
require("dotenv").config();
const session = require("express-session");
const passport = require("passport");
const flash = require("connect-flash");
require("./config/passport");

const authRouter = require("./routes/auth-routes");
const profileRouter = require("./routes/profile-routes");
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(methodOverride("_method"));
const port = process.env.PORT || 8080;
mongoose
  .connect(process.env.MONGODB_CLOUDE_URL)
  .then(() => {
    console.log("mongoDB 連線成功");
  })
  .catch((e) => {
    console.log(e);
  });
app.get(["/", "/project3/index"], async (req, res) => {
  console.log("進來了");
  return res.render("project3/index");
});
app.get(
  "/awake",
  async((req, res) => {
    return res.send("已喚醒");
  })
);
app.use("/project1", project1Router);
app.use("/project2", project2Router);
app.use("/project3", project3Router);
app.use("/project4", project4Router);
app.use("/project5", project5Router);
app.use("/project6", project6Router);
app.get("/students/index", (req, res) => {
  return res.redirect("/students");
});
app.use("/students", studentRouter);
app.use("/faculty", facultyRouter);
app.use("/yoichi", yoichiRouter);
/////////////////////

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);
// 用完session後 記得
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error = req.flash("error");
  next();
});
app.get(["/project7/index", "/project7"], (req, res) => {
  return res.render("project7/index", { user: req.user });
});
app.use("/project7/auth", authRouter);
app.use("/project7/profile", profileRouter);

//////////////////////
app.use((err, req, res, next) => {
  res.status(500).render("students/error", { e: err });
  console.log("有錯誤");
  next();
});
// 不可使用後不return或者不next() 很危險會卡住整個網站不做事
// app.use((req, res, next) => {
//   console.log("我是下一個next");
// });

app.listen(port, () => {
  console.log("server正在觀察中!", port);
});
