const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("歡迎到教職員首頁");
});

router.get("/new", (req, res) => {
  res.send("教職員的新增頁面");
});
module.exports = router;
