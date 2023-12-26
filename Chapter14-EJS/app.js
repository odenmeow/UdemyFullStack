const express = require("express");
const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/:name", (req, res) => {
  //   res.send("歡迎來到首頁");
  let { name } = req.params;
  // k v 相同的狀況 可以直接寫 name就好
  res.render("index", { name });
  console.log(req.params.name);
});

app.get("*", (req, res) => {
  res.status(404).send("你所找的頁面不存在");
});
app.listen(3000, () => {
  console.log("正在聆聽port 3000中");
});
