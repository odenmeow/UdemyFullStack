const express = require("express");
const app = express(); //回傳一個物件過來

// HTTP request GET  POST PUT DELETE

app.get("/", (req, res) => {
  res.send("歡迎來到首頁");
});

app.get("/anotherPage", (req, res) => {
  res.send("這是另一個頁面");
});

app.get("/example", (req, res) => {
  // res.send("<h1>這是一個h1標籤示範</h1>");
  // res.send("<p>這是一個段落</p>");
  /**           傳送網頁.html                */
  // 下面一定要用absolutely rout
  // res.sendFile(__dirname + "/example.html");
  /**       物件傳送過去變成json格式              */
  // let obj = {
  //   title: "Web Design",
  //   website: "Udemy",
  // };
  // res.json(obj);
  /**         導向另一個url或網址  */
  res.redirect("/newPosition");
});

app.get("/newPosition", (req, res) => {
  console.log(res.send("這邊才是正確資源位置"));
});

// port callback
app.listen(3000, () => {
  console.log("伺服器正在聆聽port3000..");
});
