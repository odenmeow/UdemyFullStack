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
  age: Number,
  major: String,
  scholarship: {
    merit: Number,
    other: Number,
  },
});

const Student = mongoose.model("Student", studentSchema);

const newObject = new Student({
  name: "UmiOOO",
  age: 17,
  major: "Mathematics",
  scholarship: {
    merit: 1000,
    other: 2000,
  },
});
console.log("儲存之前");
console.log(newObject); //建立的時候就已經有id了
newObject
  .save()
  .then((savedObject) => {
    console.log("資料成功儲存");
    console.log(savedObject);
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(3000, () => {
  console.log("正在聽port 3000");
});