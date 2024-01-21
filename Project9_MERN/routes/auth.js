const router = require("express").Router();
const registerValidation = require("../validation").registerValidation;
const loginValidation = require("../validation").loginValidation;
const User = require("../models").user;
const jwt = require("jsonwebtoken");
router.use((req, res, next) => {
  console.log("正在接受auth有關的請求");
  next();
});

router.get("/testAPI", (req, res) => {
  return res.send("成功連接auth route");
});

router.post("/register", async (req, res) => {
  // 確認傳入的資料 ， 是否符合規範
  let { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  // 確認信箱是否已註冊過
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("信箱已被註冊過了");
  // 製作新用戶
  let { email, username, password, role } = req.body;
  let newUser = new User({ email, username, password, role });
  try {
    let savedUser = await newUser.save();
    return res.send({
      msg: "成功建立",
      savedUser: savedUser,
    });
  } catch (error) {
    return res.status(500).send("無法儲存使用者");
  }
});

router.post("/login", async (req, res) => {
  // 確認格式是否正確
  let { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  // 確認信箱是否已註冊過
  const foundUser = await User.findOne({ email: req.body.email });
  if (!foundUser) return res.status(400).send("找不到使用者，請確認信箱");
  foundUser.comparePassword(req.body.password, (err, isMatch) => {
    console.log("pass");
    if (err) {
      console.log("錯誤", err);
      return res.status(500).send(err); // err發生
    }
    if (isMatch) {
      // 製作JWT
      const tokenObject = { _id: foundUser._id, email: foundUser.email };
      const token = jwt.sign(tokenObject, process.env.PASSPORT_SECRET);
      return res.send({
        msg: "成功登入",
        token: "JWT " + token, //JWT 後面留一個空白!
        user: foundUser,
      });
    } else {
      // 密碼錯誤
      return res.status(401).send("密碼錯誤");
    }
  });
});

module.exports = router;
