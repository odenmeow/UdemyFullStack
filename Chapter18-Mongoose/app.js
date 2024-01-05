const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { Schema } = mongoose;
app.set("view engine", "ejs");
// 會回傳成功或失敗 (promise)
mongoose
  .connect("mongodb://127.0.0.1:27017/exampleDB")
  .then(() => {
    console.log("mongodb連接成功");
  })
  .catch((e) => {
    console.log("連線失敗", e);
  });

const studentSchema = new Schema({
  name: String,
  // name:{type:String}  也可以
  // age: Number,
  age: { type: Number, min: [0, "年齡不能小於0"] },
  major: String,
  scholarship: {
    merit: Number,
    other: Number,
  },
});

const Student = mongoose.model("Student", studentSchema);

// const newObject = new Student({
//   name: "UmiOOO",
//   age: 17,
//   major: "Mathematics",
//   scholarship: {
//     merit: 1000,
//     other: 2000,
//   },
// });
// console.log("儲存之前");
// console.log(newObject); //建立的時候就已經有id了
// newObject
//   .save()
//   .then((savedObject) => {
//     console.log("資料成功儲存");
//     console.log(savedObject);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
/***比較弱的作法 */
// Student.find()
//   .exec()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

app.get("/", async (req, res) => {
  try {
    let data = await Student.find().exec();
    // let data = await Student.findOne({ name: "UmiOOO" }).exec();
    //會直接得到 或者透過try catch拋出錯誤
    res.send(data);
  } catch (e) {
    console.log(e);
  }
});
// Student.updateOne(
//   { name: "UmiOOO" },
//   { age: 15 },
//   { runValidators: true, new: true }
// )
//   .exec()
//   .then((msg) => {
//     console.log("成功改變");
//     console.log(msg);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
// Student.find()
//   .exec()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
/*             測試如果update會忽略schema new的話呢?                    */
// let newStudent = new Student({
//   name: "Oni",
//   age: -10,
//   major: "CS",
//   scholarship: {
//     merit: 10,
//     other: 0,
//   },
// });
// newStudent.save().then((data) => {
//   console.log(data);
// });

// Student.findOneAndUpdate(
//   { name: "Oni" },
//   { age: 255 },
//   { runValidators: true, new: true } //得到的then data 會是更新完成的資料
// )
//   .then((data) => {
//     console.log("找到並且更新了");
//     console.log(data);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

// Student.find({ "scholarship.merit": { $gte: 3500 } }).exec()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((e) => console.log(e));

Student.deleteMany({ name: "UmiOOO" })
  .exec()
  .then((msg) => {
    console.log(msg);
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(3000, () => {
  console.log("正在聽port 3000");
});
