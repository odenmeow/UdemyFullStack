const router = require("express").Router();
const passport = require("passport");
const User = require("../models/user-model");
const bcrypt = require("bcrypt");
router.get("/login", (req, res) => {
  return res.render("project7/login", { user: req.user });
});
router.get("/logout", (req, res) => {
  req.logOut((err) => {
    if (err) return res.send(err);
    return res.redirect("/project7/");
  });
});
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/project7/auth/login",
    failureFlash: "登入失敗，帳號或密碼錯誤", // 自動套入 req.locals.error這邊
  }),
  async (req, res) => {
    return res.redirect("/project7/profile"); //成功才會到這邊
  }
);
router.get("/signup", (req, res) => {
  return res.render("project7/signup", { user: req.user });
});
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);
router.post("/signup", async (req, res) => {
  let { name, email, password } = req.body;
  if (password.length < 8) {
    //二度防堵 避免有人繞路
    req.flash("error_msg", "密碼長度過短 ， 至少>=8 ");
    return res.redirect("/project7/auth/signup");
  }
  if (name.length < 3) {
    req.flash("error_msg", "名稱過短 ， 至少>=3 ");
    return res.redirect("/project7/auth/signup");
  }
  // 確認信箱是否註冊過
  const foundEmail = await User.findOne({ email }).exec();
  if (foundEmail) {
    req.flash("error_msg", "信箱已被註冊，請直接登入，或使用其他註冊");
    return res.redirect("/project7/auth/signup");
  }
  let hashedPassword = await bcrypt.hash(password, 12);
  let newUser = new User({ name, email, password: hashedPassword });
  await newUser.save();
  console.log("註冊成功");
  req.flash("success_msg", "註冊成功!");
  return res.redirect("/project7/auth/login");
});

router.get("/google/redirect", passport.authenticate("google"), (req, res) => {
  console.log("Redirect To profile");
  return res.redirect("/project7/profile");
});
module.exports = router;
