const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(methodOverride("_method"));
app.use(cookieParser());
app.get("/", (req, res) => {
  return res.send("這是首頁");
});
app.get("/setCookies", (req, res) => {
  res.cookie("yourCookie2", "Oreo2");
  return res.send("已經設置cookie了");
});
app.get("/seeCookies", async (req, res) => {
  let cookies = req.cookies;
  //   console.log(cookies);
  let json = JSON.stringify(cookies);
  // console.log(json);
  return res.send("偷看一下cookies" + json);
});
app.listen(3000, () => {
  console.log("server running on port 3000");
});
