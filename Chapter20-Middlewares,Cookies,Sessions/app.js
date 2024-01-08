const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const methodOverride = require("method-override");
const studentRouter = require("./routes/student-routes");
const facultyRouter = require("./routes/faculty-routes");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(methodOverride("_method"));
app.use("/students", studentRouter);
app.use("/faculty", facultyRouter);
mongoose
  .connect("mongodb://127.0.0.1:27017/exampleDB")
  .then(() => {
    console.log("mongoDB 連線成功");
  })
  .catch((e) => {
    console.log(e);
  });
function myMiddleware(req, res, next) {
  console.log("正在執行myMiddleware");
  next();
}

app.get("/", (req, res) => {
  return res.redirect("/students");
});

app.use((err, req, res, next) => {
  res.status(500).render("error", { e: err });
  next();
});
app.use((req, res, next) => {
  console.log("我是下一個next");
});
app.listen(3000, () => {
  console.log("伺服器聆聽中");
});
