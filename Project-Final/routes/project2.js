const express = require("express");
const router = express.Router();

router.get("/index", (req, res) => {
  res.render("project2/index");
});

module.exports = router;
