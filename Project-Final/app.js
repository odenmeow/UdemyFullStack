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
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(methodOverride("_method"));
mongoose
  .connect("mongodb://127.0.0.1:27017/exampleDB")
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
app.use((err, req, res, next) => {
  res.status(500).render("students/error", { e: err });
  console.log("有錯誤");
  next();
});
// 不可使用後不return或者不next() 很危險會卡住整個網站不做事
// app.use((req, res, next) => {
//   console.log("我是下一個next");
// });

app.listen(3001, () => {
  console.log("server正在觀察中!");
});
