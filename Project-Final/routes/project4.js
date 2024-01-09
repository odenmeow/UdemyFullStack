const express = require("express");
const router = express.Router();

router.get("/index", (req, res) => {
  res.render("project4/index");
});

module.exports = router;
