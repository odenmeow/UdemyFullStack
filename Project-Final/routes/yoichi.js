const express = require("express");
const router = express.Router();

router.get("/index", (req, res) => {
  res.render("yoichi/index");
});

router.get("/edit", (req, res) => {
  res.render("yoichi/edit");
});

module.exports = router;
