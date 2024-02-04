const express = require("express");
const router = express.Router();

router.get("/index", (req, res) => {
  res.render("yoichi/index");
});

router.get("/edit", (req, res) => {
  res.render("yoichi/edit");
});
router.get("/history", (req, res) => {
  res.render("yoichi/history");
});
module.exports = router;
