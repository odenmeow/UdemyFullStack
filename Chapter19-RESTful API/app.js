const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Student = require("./models/student");
const cors = require("cors");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
mongoose
  .connect("mongodb://127.0.0.1:27017/exampleDB")
  .then(() => {
    console.log("mongoDB 連線成功");
  })
  .catch((e) => {
    console.log(e);
  });

app.get("/students", async (req, res) => {
  try {
    let studentData = await Student.find({}).exec();
    return res.send(studentData);
  } catch (e) {
    // console.log(e); //只有伺服器看得到的錯誤不好
    return res.status(500).send("尋找資料時發生錯誤"); //內部錯誤=500
  }
});
app.get("/students/:_id", async (req, res) => {
  try {
    let { _id } = req.params;
    let studentData = await Student.find({ _id }).exec();
    return res.send(studentData);
  } catch (e) {
    console.log(e);
    console.log("資料型態為", typeof e);
    return res
      .status(500)
      .send("尋找資料時發生錯誤" + "\n" + e.message + "\n" + e.reason);
  }
});

app.post("/students", async (req, res) => {
  try {
    let { name, age, major, merit, other } = req.body;
    //   console.log(name, age, major, merit, other);
    let newStudent = new Student({
      name,
      age,
      major,
      scholarship: {
        merit,
        other,
      },
    });
    let result = await newStudent.save();
    return res.send({ msg: "資料儲存成功", result });
  } catch (e) {
    return res.status(500).send("儲存發生錯誤" + e.message);
  }
});

app.put("/students/:_id", async (req, res) => {
  try {
    let { name, age, major, merit, other } = req.body;
    let { _id } = req.params;
    console.log(_id);
    console.log(name, age, major, merit, other);
    // replaceOne for @8.0.3版本  findOneAndUpdate for @6.6.5版本
    let newData = await Student.findOneAndUpdate(
      { _id },
      { name, age, major, scholarship: { merit, other } },
      { new: true, runValidators: true, overwrite: true }
      // 因為put 本來就要提供所有數據，如果省略 自然要變成預設或者不存在該數據!
    );
    return res.send({ msg: "成功更新學生資料", updatedData: newData });
  } catch (e) {
    return res.status(500).send("錯誤" + e.message);
  }
});

class NewData {
  constructor() {}
  setProperty(key, value) {
    if (key !== "merit" && key !== "other") {
      this[key] = value;
    } else {
      this[`scholarship.${key}`] = value;
    }
  }
}
app.patch("/students/:_id", async (req, res) => {
  try {
    // let { name, age, major, merit, other } = req.body;
    let { _id } = req.params;
    let newObject = new NewData();
    for (let property in req.body) {
      newObject.setProperty(property, req.body[property]);
    }
    console.log(newObject);
    console.log(req.body);
    let result = await Student.findOneAndUpdate({ _id }, newObject, {
      new: true,
      runValidators: true,
      //   overwrite: true, // 版本8.0.3 的話 無所謂
      overwrite: false, //如果版本是 6.6.5要小心 如果依舊true會形同PUT 覆蓋大家
    });
    return res.send({ msg: "成功更新學生資料", updatedData: result });
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

app.delete("/students/:_id", async (req, res) => {
  try {
    let { _id } = req.params;
    let deleteResult = await Student.deleteOne({ _id });
    return res.send({ msg: "成功刪除", obj: deleteResult });
  } catch (e) {
    return res.status(400).send(e.message);
  }
});
app.listen(3000, () => {
  console.log("伺服器聆聽中");
});
