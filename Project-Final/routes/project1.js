const express = require("express");
const router = express.Router();

// 透過巧妙設計，project1/styles/style.css
// 這些可以直接透過網址偷吃步搞定 > href= ' ./styles/style.css'
// 這是因為 ./會以目前網址 例如localhost:3000/project1/index 去做
// 那就變成 project1/styles/style.css
// 因為我public下面folder名稱跟route名稱有巧妙設計
router.get("/index", (req, res) => {
  res.render("project1/index");
});
router.get("/china", (req, res) => {
  res.render("project1/china");
});
router.get("/japan", (req, res) => {
  res.render("project1/japan");
});
router.get("/korea", (req, res) => {
  res.render("project1/korea");
});
router.get("/taiwan", (req, res) => {
  res.render("project1/taiwan");
});

module.exports = router;
