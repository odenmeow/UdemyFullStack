const router = require("express").Router();
const Course = require("../models").course;
const courseValidation = require("../validation").courseValidation;

router.use((req, res, next) => {
  console.log("course route 接收request...");
  console.log("驗證身分通過");
  next();
});
router.post("/", async (req, res) => {
  //數據要先符合規範
  let { error } = courseValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  if (req.user.isStudent()) {
    return res.status(400).send("只有講師才能發布課程，請登入其他帳號");
  }
  let { title, description, price } = req.body;
  try {
    let newCourse = new Course({
      title,
      description,
      price,
      instructor: req.user._id,
    });
    let savedCourse = await newCourse.save();
    return res.send({ msg: "新課程保存成功", title });
  } catch (e) {
    return res.status(500).send("無法創建課程");
  }
});
module.exports = router;
