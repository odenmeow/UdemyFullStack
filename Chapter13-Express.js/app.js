const express = require("express");
const app = express(); //回傳一個物件過來

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 實際使用
app.use((req, res, next) => {
  console.log("正在經過middleware");
  next();
});
app.use((req, res, next) => {
  console.log("正在經過第二個middleware");
  next();
});
// static file示範 253
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// HTTP request GET  POST PUT DELETE

// app.get("/", (req, res) => {
//   res.send("歡迎來到首頁");
// });

app.get("/anotherPage", (req, res) => {
  res.send("這是另一個頁面");
});

// app.get("/example", (req, res) => {
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
// res.redirect("/newPosition");
// });

app.get("/newPosition", (req, res) => {
  res.send("這邊才是正確資源位置");
});

app.get("/fruit", (req, res) => {
  res.send("歡迎來到水果頁面");
});
app.get("/fruit/:someFruit", (req, res) => {
  res.send(req.params.someFruit);
});
app.get("/example", (req, res) => {
  res.sendFile(__dirname + "/example.html");
});
app.get("/formhandling", (req, res) => {
  console.log(req.query);
  res.send(
    "伺服器已經收到表單，你收到的資料如下" +
      "<br>" +
      "名稱:" +
      req.query.name +
      "年紀:" +
      req.query.age
  );
});
app.post("/formhandling", (req, res) => {
  console.log(req.body);
  res.send("帳號是" + req.body.email);
});

app.get("*", (req, res) => {
  // res.status(404); // return res object , method chain
  // res.send("你所找的頁面不存在");
  res.status(404).send("你所找的頁面不存在");
});

// port callback
app.listen(3000, () => {
  console.log("伺服器正在聆聽port3000..");
});
