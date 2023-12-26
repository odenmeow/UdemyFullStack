const express = require("express");
const app = express(); //回傳一個物件過來

// HTTP request GET  POST PUT DELETE

app.get("/", (req, res) => {
  res.send("歡迎來到首頁");
});

app.get("/anotherPage", (req, res) => {
  res.send("這是另一個頁面");
});

// port callback
app.listen(3000, () => {
  console.log("伺服器正在聆聽port3000..");
});
