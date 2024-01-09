const router = require("express").Router();
const passport = require("passport");
router.get("/login", (req, res) => {
  return res.render("login");
});
router.get("/google", (req, res) => {
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  });
});
module.exports = router;
