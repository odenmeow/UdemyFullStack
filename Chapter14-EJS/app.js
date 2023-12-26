const { render } = require("ejs");
const express = require("express");
const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const languagesRes = [
    { name: "Python", rating: 9.5, popularity: 9.7, trending: "super hot" },
    { name: "Java", rating: 9.4, popularity: 8.5, trending: "hot" },
    { name: "C++", rating: 9.2, popularity: 7.7, trending: "hot" },
    { name: "PHP", rating: 9.0, popularity: 5.7, trending: "decreasing" },
    { name: "JS", rating: 8.5, popularity: 8.7, trending: "hot" },
  ];
  res.render("index", { languagesRes });
});
app.get("/example", (req, res) => {
  let { name, age } = req.query;
  res.render("response", { name, age });
});

app.get("*", (req, res) => {
  res.status(404).send("你所找的頁面不存在");
});
app.listen(3000, () => {
  console.log("正在聆聽port 3000中");
});
