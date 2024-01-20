const router = require("express").Router();
const registerValidation = require("../validation").registerValidation;
const loginValidation = require("../validation").loginValidation;
const User = require("../models").user;
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

module.exports = router;
