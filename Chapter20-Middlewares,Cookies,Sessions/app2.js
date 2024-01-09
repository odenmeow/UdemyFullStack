const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const checkUser = (req, res, next) => {
  if (!req.session.isVerified) {
    return res.send("先驗證過才能看到內容");
  } else {
    next();
  }
};
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(methodOverride("_method"));
app.use(cookieParser("我是密碼，塞密碼就對了"));
app.use(
  session({
    secret: "onimimimi555111",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, //localhost無法https
  })
);
app.get("/", (req, res) => {
  return res.send("這是首頁");
});
app.get("/setCookies", (req, res) => {
  //   res.cookie("yourCookie2", "Oreo2");
  res.cookie("yourSecretCookie", "I don't tell you", { signed: true });
  return res.send("已經設置cookie了");
});
app.get("/seeCookies", async (req, res) => {
  let cookies = req.cookies;
  //   console.log(cookies);
  let json = JSON.stringify(cookies);
  console.log(req.signedCookies);
  //   return res.send("偷看一下signed cookies: " + req.signedCookies.yourSecretCookie);
  return res.send("偷看一下cookies: " + JSON.stringify(req.cookies));
});
app.get("/setSessionData", (req, res) => {
  console.log(req.session);
  req.session.example = "some msg here";
  return res.send("在server設置session資料，在browser設定簽名後的sessionid");
});
app.get("/secret", checkUser, (req, res) => {
  return res.send("早餐吃什麼");
});
app.get("/verifyUser", (req, res) => {
  req.session.isVerified = true;
  return res.send("你已經被驗證了!");
});

app.get("/seeSessionData", (req, res) => {
  return res.send(req.session);
});
app.listen(3000, () => {
  console.log("server running on port 3000");
});
