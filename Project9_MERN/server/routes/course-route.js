const { course } = require("../models");

const router = require("express").Router();
const Course = require("../models").course;
const courseValidation = require("../validation").courseValidation;
router.use((req, res, next) => {
  console.log("course route 接收request...");
  console.log("驗證身分通過");
  next();
});
// 取得所有課程
router.get("/", async (req, res) => {
  try {
    let foundCourses = await Course.find({})
      .populate("instructor", ["username", "email", "password"])
      .exec();

    res.send(foundCourses);
  } catch (error) {
    return res.status(500).send(error);
  }
});

// 依照講師id尋找課程
router.get("/instructor/:instructor_id", async (req, res) => {
  let { instructor_id } = req.params;
  try {
    let foundCourses = await Course.find({ instructor: instructor_id })
      .populate("instructor", ["username", "email"])
      .exec();
    res.send(foundCourses);
  } catch (e) {
    return res.send(500).send(e);
  }
});
// 用學生id尋找課程
router.get("/student/:student_id", async (req, res) => {
  let { student_id } = req.params;
  try {
    let foundCourses = await Course.find({ students: student_id })
      .populate("instructor", ["username", "email"])
      .exec();
    return res.send(foundCourses);
  } catch (error) {}
});

// 依照課程id 找課程
router.get("/:_id", async (req, res) => {
  let { _id } = req.params;
  try {
    let foundCourse = await Course.findOne({ _id })
      .populate("instructor", ["email", "username"])
      .exec();
    console.log(foundCourse);
    return res.send(foundCourse);
  } catch (e) {
    return res.status(500).send(e);
  }
});

// 依照課程名稱找課程
router.get("/findByName/:name", async (req, res) => {
  let { name } = req.params;
  // 正則表達也能找尋模糊搜尋，i 不分大小寫
  const regex = new RegExp(name, "i");
  // let foundCourse = await Course.find({
  //   title: { $regex: name, $option: "i" },
  // });
  try {
    let foundCourses = await Course.find({ title: regex })
      .populate("instructor", ["email", "username"])
      .exec();
    return res.send(foundCourses);
  } catch (e) {
    return res.status(500).send(e);
  }
});
// 學生註冊課程的功能 ( by 課程id)
router.post("/enroll/:_id", async (req, res) => {
  let { _id } = req.params;
  try {
    let foundCourse = await Course.findOne({ _id });
    foundCourse.students.push(req.user._id);
    await foundCourse.save();
    res.send("註冊完成");
  } catch (error) {
    res.status(500).send(error);
  }
});
// 新增課程
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

// 更改課程
router.patch("/:_id", async (req, res) => {
  // 驗證數據是否符合規範
  let { error } = courseValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let { _id } = req.params;
  // 先確認course存在與否
  try {
    let foundCourse = await Course.findOne({ _id });
    if (!foundCourse) {
      return res.status(400).send("查無該課程，無法進行內容更新");
    }
    //必須為該課程講師才能修改
    if (foundCourse.instructor.equals(req.user._id)) {
      let updatedCourse = await Course.findOneAndUpdate({ _id }, req.body, {
        new: true,
        runValidators: true,
      }).exec();
      return res.send({
        message: "課程已經更新成功",
        updatedCourse,
      });
    } else {
      return res.status(403).send("課程講師才能編輯");
    }
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.delete("/:_id", async (req, res) => {
  let { _id } = req.params;
  // 確認課程存在
  try {
    let foundCourse = await Course.findOne({ _id });
    if (!foundCourse) {
      return res.status(400).send("找不到課程，無法刪除");
    }
    // 必須是該講師才能刪
    if (foundCourse.instructor.equals(req.user._id)) {
      let deleteCourse = await Course.findOneAndDelete({ _id }).exec();
      return res.send("課程已被刪除");
    } else {
      return res.status(403).send("只有課程講師能刪除");
    }
  } catch (err) {}
});
module.exports = router;
