const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Student = require("./models/student");

app.set("view engine", "ejs");

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

app.listen(3000, () => {
  console.log("伺服器聆聽中");
});
