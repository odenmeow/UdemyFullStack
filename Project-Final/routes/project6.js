const express = require("express");
const router = express.Router();

router.get("/index", (req, res) => {
  res.render("project6/index");
});

module.exports = router;
