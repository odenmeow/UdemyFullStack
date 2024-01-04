const express = require("express");
const app = express();
const mongoose = require("mongoose");

// 會回傳成功或失敗 (promise)
mongoose
  .connect("mongodb://127.0.0.1:27017/exampleDB")
  .then(() => {
    console.log("mongodb連接成功");
  })
  .catch((e) => {
    console.log("連線失敗", e);
  });

app.set("view engine", "ejs");
app.listen(3000, () => {
  console.log("正在聽port 3000");
});
