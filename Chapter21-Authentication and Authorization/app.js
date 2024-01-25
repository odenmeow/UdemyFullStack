require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Student = require("./models/student");
const cors = require("cors");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const bcrypt = require("bcrypt");
const verifyUser = (req, res, next) => {
  if (!req.session.isVerified) {
    return res.send("先登入");
  } else {
    next();
  }
};
mongoose
  .connect("mongodb://127.0.0.1:27017/exampleDB")
  .then(() => {
    console.log("成功連結mongodb");
  })
  .catch((e) => {
    console.log(e);
  });
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(methodOverride("_method"));
app.use(cookieParser(process.env.COOKIEKEY));
app.use(
  session({
    secret: process.env.SESSIONKEY,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, //localhost無法https
  })
);
app.use(flash());

app.get("/", (req, res) => {
  return res.send("這是首頁" + req.flash("info"));
});
app.get("/flash", (req, res) => {
  req.flash("info", "flasssssssh Fish");
  res.redirect("/");
});
app.get("/students", async (req, res) => {
  let foundStudent = await Student.find({}).exec();
  // console.log("找到了");
  return res.send(foundStudent);
});
app.post("/students", async (req, res) => {
  try {
    let { username, password } = req.body;
    // Number要記得用 不然那是字串而已QQ
    let hashValue = await bcrypt.hash(password, Number(process.env.SALTROUNDs));
    let newStudent = new Student({ username, password: hashValue });
    let savedStudent = await newStudent.save();
    console.log(username, password);
    return res.send({ message: "成功新增學生", savedStudent });
  } catch (e) {
    return res.status(400).send(e);
  }
});

app.post("/students/login", async (req, res) => {
  try {
    let { username, password } = req.body;
    let data = await Student.findOne({ username }).exec();
    console.log("準備驗證");
    if (!data) {
      return res.status(404).send("查無使用者");
    } else {
      //如果右邊錯誤，直接沒反應，需要用catch
      let result = await bcrypt.compare(password, data.password);
      console.log(result);
      if (result) {
        req.session.isVerified = true;
        return res.send("登入成功");
      } else {
        req.session.isVerified = false;
        return res.send("登入失敗");
      }
    }
  } catch (e) {
    return res.status(400).send("失敗" + e);
  }
});
app.post("/students/logout", (req, res) => {
  req.session.isVerified = false;
  return res.send("已經登出");
});
app.get("/secret", verifyUser, async (req, res) => {
  return res.send("看得到我代表成功登入");
});
app.listen(3001, () => {
  console.log("server running on port 3001");
});
